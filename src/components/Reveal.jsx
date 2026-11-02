import { useEffect, useRef } from 'react'
// Words light up one by one as the paragraph scrolls through the viewport.
export default function Reveal({ text }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current, words = el.querySelectorAll('span')
    const on = () => {
      const r = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)))
      const k = p * words.length
      words.forEach((w, i) => w.classList.toggle('on', i < k))
    }
    on(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on)
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on) }
  }, [])
  return <p className="reveal" ref={ref}>{text.split(' ').map((w, i) => <span key={i}>{w} </span>)}</p>
}
