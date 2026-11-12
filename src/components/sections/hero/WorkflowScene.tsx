'use client'

import { useEffect, useRef } from 'react'
import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  Group,
  InstancedMesh,
  LineBasicMaterial,
  LineDashedMaterial,
  LineSegments,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three'

interface WorkflowSceneProps {
  progress: number
  energy: number
  gap: number
  dark: boolean
  onReady: () => void
}

const LAYER_COLORS = ['#0E6A9E', '#00AEEF', '#193C57']
const MESSY_COUNT = 14
const GRID = 3

export default function WorkflowScene({ progress, energy, gap, dark, onReady }: WorkflowSceneProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const live = useRef({ progress, energy, gap, dark })

  useEffect(() => {
    live.current = { progress, energy, gap, dark }
  }, [progress, energy, gap, dark])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    let renderer: WebGLRenderer
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    el.appendChild(renderer.domElement)

    const scene = new Scene()
    const cam = new PerspectiveCamera(30, 1, 0.1, 100)
    cam.position.set(0, 0, 30)

    const left = new Group()
    const right = new Group()
    scene.add(left, right)

    const env = new BufferGeometry()
    const W = 0.72
    const H = 0.46
    env.setAttribute(
      'position',
      new BufferAttribute(
        new Float32Array([-W, -H, 0, W, -H, 0, W, -H, 0, W, H, 0, W, H, 0, -W, H, 0, -W, H, 0, -W, -H, 0, -W, H, 0, 0, -0.02, 0, 0, -0.02, 0, W, H, 0]),
        3,
      ),
    )
    const messyMat = new LineBasicMaterial({ color: '#0F1D33', transparent: true, opacity: 0.6 })
    const trailPos = new Float32Array((MESSY_COUNT - 1) * 6)
    const trailGeo = new BufferGeometry()
    trailGeo.setAttribute('position', new BufferAttribute(trailPos, 3))
    const trailMat = new LineDashedMaterial({ color: '#0F1D33', dashSize: 0.12, gapSize: 0.16, transparent: true, opacity: 0.45 })
    const trail = new LineSegments(trailGeo, trailMat)
    left.add(trail)
    const envelopes = Array.from({ length: MESSY_COUNT }, () => {
      const l = new LineSegments(env, messyMat)
      left.add(l)
      return l
    })
    const messyHome = Array.from({ length: MESSY_COUNT }, () => ({
      p: new Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 2),
      r: (Math.random() - 0.5) * 0.6,
      s: Math.random() * Math.PI * 2,
    }))

    const nodeGeo = new BoxGeometry(0.55, 0.18, 0.55)
    const nodeMat = new MeshBasicMaterial({ transparent: true, opacity: 0.95 })
    const dim = new Color('#FFFFFF')
    const tmp = new Color()
    const layerColors = LAYER_COLORS.map((c) => new Color(c))
    const count = GRID * GRID * 3
    const nodes = new InstancedMesh(nodeGeo, nodeMat, count)
    right.add(nodes)
    const nodeHome: Vector3[] = []
    for (let L = 0; L < 3; L++)
      for (let x = 0; x < GRID; x++)
        for (let z = 0; z < GRID; z++) {
          nodeHome.push(new Vector3((x - 1) * 1.1, (1 - L) * 1.5, (z - 1) * 1.1))
          nodes.setColorAt(nodeHome.length - 1, new Color(LAYER_COLORS[L]))
        }

    const pairs: number[] = []
    for (let i = 0; i < count; i++)
      for (let j = i + 1; j < count; j++) {
        const d = nodeHome[i].distanceTo(nodeHome[j])
        if (d < 1.2 || (Math.abs(d - 1.5) < 0.01 && nodeHome[i].x === nodeHome[j].x && nodeHome[i].z === nodeHome[j].z)) pairs.push(i, j)
      }
    const lpos = new Float32Array(pairs.length * 3)
    const lineGeo = new BufferGeometry()
    lineGeo.setAttribute('position', new BufferAttribute(lpos, 3))
    const lineMat = new LineBasicMaterial({ color: '#0F1D33', transparent: true, opacity: 0 })
    right.add(new LineSegments(lineGeo, lineMat))

    const dummy = new Object3D()
    const cur: Vector3[] = nodeHome.map(() => new Vector3())
    let shown = 0
    let flyX = 6
    let mx = 0
    let my = 0
    const onMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5
      my = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    function layout() {
      const w = el!.clientWidth
      const h = el!.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      cam.aspect = w / h
      cam.updateProjectionMatrix()
      const visH = 2 * Math.tan((cam.fov * Math.PI) / 360) * cam.position.z
      const visW = visH * cam.aspect
      const side = Math.max(0, (w - live.current.gap) / 2)
      const cx = ((side / 2) / w - 0.5) * visW
      left.position.set(cx, 0, 0)
      right.position.set(-cx, 0, 0)
      const scale = Math.min(1, ((side / w) * visW) / 6.5)
      left.scale.setScalar(scale)
      flyX = ((side / 2 + 24) / w) * visW / Math.max(scale, 0.01)
      right.scale.setScalar(scale)
    }
    layout()
    const ro = new ResizeObserver(layout)
    ro.observe(el)

    const ease = (t: number) => t * t * (3 - 2 * t)
    let raf = 0
    let ready = false
    const tick = (t: number) => {
      const { progress: target, energy: e, dark: isDark } = live.current
      shown += (target - shown) * 0.04
      const k = ease(Math.max(0, Math.min(1, shown)))
      const ink = isDark ? '#6E8BB5' : '#0F1D33'
      messyMat.color.set(ink)
      trailMat.color.set(ink)
      lineMat.color.set(ink)

      for (let i = 0; i < MESSY_COUNT; i++) {
        const m = messyHome[i]
        const fly = ease(Math.max(0, Math.min(1, (k - (i / MESSY_COUNT) * 0.7) * 3)))
        const wob = (0.15 + e * 0.5) * (1 - fly)
        const env = envelopes[i]
        env.position.set(
          m.p.x + (flyX - m.p.x) * fly + Math.sin(t / 900 + m.s) * wob,
          m.p.y * (1 - fly * 0.7) + Math.cos(t / 1100 + m.s) * wob,
          m.p.z,
        )
        env.rotation.set(0, 0, (m.r + Math.sin(t / 1500 + m.s) * 0.2) * (1 - fly))
        env.scale.setScalar(Math.max(0.001, 1 - fly * 0.8))
      }

      for (let i = 0; i < MESSY_COUNT - 1; i++) {
        const a = envelopes[i].position
        const b = envelopes[i + 1].position
        trailPos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6)
      }
      trailGeo.attributes.position.needsUpdate = true
      trail.computeLineDistances()
      trailMat.opacity = 0.45 * (1 - k)

      for (let i = 0; i < count; i++) {
        const lit = Math.max(0, Math.min(1, (k - (i / count) * 0.8) * 4))
        const pulse = 1 + lit * (1 - lit) * 0.6
        cur[i].copy(nodeHome[i])
        dummy.position.copy(cur[i])
        dummy.position.y += Math.sin(t / 1200 + i) * 0.04
        dummy.rotation.set(0, 0, 0)
        dummy.scale.setScalar(pulse)
        dummy.updateMatrix()
        nodes.setMatrixAt(i, dummy.matrix)
        nodes.setColorAt(i, tmp.copy(layerColors[Math.floor(i / (GRID * GRID))]).lerp(dim.set('#FFFFFF'), lit * (1 - lit) * 0.5))
      }
      nodes.instanceMatrix.needsUpdate = true
      if (nodes.instanceColor) nodes.instanceColor.needsUpdate = true

      for (let p = 0; p < pairs.length; p++) {
        const v = cur[pairs[p]]
        lpos[p * 3] = v.x
        lpos[p * 3 + 1] = v.y
        lpos[p * 3 + 2] = v.z
      }
      lineGeo.attributes.position.needsUpdate = true
      lineMat.opacity = 0.15 + k * 0.45

      right.rotation.y += (0.6 + mx * 0.5 + Math.sin(t / 4000) * 0.15 - right.rotation.y) * 0.05
      right.rotation.x += (0.45 + my * 0.3 - right.rotation.x) * 0.05
      left.rotation.y += (mx * 0.3 - left.rotation.y) * 0.05

      renderer.render(scene, cam)
      if (!ready) {
        ready = true
        onReady()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      env.dispose()
      trailGeo.dispose()
      trailMat.dispose()
      nodeGeo.dispose()
      lineGeo.dispose()
      messyMat.dispose()
      nodeMat.dispose()
      lineMat.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [onReady])

  return <div ref={stageRef} className="absolute inset-0" />
}
