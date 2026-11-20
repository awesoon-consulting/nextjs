import type * as Three from 'three'

// The line-art street: grey homes on a survey grid, the agent's home in petrol, leads traveling into it.
// Port of businesses/ownvane/pitch/street.js (hero view, leads on). Renders only while started.
export function createStreet(T: typeof Three, canvas: HTMLCanvasElement, tokens: Element, lite: boolean) {
  const css = getComputedStyle(tokens)
  const tok = (n: string) => new T.Color(css.getPropertyValue(n).trim())
  const CANVAS = tok('--canvas')
  const INK = tok('--ink')
  const PETROL = tok('--petrol')
  const SURFACE = tok('--surface')
  const SHEEN = [tok('--petrol-400'), tok('--sheen-blue'), tok('--sheen-violet'), tok('--petrol-300')]

  const renderer = new T.WebGLRenderer({ canvas, antialias: !lite, alpha: false, powerPreference: lite ? 'low-power' : 'default' })
  renderer.setPixelRatio(lite ? 1 : Math.min(window.devicePixelRatio || 1, 2))
  renderer.setClearColor(CANVAS, 1)
  const scene = new T.Scene()
  scene.fog = new T.Fog(CANVAS, 40, 150)
  const camera = new T.PerspectiveCamera(32, 16 / 9, 0.1, 200)

  function size() {
    const W = canvas.clientWidth
    const H = canvas.clientHeight
    if (!W || !H) return
    renderer.setSize(W, H, false)
    camera.aspect = W / H
    camera.fov = W / H < 1 ? 48 : 32
    camera.updateProjectionMatrix()
  }
  size()

  const grid = new T.GridHelper(120, 60, INK, INK)
  const gridMat = grid.material as Three.Material
  gridMat.transparent = true
  gridMat.opacity = 0.1
  scene.add(grid)

  const lineMat = new T.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.32 })
  function house(w: number, h: number, d: number, roofH: number) {
    const g = new T.Group()
    const b = new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(w, h, d)), lineMat)
    b.position.y = h / 2
    const r = new T.LineSegments(new T.EdgesGeometry(new T.ConeGeometry(Math.max(w, d) * 0.72, roofH, 4)), lineMat)
    r.position.y = h + roofH / 2
    r.rotation.y = Math.PI / 4
    g.add(b, r)
    return g
  }
  ;[-20, -15, -10, -5, 5, 10, 15, 20].forEach((x, i) => {
    const h = house(2.6, 1.8 + (i % 3) * 0.5, 2.6, 1.2)
    h.position.set(x, 0, (i % 2) * 0.6)
    scene.add(h)
  })

  const solidMat = new T.MeshBasicMaterial({ color: SURFACE, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 })
  const edgeMat = new T.LineBasicMaterial({ color: PETROL })
  const boxG = new T.BoxGeometry(3.2, 2.6, 3.2)
  const roofG = new T.ConeGeometry(2.4, 1.6, 4)
  const hero = new T.Group()
  const body = new T.Mesh(boxG, solidMat)
  body.position.y = 1.3
  const bodyE = new T.LineSegments(new T.EdgesGeometry(boxG), edgeMat)
  bodyE.position.y = 1.3
  const roof = new T.Mesh(roofG, solidMat)
  roof.position.y = 3.4
  roof.rotation.y = Math.PI / 4
  const roofE = new T.LineSegments(new T.EdgesGeometry(roofG), edgeMat)
  roofE.position.y = 3.4
  roofE.rotation.y = Math.PI / 4
  hero.add(body, bodyE, roof, roofE)
  scene.add(hero)

  const sources = [
    [-18, 8, -6],
    [18, 8, -6],
    [-12, 11, 8],
    [12, 11, 8],
    [-6, 13, -14],
    [6, 13, -14],
  ].map((v) => new T.Vector3(v[0], v[1], v[2]))
  const N = sources.length
  const pos = new Float32Array(N * 3)
  const col = new Float32Array(N * 3)
  const pg = new T.BufferGeometry()
  pg.setAttribute('position', new T.BufferAttribute(pos, 3))
  pg.setAttribute('color', new T.BufferAttribute(col, 3))
  for (let k = 0; k < N; k++) {
    const c = SHEEN[k % SHEEN.length]
    col[k * 3] = c.r
    col[k * 3 + 1] = c.g
    col[k * 3 + 2] = c.b
  }
  const dot = document.createElement('canvas')
  dot.width = dot.height = 64
  const g2 = dot.getContext('2d')!
  const grad = g2.createRadialGradient(32, 32, 0, 32, 32, 32)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.45, 'rgba(255,255,255,0.9)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  g2.fillStyle = grad
  g2.beginPath()
  g2.arc(32, 32, 32, 0, Math.PI * 2)
  g2.fill()
  const dotTex = new T.CanvasTexture(dot)
  const pMat = new T.PointsMaterial({ vertexColors: true, map: dotTex, size: lite ? 9 : 11, sizeAttenuation: false, transparent: true, opacity: 0, alphaTest: 0.02, depthWrite: false })
  scene.add(new T.Points(pg, pMat))
  const target = new T.Vector3(0, 2.2, 0)
  const ctrl = new T.Vector3()

  const view = { p: [0, 7, 26], l: [0, 3, 0] }
  const camPos = new T.Vector3().fromArray(view.p)
  const look = new T.Vector3().fromArray(view.l)
  const t0 = performance.now()
  let running = false
  let raf = 0
  let last = 0
  let leadT = 0

  function draw(now: number) {
    const t = (now - t0) / 1000
    const orbit = Math.sin(t * 0.08) * 0.06
    camera.position.set(camPos.x * Math.cos(orbit) - camPos.z * Math.sin(orbit), camPos.y, camPos.x * Math.sin(orbit) + camPos.z * Math.cos(orbit))
    camera.lookAt(look)
    pMat.opacity += (1 - pMat.opacity) * 0.06
    leadT += 0.0035
    for (let i = 0; i < N; i++) {
      const src = sources[i]
      const u = (leadT + i / N) % 1
      const iu = 1 - u
      ctrl.set(src.x * 0.45, src.y + 3, src.z * 0.45)
      pos[i * 3] = iu * iu * src.x + 2 * iu * u * ctrl.x + u * u * target.x
      pos[i * 3 + 1] = iu * iu * src.y + 2 * iu * u * ctrl.y + u * u * target.y
      pos[i * 3 + 2] = iu * iu * src.z + 2 * iu * u * ctrl.z + u * u * target.z
    }
    pg.attributes.position.needsUpdate = true
    renderer.render(scene, camera)
  }
  function frame(now: number) {
    if (!running) return
    raf = requestAnimationFrame(frame)
    if (lite && now - last < 33) return
    last = now
    draw(now)
  }
  function onResize() {
    size()
    if (!running) draw(performance.now())
  }
  window.addEventListener('resize', onResize)
  draw(performance.now())

  return {
    start() {
      if (running) return
      running = true
      raf = requestAnimationFrame(frame)
    },
    stop() {
      running = false
      cancelAnimationFrame(raf)
    },
    dispose() {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      scene.traverse((o) => {
        const m = o as Three.Mesh
        m.geometry?.dispose()
        const mat = m.material as Three.Material | Three.Material[] | undefined
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
        else mat?.dispose()
      })
      dotTex.dispose()
      renderer.dispose()
    },
  }
}
