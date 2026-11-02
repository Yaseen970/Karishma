import { CONTACT as C } from '../data'
export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="tag">05 / Contact</div><h2>Let's build something</h2>
        <a className="big" href={`mailto:${C.email}`}>{C.email}</a>
        <div className="btns" style={{ justifyContent: 'center' }}>
          <a className="btn" href="#top">Back to top</a>
        </div>
        <p style={{ color: 'var(--mut)' }}>{C.place}</p>
      </section>
      <footer>© 2026 Shaik Karishma</footer>
    </>
  )
}
