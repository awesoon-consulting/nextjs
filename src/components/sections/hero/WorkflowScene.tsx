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

    const box = new BoxGeometry(0.9, 0.5, 0.12)
    const messyMat = new MeshBasicMaterial({ color: '#0F1D33', transparent: true, opacity: 0.35, wireframe: true })
    const messy = new InstancedMesh(box, messyMat, MESSY_COUNT)
    left.add(messy)
    const messyHome = Array.from({ length: MESSY_COUNT }, () => ({
      p: new Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 2),
      r: (Math.random() - 0.5) * 0.6,
      s: Math.random() * Math.PI * 2,
    }))

    const nodeGeo = new BoxGeometry(0.55, 0.18, 0.55)
    const nodeMat = new MeshBasicMaterial({ transparent: true, opacity: 0.95 })
    const count = GRID * GRID * 3
    const nodes = new InstancedMesh(nodeGeo, nodeMat, count)
    right.add(nodes)
    const nodeHome: Vector3[] = []
    const nodeFrom: Vector3[] = []
    for (let L = 0; L < 3; L++)
      for (let x = 0; x < GRID; x++)
        for (let z = 0; z < GRID; z++) {
          nodeHome.push(new Vector3((x - 1) * 1.1, (1 - L) * 1.5, (z - 1) * 1.1))
          nodeFrom.push(new Vector3(-6 - Math.random() * 4, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 3))
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
      lineMat.color.set(ink)
      messyMat.opacity = 0.4 - k * 0.22

      for (let i = 0; i < MESSY_COUNT; i++) {
        const m = messyHome[i]
        const wob = 0.15 + e * 0.5
        dummy.position.set(m.p.x + Math.sin(t / 900 + m.s) * wob, m.p.y + Math.cos(t / 1100 + m.s) * wob, m.p.z)
        dummy.rotation.set(0, 0, m.r + Math.sin(t / 1500 + m.s) * 0.2)
        dummy.scale.setScalar(1)
        dummy.updateMatrix()
        messy.setMatrixAt(i, dummy.matrix)
      }
      messy.instanceMatrix.needsUpdate = true

      for (let i = 0; i < count; i++) {
        const local = Math.max(0, Math.min(1, k * 1.6 - (i / count) * 0.6))
        const a = ease(local)
        cur[i].lerpVectors(nodeFrom[i], nodeHome[i], a)
        dummy.position.copy(cur[i])
        dummy.rotation.set(0, 0, 0)
        dummy.scale.setScalar(Math.max(0.001, a))
        dummy.updateMatrix()
        nodes.setMatrixAt(i, dummy.matrix)
      }
      nodes.instanceMatrix.needsUpdate = true

      for (let p = 0; p < pairs.length; p++) {
        const v = cur[pairs[p]]
        lpos[p * 3] = v.x
        lpos[p * 3 + 1] = v.y
        lpos[p * 3 + 2] = v.z
      }
      lineGeo.attributes.position.needsUpdate = true
      lineMat.opacity = Math.max(0, k - 0.3) * 0.6

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
      box.dispose()
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
