import { useRef } from 'react'
import photo from '../assets/portrait.jpg'
import { STATS } from '../data'
import Reveal from './Reveal'
function TiltPhoto() {
  const ref = useRef()
  const move = e => {
    const el = ref.current, r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    el.style.transform = `perspective(800px) rotateY(${(x - 0.5) * 28}deg) rotateX(${(0.5 - y) * 28}deg) scale(1.04)`
    el.style.setProperty('--gx', x * 100 + '%'); el.style.setProperty('--gy', y * 100 + '%')
  }
  return (
    <div className="photo" ref={ref} style={{ touchAction: 'none' }} onPointerMove={move} onPointerLeave={() => (ref.current.style.transform = '')}>
      <img className="pimg" src={photo} alt="Shaik Karishma" />
      <div className="badge">OPEN TO OPPORTUNITIES</div>
    </div>
  )
}
export default function About() {
  return (
    <section id="about">
      <div className="about">
        <TiltPhoto />
        <div>
          <div className="tag">01 / Profile</div>
          <h2>Hello, I'm Karishma</h2>
          <Reveal text="I'm a Master of Science student in Data Science (AI Development & Applications) at Sheridan College, with a B.Tech in Computer Science. I ship working software with Cursor, GitHub Copilot and Claude Code, using prompt, context, harness and loop engineering to build, test and refine fast." />
          <div className="stats">{STATS.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</div>
        </div>
      </div>
    </section>
  )
}
