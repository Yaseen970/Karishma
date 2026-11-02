import { useEffect, useRef } from 'react'
import { svg } from '../stickers'
const SHAPES = ['butterfly', 'flower', 'heart', 'crown', 'star', 'spark', 'butterfly', 'heart', 'leaf', 'bird']
const COLORS = ['#ff7eb6', '#ffd166', '#c4b5fd', '#7ee0d1', '#ff9f68', '#8ec5ff', '#f472b6', '#b8f27b']
const WORDS = ['Brilliant', 'Unstoppable', 'Radiant', 'Queen energy', 'Fearless', 'Glowing', 'Magic', 'Bold']
const pick = a => a[Math.floor(Math.random() * a.length)]
// Click anywhere: a burst of butterflies, flowers, hearts and crowns in mixed colours, plus a little affirmation.
export default function ClickBurst() {
  const layer = useRef(), count = useRef(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const L = layer.current
    const add = (el, kf, opt) => { L.appendChild(el); el.animate(kf, opt).onfinish = () => el.remove() }
    const on = e => {
      const x = e.clientX, y = e.clientY
      const ring = document.createElement('div')
      ring.className = 'ring'; ring.style.left = x + 'px'; ring.style.top = y + 'px'; ring.style.borderColor = pick(COLORS)
      add(ring, [{ transform: 'translate(-50%,-50%) scale(.2)', opacity: 0.9 }, { transform: 'translate(-50%,-50%) scale(5)', opacity: 0 }], { duration: 750, easing: 'ease-out' })
      for (let i = 0; i < 18; i++) {
        const el = document.createElement('div')
        const size = 22 + Math.random() * 28
        el.className = 'bit'
        el.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;color:${pick(COLORS)}`
        el.innerHTML = svg(pick(SHAPES))
        const a = Math.random() * Math.PI * 2, d = 80 + Math.random() * 150
        const dx = Math.cos(a) * d, dy = Math.sin(a) * d - 30, rot = Math.round(Math.random() * 360 - 180)
        const T = (px, py, s, r) => `translate(calc(-50% + ${px}px),calc(-50% + ${py}px)) scale(${s}) rotate(${r}deg)`
        add(el, [
          { transform: T(0, 0, 0, 0), opacity: 1 },
          { transform: T(dx, dy, 1, rot), opacity: 1, offset: 0.5 },
          { transform: T(dx * 1.1, dy + 90, 0.6, rot * 1.4), opacity: 0 },
        ], { duration: 1000 + Math.random() * 600, easing: 'cubic-bezier(.2,.8,.3,1)' })
      }
      const w = document.createElement('div')
      w.className = 'word'; w.textContent = WORDS[count.current++ % WORDS.length]
      w.style.left = x + 'px'; w.style.top = y + 'px'; w.style.background = pick(COLORS)
      add(w, [
        { transform: 'translate(-50%,-50%) scale(.6)', opacity: 0 },
        { transform: 'translate(-50%,-140%) scale(1)', opacity: 1, offset: 0.25 },
        { transform: 'translate(-50%,-260%) scale(1)', opacity: 0 },
      ], { duration: 1300, easing: 'ease-out' })
    }
    addEventListener('pointerdown', on)
    return () => removeEventListener('pointerdown', on)
  }, [])
  return <div className="burst" ref={layer} aria-hidden="true" />
}
