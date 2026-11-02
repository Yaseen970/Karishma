import { SKILLS } from '../data'
export default function Skills() {
  return (
    <section id="skills">
      <div className="tag">03 / Toolkit</div><h2>Technical Skills</h2>
      <div className="skills">
        {SKILLS.map(([title, items]) => (
          <div key={title}><h4>{title}</h4><div className="chips">{items.map(s => <span key={s}>{s}</span>)}</div></div>
        ))}
      </div>
    </section>
  )
}
