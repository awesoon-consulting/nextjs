import type * as Three from 'three'

export const STEPS = ['intro', 'home', 'ads', 'ai', 'portal', 'moves', 'plans', 'yours', 'waitlist'] as const
export type Step = (typeof STEPS)[number]

type View = { p: [number, number, number]; l: [number, number, number] }
type Look = { heroLit: number; sign: number; ads: number; card: number; portal: number; plans: number; boundary: number }

// One street in line art. Each step is a camera position plus what is lit; the camera flies between them.
const VIEWS: Record<Step, View> = {
  intro: { p: [-46, 5, 11], l: [-18, 2, 0] },
  home: { p: [0, 4.6, 13], l: [0, 2.4, 0] },
  ads: { p: [0, 8, 24], l: [0, 6.5, -3] },
  ai: { p: [7, 4.8, 14], l: [2.6, 3.2, 0.5] },
  portal: { p: [0, 19, 27], l: [0, 1, 0] },
  moves: { p: [8, 3.4, 10.5], l: [2.2, 2, 1.2] },
  plans: { p: [61, 10, 34], l: [61, 1.6, 0] },
  yours: { p: [0, 32, 13], l: [0, 0, 0.3] },
  waitlist: { p: [0, 30, 66], l: [0, 0, -6] },
}

const LOOKS: Record<Step, Look> = {
  intro: { heroLit: 0, sign: 0, ads: 0, card: 0, portal: 0, plans: 0, boundary: 0 },
  home: { heroLit: 1, sign: 1, ads: 0, card: 0, portal: 0, plans: 0, boundary: 0 },
  ads: { heroLit: 1, sign: 1, ads: 1, card: 0, portal: 0, plans: 0, boundary: 0 },
  ai: { heroLit: 1, sign: 1, ads: 0.25, card: 1, portal: 0, plans: 0, boundary: 0 },
  portal: { heroLit: 1, sign: 1, ads: 0.25, card: 0, portal: 1, plans: 0, boundary: 0 },
  moves: { heroLit: 1, sign: 1, ads: 0.6, card: 0, portal: 0.4, plans: 0, boundary: 0 },
  plans: { heroLit: 1, sign: 1, ads: 0, card: 0, portal: 0, plans: 1, boundary: 0 },
  yours: { heroLit: 1, sign: 1, ads: 0.3, card: 0, portal: 0.3, plans: 0, boundary: 1 },
  waitlist: { heroLit: 1, sign: 1, ads: 0.5, card: 0, portal: 0.4, plans: 0.4, boundary: 1 },
}

const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)
const clamp01 = (x: number) => Math.min(1, Math.max(0, x))

