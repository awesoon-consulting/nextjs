'use client'

import { useEffect, useRef } from 'react'
import {
  BufferAttribute,
  BufferGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three'

interface HeroSceneProps {
  order: number
  onReady: () => void
}

const LAYER_COLORS = [
  [0.055, 0.416, 0.62],
  [0, 0.682, 0.937],
  [0.098, 0.235, 0.341],
]

export default function HeroScene({ order, onReady }: HeroSceneProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef(order)

  useEffect(() => {
    targetRef.current = order
  }, [order])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    let renderer: WebGLRenderer
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      return
    }
    const w = el.clientWidth || 1280
    const h = el.clientHeight || 800
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(w, h)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    el.appendChild(renderer.domElement)

    const scene = new Scene()
    const cam = new PerspectiveCamera(38, w / h, 0.1, 100)
    cam.position.set(0, 0, 22)

    const N = 10
    const gap = 0.6
    const home: Vector3[] = []
    const wild: Vector3[] = []
    const cols: number[] = []
    for (let L = 0; L < 3; L++)
      for (let x = 0; x < N; x++)
        for (let z = 0; z < N; z++) {
          home.push(new Vector3((x - (N - 1) / 2) * gap, (L - 1) * 1.5, (z - (N - 1) / 2) * gap))
          wild.push(new Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10))
          cols.push(...LAYER_COLORS[L])
        }
    const count = home.length
    const pos = new Float32Array(count * 3)
    const g = new BufferGeometry()
    g.setAttribute('position', new BufferAttribute(pos, 3))
    g.setAttribute('color', new BufferAttribute(new Float32Array(cols), 3))
    const dotMat = new PointsMaterial({ vertexColors: true, size: 0.11, transparent: true, opacity: 0.9 })
    const dots = new Points(g, dotMat)

    const pairs: number[] = []
    for (let i = 0; i < count; i++)
      for (let j = i + 1; j < count; j++)
        if (home[i].distanceTo(home[j]) < gap * 1.01 && Math.random() < 0.55) pairs.push(i, j)
    const lpos = new Float32Array(pairs.length * 3)
    const lg = new BufferGeometry()
    lg.setAttribute('position', new BufferAttribute(lpos, 3))
    const lm = new LineBasicMaterial({ color: 0x00aeef, transparent: true, opacity: 0 })

    const group = new Group()
    group.add(dots)
    group.add(new LineSegments(lg, lm))
    group.position.set(0, 2.5, -4)
    scene.add(group)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let current = reduce ? 1 : 0
    let mx = 0
    let my = 0
    const onMove = (e: PointerEvent) => {
      const b = el.getBoundingClientRect()
      mx = (e.clientX - b.left) / b.width - 0.5
      my = (e.clientY - b.top) / b.height - 0.5
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const ease = (t: number) => t * t * (3 - 2 * t)
    let raf = 0
    let readySent = false
    const tick = (t: number) => {
      const target = reduce ? 1 : targetRef.current
      current += (target - current) * (reduce ? 1 : 0.03)
      const k = ease(Math.max(0, Math.min(1, current)))
      const s = reduce ? 0 : (1 - k) * 0.6
      for (let i = 0; i < count; i++) {
        const a = wild[i]
        const b = home[i]
        pos[i * 3] = a.x + (b.x - a.x) * k + Math.sin(t / 1400 + i) * s
        pos[i * 3 + 1] = a.y + (b.y - a.y) * k + Math.cos(t / 1600 + i * 1.3) * s
        pos[i * 3 + 2] = a.z + (b.z - a.z) * k
      }
      g.attributes.position.needsUpdate = true
      for (let p = 0; p < pairs.length; p++) {
        const i = pairs[p]
        lpos[p * 3] = pos[i * 3]
        lpos[p * 3 + 1] = pos[i * 3 + 1]
        lpos[p * 3 + 2] = pos[i * 3 + 2]
      }
      lg.attributes.position.needsUpdate = true
      lm.opacity = Math.max(0, k - 0.35) * 0.5
      group.rotation.y += (0.785 + mx * 0.4 + (reduce ? 0 : t / 12000) - group.rotation.y) * 0.04
      group.rotation.x += (0.5 + my * 0.2 - group.rotation.x) * 0.04
      renderer.render(scene, cam)
      if (!readySent) {
        readySent = true
        onReady()
      }
      if (!reduce) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => {
      const W = el.clientWidth
      const H = el.clientHeight
      if (W && H) {
        renderer.setSize(W, H)
        cam.aspect = W / H
        cam.updateProjectionMatrix()
        if (reduce) renderer.render(scene, cam)
      }
    })
    ro.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      g.dispose()
      lg.dispose()
      dotMat.dispose()
      lm.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [onReady])

  return <div ref={stageRef} className="absolute inset-0" />
}
