import { useEffect, useRef, useState } from 'react'
import photo from '../assets/main.jpg'
import { WORDS, CHIPS } from '../data'
import { NAMES, svg } from '../stickers'
export default function Hero() {
  const [i, setI] = useState(0)
  const [out, setOut] = useState(false)
  const hero = useRef(), pic = useRef(), layer = useRef(), last = useRef({ x: 0, y: 0, n: 0 })
  useEffect(() => {
    const t = setInterval(() => {
      setOut(true)
      setTimeout(() => { setI(n => (n + 1) % WORDS.length); setOut(false) }, 400)
    }, 2600)
    return () => clearInterval(t)
  }, [])
  const move = e => {
    const r = hero.current.getBoundingClientRect()
    hero.current.style.setProperty('--x', e.clientX - r.left + 'px')
    hero.current.style.setProperty('--y', e.clientY - r.top + 'px')
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5
    pic.current.style.transform = `translate3d(${x * -10}px,${y * -6}px,0) scale(1.02)`
  }
  // Cursor trail: drop a sticker every ~70px while the pointer is over the portrait
  const trail = e => {
    const r = pic.current.getBoundingClientRect()
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return
    const l = last.current
    if (Math.hypot(e.clientX - l.x, e.clientY - l.y) < 70) return
    l.x = e.clientX; l.y = e.clientY
    const d = document.createElement('div')
    d.className = 'stk'
    d.style.color = ['#ff7eb6', '#ffd166', '#c4b5fd', '#7ee0d1', '#ff9f68', '#8ec5ff'][l.n % 6]
    d.innerHTML = svg(NAMES[l.n++ % NAMES.length])
    const size = 34 + Math.random() * 26
    d.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:${size}px;height:${size}px;--r:${Math.round(Math.random() * 60 - 30)}deg`
    layer.current.appendChild(d)
    setTimeout(() => d.remove(), 1400)
  }
  return (
    <header className="hero" id="top" ref={hero} onPointerMove={e => { move(e); trail(e) }} onPointerLeave={() => (pic.current.style.transform = '')}>
      <img className="hp" ref={pic} src={photo} alt="Shaik Karishma" />
      <div className="trail" ref={layer} />
      <small>HI, I'M <b style={{ color: 'var(--fg)' }}>SHAIK KARISHMA</b></small>
      <h1 className={out ? 'out' : ''}>{WORDS[i]}</h1>
      <p>Full-stack developer and Data Science master's student in Mississauga, building AI-assisted software end to end and explaining it clearly to business users.</p>
      <div className="chips">{CHIPS.map(c => <span key={c}>{c}</span>)}</div>
      <div className="btns"><a className="btn p" href="#projects">View my work</a><a className="btn" href="#contact">Hire me</a></div>
      <div className="hint">▼ SCROLL TO EXPLORE</div>
    </header>
  )
}