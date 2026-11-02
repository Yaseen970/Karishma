import { PROJECTS } from '../data'
export default function Projects() {
  return (
    <section id="projects">
      <div className="tag">02 / Work</div><h2>Featured Projects</h2>
      <div className="rail">
        {PROJECTS.map(p => (
          <article className="proj" key={p.title}>
            <div className="tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <ul>{p.points.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
