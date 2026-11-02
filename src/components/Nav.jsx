import { NAV } from '../data'
export default function Nav() {
  return (
    <nav>
      <b>KARISHMA<span>.</span></b>
      <div>{NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
    </nav>
  )
}
