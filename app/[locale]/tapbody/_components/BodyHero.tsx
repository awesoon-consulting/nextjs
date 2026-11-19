'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  DoubleSide,
  FrontSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Raycaster,
  RingGeometry,
  Scene,
  ShaderMaterial,
  Sprite,
  SpriteMaterial,
  Vector2,
  Vector3,
  Vector4,
  WebGLRenderer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

type RegionKey =
  | 'head' | 'neck' | 'chest' | 'upperBack' | 'lowerBack' | 'stomach' | 'shoulder' | 'hip'
  | 'thigh' | 'knee' | 'shin' | 'calf' | 'foot' | 'upperArm' | 'forearm' | 'hand'

export interface BodyHeroLabels {
  sided: string
  left: string
  right: string
  regions: Record<RegionKey, string>
  hint: string
  bodyLabel: string
  loading: string
}

const MAX_SPOTS = 8

const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;} vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);} vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){ const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx); vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy; i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx; vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y); vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0)); vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3))); p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3))); }
float fbm(vec3 p){ float f=0.0, a=0.5; for(int i=0;i<4;i++){ f+=a*snoise(p); p*=2.03; a*=0.5; } return 0.5+0.5*f; }
`

const FRAGMENT = `uniform float uTime, uYMin, uH; uniform vec3 uA, uR;
uniform vec4 uSpot[${MAX_SPOTS}]; uniform float uSpotA[${MAX_SPOTS}];
uniform vec4 uRipple; uniform vec4 uHover;
varying vec3 vN; varying vec3 vV; varying vec3 vL;
${NOISE}
void main(){
  vec3 p = vL;
  float h = clamp((p.y - uYMin) / uH, 0.0, 1.0);
  vec3 col = mix(uR, uA, smoothstep(0.05, 0.95, h));
  float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
  float scan = 0.5 + 0.5 * sin(p.y * 260.0 - uTime * 1.6);
  float band = fract(h - uTime * 0.08); float bd = min(band, 1.0 - band) / 0.035; float sweep = exp(-bd * bd) * (0.75 + 0.25 * snoise(vec3(p.x * 6.0, p.z * 6.0, uTime * 0.4)));
  vec3 cloud = vec3(0.0); float cover = 0.0;
  for (int i = 0; i < ${MAX_SPOTS}; i++) {
    float amp = uSpotA[i];
    if (amp < 0.002) continue;
    vec3 c = uSpot[i].xyz; float r = uSpot[i].w;
    float d = distance(p, c);
    if (d > r * 2.6) continue;
    float drift = fbm(p * 20.0 + c * 9.0 + vec3(uTime * 0.16, -uTime * 0.11, uTime * 0.09));
    float rr = r * (0.70 + 0.65 * drift);
    float g = exp(-(d * d) / (rr * rr) * 2.0) * amp;
    g *= 0.70 + 0.45 * fbm(p * 46.0 - vec3(0.0, uTime * 0.22, 0.0));
    vec3 cc = mix(vec3(1.0, 0.66, 0.40), vec3(0.82, 1.0, 0.34), smoothstep(0.15, 0.85, g));
    cloud += cc * g; cover += g;
  }
  float rt = uTime - uRipple.w;
  if (rt > 0.0 && rt < 1.8) {
    float d = distance(p, uRipple.xyz);
    float rad = 0.02 + rt * 0.20; float w = 0.025 + rt * 0.035;
    float ring = exp(-pow((d - rad) / w, 2.0)) * pow(1.0 - rt / 1.8, 1.5);
    ring *= 0.55 + 0.7 * fbm(p * 24.0 + vec3(rt));
    cloud += vec3(1.0, 0.84, 0.62) * ring * 0.85; cover += ring * 0.5;
  }
  if (uHover.w > 0.002) {
    float hd = distance(p, uHover.xyz);
    float hg = exp(-(hd * hd) / 0.0028) * uHover.w * (0.6 + 0.5 * fbm(p * 30.0 + uTime * 0.3));
    cloud += vec3(1.0, 0.78, 0.55) * hg * 0.45; cover += hg * 0.25;
  }
  float glow = 0.32 + rim * 1.25 + scan * 0.035 + sweep * 0.55;
  float a = clamp(0.20 + rim * 0.95 + sweep * 0.14 + cover * 0.55, 0.0, 1.0);
  gl_FragColor = vec4(col * glow + cloud * 1.45, a);
}`

const VERTEX = `varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){ vL = position; vec4 w = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`

function softTexture(stops: [number, string][]) {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const x = c.getContext('2d')!
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64)
  stops.forEach(([o, col]) => g.addColorStop(o, col))
  x.fillStyle = g
  x.fillRect(0, 0, 128, 128)
  return new CanvasTexture(c)
}

export default function BodyHero({ labels }: { labels: BodyHeroLabels }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [tag, setTag] = useState<{ text: string; x: number; y: number; key: number } | null>(null)
  const [loaded, setLoaded] = useState(false)
  const labelsRef = useRef(labels)
  labelsRef.current = labels

  useEffect(() => {
    const host = hostRef.current!
    const canvas = canvasRef.current!
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let renderer: WebGLRenderer
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    const scene = new Scene()
    const camera = new PerspectiveCamera(30, 1, 0.05, 50)
    const rig = new Group()
    scene.add(rig)
    const pins = new Group()
    rig.add(pins)
    const ray = new Raycaster()
    const ndc = new Vector2()

    const uniforms = {
      uTime: { value: 0 },
      uYMin: { value: 0 },
      uH: { value: 1.7 },
      uA: { value: new Color('#FFB36B') },
      uR: { value: new Color('#FF5C8A') },
      uSpot: { value: Array.from({ length: MAX_SPOTS }, () => new Vector4(0, -9, 0, 0.05)) },
      uSpotA: { value: new Array(MAX_SPOTS).fill(0) as number[] },
      uRipple: { value: new Vector4(0, -9, 0, -10) },
      uHover: { value: new Vector4(0, -9, 0, 0) },
    }
    const material = new ShaderMaterial({ uniforms, vertexShader: VERTEX, fragmentShader: FRAGMENT, transparent: true, depthWrite: true, side: FrontSide })

    const floor = new Group()
    scene.add(floor)
    ;[[0.36, 0.006, '#FF8A74', 0.9], [0.46, 0.004, '#FF5C8A', 0.6], [0.56, 0.003, '#FFB36B', 0.25]].forEach(([r, w, c, o]) => {
      const ring = new Mesh(
        new RingGeometry((r as number) - (w as number), r as number, 128),
        new MeshBasicMaterial({ color: c as string, transparent: true, opacity: o as number, side: DoubleSide, blending: AdditiveBlending, depthWrite: false })
      )
      ring.rotation.x = -Math.PI / 2
      floor.add(ring)
    })
    const haloTex = softTexture([[0, 'rgba(226,255,143,0.9)'], [0.25, 'rgba(204,255,77,0.45)'], [0.6, 'rgba(255,179,107,0.12)'], [1, 'rgba(255,179,107,0)']])
    const coreTex = softTexture([[0, 'rgba(255,255,240,1)'], [0.35, 'rgba(226,255,143,0.85)'], [1, 'rgba(204,255,77,0)']])

    type Spot = { pos: Vector3; r: number; a: number; target: number; born: number }
    const spots: Spot[] = []
    let active: Spot | null = null
    const hover = { pos: new Vector3(0, -9, 0), a: 0, target: 0 }
    let mesh: Mesh | null = null
    let H = 1.7
    let yMin = 0
    let yaw = Math.PI * 0.82
    let yawV = 0
    let dragging = false
    let moved = 0
    let lastX = 0
    let idle = 10
    let visible = true
    let raf = 0
    const t0 = performance.now()
    let last = t0
    let tagTimer: ReturnType<typeof setTimeout> | undefined

    const addSpot = (pos: Vector3, r: number, target: number) => {
      const s = { pos: pos.clone(), r, a: 0, target, born: performance.now() }
      spots.push(s)
      return s
    }

    const regionName = (local: Vector3, normal: Vector3) => {
      const L = labelsRef.current
      const h = (local.y - yMin) / H
      const ax = Math.abs(local.x)
      const back = normal.z < 0
      const side = local.x > 0 ? L.left : L.right
      const sided = (k: RegionKey) => L.sided.replace('{side}', side).replace('{part}', L.regions[k])
      if (h > 0.87) return L.regions.head
      if (h > 0.82) return L.regions.neck
      if (ax > 0.15 && h > 0.45) return sided(h > 0.7 ? 'upperArm' : h > 0.58 ? 'forearm' : 'hand')
      if (h > 0.7) return back ? L.regions.upperBack : ax > 0.09 ? sided('shoulder') : L.regions.chest
      if (h > 0.56) return back ? L.regions.lowerBack : L.regions.stomach
      if (h > 0.47) return sided('hip')
      if (h > 0.33) return sided('thigh')
      if (h > 0.25) return sided('knee')
      if (h > 0.06) return sided(back ? 'calf' : 'shin')
      return sided('foot')
    }

    const resize = () => {
      const w = host.clientWidth
      const h = host.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)

    const loader = new GLTFLoader()
    loader.setMeshoptDecoder(MeshoptDecoder)
    loader.load('/images/tapbody/body.glb', (gltf) => {
      gltf.scene.traverse((o) => {
        if ((o as Mesh).isMesh && !mesh) mesh = o as Mesh
      })
      if (!mesh) return
      const m = mesh as Mesh
      m.geometry.computeBoundingBox()
      const bb = m.geometry.boundingBox!
      H = bb.max.y - bb.min.y
      yMin = bb.min.y
      const cx = (bb.max.x + bb.min.x) / 2
      const cz = (bb.max.z + bb.min.z) / 2
      m.geometry.translate(-cx, 0, -cz)
      m.position.set(0, 0, 0)
      m.rotation.set(0, 0, 0)
      m.scale.set(1, 1, 1)
      m.material = material
      rig.add(m)
      rig.updateMatrixWorld(true)
      uniforms.uYMin.value = yMin
      uniforms.uH.value = H
      floor.position.y = yMin + 0.002
      ;[[0.6, 0], [0.29, 0.085]].forEach(([hh, x]) => {
        ray.set(new Vector3(x, yMin + hh * H, -3), new Vector3(0, 0, 1))
        const hit = ray.intersectObject(m)[0]
        if (!hit || !hit.face) return
        const n = hit.face.normal.clone()
        const g = new Group()
        const halo = new Sprite(new SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false, blending: AdditiveBlending }))
        const core = new Sprite(new SpriteMaterial({ map: coreTex, transparent: true, depthWrite: false, blending: AdditiveBlending }))
        halo.scale.setScalar(0.09)
        core.scale.setScalar(0.03)
        g.add(halo, core)
        g.position.copy(hit.point).addScaledVector(n, 0.01)
        g.userData.born = performance.now()
        pins.add(g)
        addSpot(hit.point, 0.05, 0.75)
      })
      resize()
      setLoaded(true)
      wake()
    })

    const localHit = (clientX: number, clientY: number) => {
      if (!mesh) return null
      const r = canvas.getBoundingClientRect()
      ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1)
      ray.setFromCamera(ndc, camera)
      const hit = ray.intersectObject(mesh)[0]
      if (!hit || !hit.face) return null
      return { local: rig.worldToLocal(hit.point.clone()), normal: hit.face.normal.clone(), r }
    }

    const onDown = (e: PointerEvent) => {
      dragging = true
      moved = 0
      lastX = e.clientX
      canvas.setPointerCapture(e.pointerId)
      idle = 0
      wake()
    }
    const onMove = (e: PointerEvent) => {
      if (!dragging) {
        if (e.pointerType === 'mouse') {
          const h = localHit(e.clientX, e.clientY)
          if (h) {
            hover.pos.copy(h.local)
            hover.target = 1
            canvas.style.cursor = 'pointer'
          } else {
            hover.target = 0
            canvas.style.cursor = 'grab'
          }
          wake()
        }
        return
      }
      const dx = e.clientX - lastX
      moved += Math.abs(dx)
      lastX = e.clientX
      yawV = dx * 0.0085
      yaw += yawV
      wake()
    }
    const onUp = (e: PointerEvent) => {
      dragging = false
      if (moved >= 6) return
      const h = localHit(e.clientX, e.clientY)
      if (!h) return
      if (active) active.target = 0
      active = addSpot(h.local, 0.085, 1)
      const a = active
      setTimeout(() => { a.target = 0 }, 2600)
      uniforms.uRipple.value.set(h.local.x, h.local.y, h.local.z, uniforms.uTime.value)
      const rect = host.getBoundingClientRect()
      setTag({ text: regionName(h.local, h.normal), x: e.clientX - rect.left, y: e.clientY - rect.top, key: performance.now() })
      clearTimeout(tagTimer)
      tagTimer = setTimeout(() => setTag(null), 2400)
      wake()
    }
    const onLeave = () => { hover.target = 0 }
    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointerleave', onLeave)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) wake()
    })
    io.observe(host)

    function wake() {
      if (!raf && visible) {
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }

    function frame(t: number) {
      raf = 0
      if (!visible || document.hidden) return
      const dt = Math.min(0.05, (t - last) / 1000)
      last = t
      uniforms.uTime.value = (t - t0) / 1000
      if (!dragging) {
        yaw += yawV
        yawV *= Math.pow(0.04, dt)
        idle += dt
        if (!reduce && idle > 3 && Math.abs(yawV) < 0.0005) yaw += dt * 0.16
      }
      rig.rotation.y = yaw
      camera.position.set(0, yMin + H * 0.5, 4.7)
      camera.lookAt(0, yMin + H * 0.47, 0)
      const now = performance.now()
      pins.children.forEach((g) => {
        const k = (now - (g.userData.born as number)) / 1000
        const breath = 1 + 0.16 * Math.sin(k * 2.2)
        g.children[0].scale.setScalar(0.09 * breath)
        g.children[1].scale.setScalar(0.03 * (0.85 + 0.15 * breath))
      })
      for (let i = spots.length - 1; i >= 0; i--) {
        const s = spots[i]
        const k = (now - s.born) / 1000
        const goal = s.target * (s === active ? 0.9 + 0.12 * Math.sin(k * 3.1) : 0.92 + 0.08 * Math.sin(k * 1.7 + i))
        s.a += (goal - s.a) * Math.min(1, dt * (s.target > 0 ? 3.2 : 2.2))
        if (s.target === 0 && s.a < 0.004) {
          if (s === active) active = null
          spots.splice(i, 1)
        }
      }
      hover.a += (hover.target - hover.a) * Math.min(1, dt * 6)
      uniforms.uHover.value.set(hover.pos.x, hover.pos.y, hover.pos.z, hover.a)
      for (let i = 0; i < MAX_SPOTS; i++) {
        const s = spots[spots.length - 1 - i]
        if (s) {
          uniforms.uSpot.value[i].set(s.pos.x, s.pos.y, s.pos.z, s.r * (s === active ? 0.6 + 0.4 * Math.min(1, (now - s.born) / 600) : 1))
          uniforms.uSpotA.value[i] = s.a
        } else uniforms.uSpotA.value[i] = 0
      }
      renderer.render(scene, camera)
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(tagTimer)
      ro.disconnect()
      io.disconnect()
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointerleave', onLeave)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={hostRef} className="relative h-full w-full">
      <canvas ref={canvasRef} aria-label={labels.bodyLabel} role="img" className="absolute inset-0 h-full w-full touch-pan-y" style={{ cursor: 'grab' }} />
      {!loaded && (
        <p className="absolute inset-0 grid place-items-center font-mono text-xs uppercase tracking-[0.16em] text-[#C9ABA3]">{labels.loading}</p>
      )}
      {tag && (
        <div
          key={tag.key}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-[140%] whitespace-nowrap rounded-2xl border border-[#CCFF4D]/40 bg-[#1A0C10]/70 px-3 py-2 text-sm font-semibold text-[#F8EFEB] backdrop-blur-md motion-safe:animate-[tbTag_.45s_cubic-bezier(.22,.9,.24,1)_both]"
          style={{ left: tag.x, top: tag.y }}
        >
          {tag.text}
        </div>
      )}
      <p className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-sm text-[#C9ABA3]">{labels.hint}</p>
    </div>
  )
}
