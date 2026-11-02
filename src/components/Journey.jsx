import { JOURNEY } from '../data'
import { useReveal } from '../hooks'
export default function Journey() {
  const ref = useReveal('.tl > div')
  return (
    <section id="journey">
      <div className="tag">04 / Timeline</div><h2>Education &amp; Experience</h2>
      <div className="tl" ref={ref}>
        {JOURNEY.map(([when, title, text]) => <div key={title}><small>{when}</small><h4>{title}</h4><p>{text}</p></div>)}
      </div>
    </section>
  )
}