export function createJourneyScene(T: typeof Three, canvas: HTMLCanvasElement, tokens: Element, opts: { lite: boolean; still: boolean; flightMs: number }) {
  const { lite, still } = opts
  const css = getComputedStyle(tokens)
  const tok = (n: string) => new T.Color(css.getPropertyValue(n).trim())
  const CANVAS = tok('--canvas')
  const INK = tok('--ink')
  const PETROL = tok('--petrol')
  const SURFACE = tok('--surface')
  const SLATE = tok('--slate')
  const VIOLET = tok('--sheen-violet')
  const SHEEN = [tok('--petrol-400'), tok('--sheen-blue'), tok('--sheen-violet'), tok('--petrol-300')]

  const renderer = new T.WebGLRenderer({ canvas, antialias: !lite, alpha: false, powerPreference: lite ? 'low-power' : 'default' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lite ? 1.5 : 2))
  renderer.setClearColor(CANVAS, 1)
  const scene = new T.Scene()
  scene.fog = new T.Fog(CANVAS, 45, 160)
  const camera = new T.PerspectiveCamera(36, 16 / 9, 0.1, 260)

  // The look-at point sits right of the copy on wide screens and above it on phones.
  function size() {
    const W = canvas.clientWidth
    const H = canvas.clientHeight
    if (!W || !H) return
    renderer.setSize(W, H, false)
    const portrait = W / H < 1
    camera.aspect = W / H
    camera.fov = portrait ? 58 : 36
    if (W >= 900) camera.setViewOffset(W, H, -W * 0.17, 0, W, H)
    else if (portrait) camera.setViewOffset(W, H, 0, H * 0.16, W, H)
    else camera.clearViewOffset()
    camera.updateProjectionMatrix()
  }
  size()

  const disposables: { dispose: () => void }[] = []
  const track = <D extends { dispose: () => void }>(d: D) => (disposables.push(d), d)

  const grid = new T.GridHelper(220, lite ? 55 : 110, INK, INK)
  const gridMat = grid.material as Three.Material
  gridMat.transparent = true
  gridMat.opacity = 0.08
  grid.position.x = 20
  scene.add(grid)

  const lineMat = track(new T.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.3 }))
  const solidMat = track(new T.MeshBasicMaterial({ color: SURFACE, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }))
  const boxG = track(new T.BoxGeometry(1, 1, 1))
  const roofG = track(new T.ConeGeometry(0.72, 1, 4))
  const boxE = track(new T.EdgesGeometry(boxG))
  const roofE = track(new T.EdgesGeometry(roofG))

  function house(w: number, h: number, roofH: number, mat: Three.LineBasicMaterial, solid = false) {
    const g = new T.Group()
    const b = new T.LineSegments(boxE, mat)
    b.scale.set(w, h, w)
    b.position.y = h / 2
    const r = new T.LineSegments(roofE, mat)
    r.scale.set(w, roofH, w)
    r.position.y = h + roofH / 2
    r.rotation.y = Math.PI / 4
    g.add(b, r)
    if (solid) {
      const bs = new T.Mesh(boxG, solidMat)
      bs.scale.copy(b.scale)
      bs.position.copy(b.position)
      const rs = new T.Mesh(roofG, solidMat)
      rs.scale.copy(r.scale)
      rs.position.copy(r.position)
      rs.rotation.y = Math.PI / 4
      g.add(bs, rs)
    }
    return g
  }

  // The street: a front row and a back row, the agent's home in the middle of the front row.
  const clientMat = track(new T.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.3 }))
  const clientSpots: Three.Vector3[] = []
  const front = lite ? [-30, -20, -15, -10, -5, 5, 10, 15, 20, 30] : [-40, -35, -30, -25, -20, -15, -10, -5, 5, 10, 15, 20, 25, 30, 35, 40]
  front.forEach((x, i) => {
    const client = x === -10 || x === 10 || x === -20 || x === 20
    const h = house(2.6, 1.8 + (i % 3) * 0.5, 1.2, client ? clientMat : lineMat)
    h.position.set(x, 0, (i % 2) * 0.5)
    scene.add(h)
    if (client) clientSpots.push(new T.Vector3(x, 2.6 + (i % 3) * 0.5, (i % 2) * 0.5))
  })
  if (!lite) {
    for (let x = -37.5; x <= 37.5; x += 5) {
      const h = house(2.4, 1.6 + (Math.abs(x) % 3) * 0.4, 1.1, lineMat)
      h.position.set(x, 0, -9)
      scene.add(h)
    }
  }
  const roadG = track(new T.BufferGeometry().setFromPoints([new T.Vector3(-60, 0, 4), new T.Vector3(80, 0, 4), new T.Vector3(-60, 0, 7.5), new T.Vector3(80, 0, 7.5)]))
  scene.add(new T.LineSegments(roadG, lineMat))

  const heroMat = track(new T.LineBasicMaterial({ color: INK.clone(), transparent: true, opacity: 0.5 }))
  const hero = house(3.2, 2.6, 1.6, heroMat, true)
  scene.add(hero)
  const heroTop = new T.Vector3(0, 3.6, 0)

  // The brokerage sign beside the home. It flips to a new brokerage on the "moves" step; the home stays.
  const signMat = track(new T.LineBasicMaterial({ color: SLATE.clone(), transparent: true, opacity: 0 }))
  const sign = new T.Group()
  const postG = track(new T.BufferGeometry().setFromPoints([new T.Vector3(0, 0, 0), new T.Vector3(0, 2.3, 0), new T.Vector3(0, 2.3, 0), new T.Vector3(0.9, 2.3, 0)]))
  sign.add(new T.LineSegments(postG, signMat))
  const panel = new T.LineSegments(boxE, signMat)
  panel.scale.set(1.2, 0.7, 0.04)
  const panelPivot = new T.Group()
  panelPivot.position.set(0.9, 1.85, 0)
  panel.position.set(0, 0, 0)
  panelPivot.add(panel)
  sign.add(panelPivot)
  sign.position.set(2.6, 0, 2.7)
  scene.add(sign)

  // Ad networks in the sky; leads travel from them into the home.
  const sourceMat = track(new T.LineBasicMaterial({ color: PETROL, transparent: true, opacity: 0 }))
  const ringG = track(new T.BufferGeometry().setFromPoints(new T.EllipseCurve(0, 0, 1.1, 1.1, 0, Math.PI * 2).getPoints(40).map((p) => new T.Vector3(p.x, p.y, 0))))
  const sources = [new T.Vector3(-13, 12, -8), new T.Vector3(0, 15, -14), new T.Vector3(13, 12, -8)]
  sources.forEach((s) => {
    const ring = new T.LineLoop(ringG, sourceMat)
    ring.position.copy(s)
    scene.add(ring)
  })
  const dotTex = (() => {
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const g = c.getContext('2d')!
    const r = g.createRadialGradient(32, 32, 0, 32, 32, 32)
    r.addColorStop(0, 'rgba(255,255,255,1)')
    r.addColorStop(0.45, 'rgba(255,255,255,0.9)')
    r.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = r
    g.beginPath()
    g.arc(32, 32, 32, 0, Math.PI * 2)
    g.fill()
    return track(new T.CanvasTexture(c))
  })()
  function points(n: number, colors: Three.Color[], size: number) {
    const pos = new Float32Array(n * 3)
    const col = new Float32Array(n * 3)
    const g = track(new T.BufferGeometry())
    g.setAttribute('position', new T.BufferAttribute(pos, 3))
    g.setAttribute('color', new T.BufferAttribute(col, 3))
    for (let k = 0; k < n; k++) {
      const c = colors[k % colors.length]
      col.set([c.r, c.g, c.b], k * 3)
    }
    const m = track(new T.PointsMaterial({ vertexColors: true, map: dotTex, size, sizeAttenuation: false, transparent: true, opacity: 0, alphaTest: 0.02, depthWrite: false }))
    scene.add(new T.Points(g, m))
    return { pos, g, m }
  }
  const LEADS = lite ? 12 : 18
  const leads = points(LEADS, SHEEN, lite ? 9 : 11)
  const bez = (a: Three.Vector3, c: Three.Vector3, b: Three.Vector3, u: number, out: Three.Vector3) => {
    const iu = 1 - u
    return out.set(iu * iu * a.x + 2 * iu * u * c.x + u * u * b.x, iu * iu * a.y + 2 * iu * u * c.y + u * u * b.y, iu * iu * a.z + 2 * iu * u * c.z + u * u * b.z)
  }
  const tmp = new T.Vector3()
  const ctrl = new T.Vector3()

  // The reply card beside the home: three lines draft themselves, the send button fills, the reply flies to a client.
  const cardMat = track(new T.LineBasicMaterial({ color: INK, transparent: true, opacity: 0 }))
  const cardPetrol = track(new T.LineBasicMaterial({ color: PETROL, transparent: true, opacity: 0 }))
  const card = new T.Group()
  const rect = (w: number, h: number) => track(new T.BufferGeometry().setFromPoints([new T.Vector3(-w / 2, -h / 2, 0), new T.Vector3(w / 2, -h / 2, 0), new T.Vector3(w / 2, h / 2, 0), new T.Vector3(-w / 2, h / 2, 0)]))
  card.add(new T.LineLoop(rect(3.4, 2.1), cardMat))
  const barG = track(new T.BufferGeometry().setFromPoints([new T.Vector3(0, 0, 0), new T.Vector3(1, 0, 0)]))
  const bars = [2.6, 2.2, 1.5].map((w, i) => {
    const b = new T.Line(barG, cardMat)
    b.position.set(-1.4, 0.55 - i * 0.38, 0)
    b.userData.w = w
    b.scale.x = 0.0001
    card.add(b)
    return b
  })
  const sendG = rect(0.9, 0.36)
  const send = new T.LineLoop(sendG, cardPetrol)
  send.position.set(1.05, -0.68, 0)
  card.add(send)
  const sendFillMat = track(new T.MeshBasicMaterial({ color: PETROL, transparent: true, opacity: 0 }))
  const sendFill = new T.Mesh(track(new T.PlaneGeometry(0.9, 0.36)), sendFillMat)
  sendFill.position.copy(send.position)
  card.add(sendFill)
  card.position.set(4.6, 3.9, 1.6)
  card.rotation.y = -0.35
  scene.add(card)
  const reply = points(1, [PETROL], lite ? 12 : 14)

  // Client portal: the clients' homes connect to the agent's home, with a pulse running along each line.
  const portalMat = track(new T.LineBasicMaterial({ color: PETROL, transparent: true, opacity: 0 }))
  const portalCurves = clientSpots.map((c) => {
    const mid = c.clone().add(heroTop).multiplyScalar(0.5)
    mid.y += 5
    const curve = new T.QuadraticBezierCurve3(c, mid, heroTop)
    scene.add(new T.Line(track(new T.BufferGeometry().setFromPoints(curve.getPoints(32))), portalMat))
    return curve
  })
  const pulses = points(portalCurves.length, [PETROL], lite ? 8 : 10)

  // Three plans at the end of the street: one home, one home in petrol, a team of homes.
  const plansMat = track(new T.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.25 }))
  const plansPetrol = track(new T.LineBasicMaterial({ color: PETROL, transparent: true, opacity: 0.25 }))
  const starter = house(2.4, 2, 1.1, plansMat)
  starter.position.set(52, 0, 0)
  const pro = house(3, 2.6, 1.5, plansPetrol)
  pro.position.set(60, 0, 0)
  scene.add(starter, pro)
  ;[
    [66.5, -1.2],
    [69.5, -1.2],
    [66.5, 1.6],
    [69.5, 1.6],
  ].forEach(([x, z]) => {
    const h = house(1.9, 1.7, 0.9, plansMat)
    h.position.set(x, 0, z)
    scene.add(h)
  })
  const plinthG = track(new T.BufferGeometry().setFromPoints([48.5, 55.5, 56.5, 63.5, 64.5, 71.5].map((x) => new T.Vector3(x, 0.02, 3.4))))
  scene.add(new T.LineSegments(plinthG, plansMat))

  // What stays yours: a boundary drawn around the agent's lot.
  const lot = [new T.Vector3(-4.5, 0.05, -4), new T.Vector3(4.5, 0.05, -4), new T.Vector3(4.5, 0.05, 4.6), new T.Vector3(-4.5, 0.05, 4.6), new T.Vector3(-4.5, 0.05, -4)]
  const boundaryG = track(new T.BufferGeometry().setFromPoints(new T.CatmullRomCurve3(lot, false, 'catmullrom', 0).getPoints(160)))
  const boundaryMat = track(new T.LineBasicMaterial({ color: PETROL, transparent: true, opacity: 0 }))
  scene.add(new T.Line(boundaryG, boundaryMat))
  boundaryG.setDrawRange(0, 0)

  // Camera flight state.
  const camPos = new T.Vector3().fromArray(VIEWS.intro.p)
  const look = new T.Vector3().fromArray(VIEWS.intro.l)
  const from = { p: camPos.clone(), l: look.clone() }
  const to = { p: camPos.clone(), l: look.clone() }
  const arc = new T.Vector3()
  let flightStart = -1
  let step: Step = 'intro'
  let stepStart = performance.now()
  const cur: Look = { ...LOOKS.intro }
  let target: Look = LOOKS.intro
  let running = false
  let raf = 0
  let last = 0
  let signAngle = 0

  function go(next: Step, instant = still) {
    const v = VIEWS[next]
    from.p.copy(camPos)
    from.l.copy(look)
    to.p.fromArray(v.p)
    to.l.fromArray(v.l)
    arc.copy(from.p).add(to.p).multiplyScalar(0.5)
    arc.y += Math.min(12, from.p.distanceTo(to.p) * 0.18)
    step = next
    stepStart = performance.now()
    target = LOOKS[next]
    if (instant) {
      camPos.copy(to.p)
      look.copy(to.l)
      Object.assign(cur, target)
      flightStart = -1
    } else {
      flightStart = performance.now()
    }
    if (!running) draw(performance.now())
  }

  function draw(now: number) {
    const k = still ? 1 : 0.06
    if (flightStart >= 0) {
      const u = clamp01((now - flightStart) / opts.flightMs)
      const e = ease(u)
      bez(from.p, arc, to.p, e, camPos)
      look.lerpVectors(from.l, to.l, e)
      if (u >= 1) flightStart = -1
    }
    for (const key of Object.keys(cur) as (keyof Look)[]) cur[key] += (target[key] - cur[key]) * k

    const t = (now - stepStart) / 1000
    const sway = still ? 0 : Math.sin(now / 1000 * 0.25) * 0.035
    const dx = camPos.x - look.x
    const dz = camPos.z - look.z
    camera.position.set(look.x + dx * Math.cos(sway) - dz * Math.sin(sway), camPos.y + (still ? 0 : Math.sin(now / 1000 * 0.4) * 0.12), look.z + dx * Math.sin(sway) + dz * Math.cos(sway))
    camera.lookAt(look)

    heroMat.color.copy(INK).lerp(PETROL, cur.heroLit)
    heroMat.opacity = 0.5 + 0.5 * cur.heroLit
    signMat.opacity = cur.sign * 0.9

    // Leads: continuous flow from the ad networks into the home.
    sourceMat.opacity = cur.ads * 0.7
    leads.m.opacity = cur.ads
    const flow = still ? 0.55 : now / 1000 * 0.22
    for (let i = 0; i < LEADS; i++) {
      const s = sources[i % sources.length]
      const u = still ? (i / LEADS) * 0.85 + 0.1 : (flow + i / LEADS) % 1
      ctrl.set(s.x * 0.4, s.y + 2.5, s.z * 0.4)
      bez(s, ctrl, heroTop, u, tmp)
      leads.pos.set([tmp.x, tmp.y, tmp.z], i * 3)
    }
    leads.g.attributes.position.needsUpdate = true

    // Reply card loop: 0 to 2.2 s drafting, 2.4 s send, 2.6 to 3.8 s the reply flies to a client.
    cardMat.opacity = cur.card * 0.8
    cardPetrol.opacity = cur.card
    const loop = still ? 3.2 : step === 'ai' ? t % 5.5 : 0
    bars.forEach((b, i) => (b.scale.x = Math.max(0.0001, b.userData.w * clamp01((loop - 0.3 - i * 0.6) / 0.6))))
    sendFillMat.opacity = cur.card * (loop > 2.3 ? 0.9 : 0)
    const fly = clamp01((loop - 2.6) / 1.2)
    reply.m.opacity = cur.card * (loop > 2.6 && loop < 3.9 ? 1 : 0)
    ctrl.set(-2, 8, 2)
    bez(card.position, ctrl, clientSpots[0], ease(fly), tmp)
    reply.pos.set([tmp.x, tmp.y, tmp.z])
    reply.g.attributes.position.needsUpdate = true

    portalMat.opacity = cur.portal * 0.75
    clientMat.color.copy(INK).lerp(PETROL, cur.portal * 0.6)
    pulses.m.opacity = cur.portal
    portalCurves.forEach((c, i) => {
      c.getPoint(still ? 0.6 : (now / 1000 * 0.35 + i * 0.27) % 1, tmp)
      pulses.pos.set([tmp.x, tmp.y, tmp.z], i * 3)
    })
    pulses.g.attributes.position.needsUpdate = true

    // Sign flips to a new brokerage every 3 s on the "moves" step and stays on the new one after.
    const after = STEPS.indexOf(step) > STEPS.indexOf('moves')
    const want = step === 'moves' && !still ? (Math.floor((t + 0.6) / 3) % 2 === 1 ? 0 : Math.PI) : step === 'moves' || after ? Math.PI : 0
    signAngle += (want - signAngle) * (still ? 1 : 0.08)
    panelPivot.rotation.y = signAngle
    signMat.color.copy(Math.cos(signAngle) > 0 ? SLATE : VIOLET)

    plansMat.opacity = 0.25 + 0.35 * cur.plans
    plansPetrol.opacity = 0.25 + 0.75 * cur.plans

    boundaryMat.opacity = cur.boundary
    const drawn = still || step !== 'yours' ? 1 : clamp01(t / 1.6)
    boundaryG.setDrawRange(0, Math.round(161 * drawn * (cur.boundary > 0.02 ? 1 : 0)))

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
    go,
    start() {
      if (still) {
        draw(performance.now())
        return
      }
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
      gridMat.dispose()
      grid.geometry.dispose()
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    },
  }
}
