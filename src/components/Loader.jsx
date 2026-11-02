import { useEffect, useMemo, useState } from 'react'
import p1 from '../assets/intro/p1.jpg'
import p2 from '../assets/intro/p2.jpg'
import p3 from '../assets/intro/p3.jpg'
import p4 from '../assets/intro/p4.jpg'
import p5 from '../assets/intro/p5.jpg'
import p6 from '../assets/intro/p6.jpg'

// Photos flip in the centre of the big flower; the last one is the one that stays.
const ORDER = [p6, p5, p4, p3, p1, p2]
const COLORS = ['#ff7eb6', '#ffd166', '#c4b5fd', '#ff9f68', '#f9a8d4', '#ff6b81', '#8ec5ff', '#fde68a']

function Bloom({ color, petals }) {
  return (
    <svg viewBox="-50 -50 100 100">
      {Array.from({ length: petals }, (_, i) => (
        <ellipse
          key={i}
          rx="9"
          ry="21"
          cy="-22"
          fill={color}
          stroke="rgba(0,0,0,.12)"
          strokeWidth=".8"
          transform={`rotate(${(i * 360) / petals})`}
        />
      ))}
      <circle r="9" fill="#fff3b0" />
      <circle r="4.5" fill="#f59e0b" opacity=".7" />
    </svg>
  )
}

// Intro: a garden grows and turns to colour flower by flower,
// with you as the biggest bloom in the middle.
export default function Loader() {
  const [n, setN] = useState(0)
  const [lift, setLift] = useState(false)
  const [gone, setGone] = useState(false)

  const garden = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const r = k => {
          const x = Math.sin((i + 1) * k) * 10000
          return x - Math.floor(x)
        }
        return {
          x: 3 + i * (94 / 17) + (r(3.1) - 0.5) * 3,
          size: 52 + r(7.7) * 50,
          stem: 20 + r(5.3) * 95,
          color: COLORS[i % COLORS.length],
          petals: 6 + Math.floor(r(2.2) * 4),
          d: i * 0.08 + r(1.3) * 0.25,
        }
      }),
    []
  )

  useEffect(() => {
    ORDER.forEach(s => {
      const i = new Image()
      i.src = s
    })
    document.body.style.overflow = 'hidden'
    const f = setInterval(() => setN(x => Math.min(x + 1, ORDER.length - 1)), 520)
    const a = setTimeout(() => setLift(true), 3800)
    return () => {
      clearInterval(f)
      clearTimeout(a)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!lift) return
    const b = setTimeout(() => {
      setGone(true)
      document.body.style.overflow = ''
    }, 850)
    return () => clearTimeout(b)
  }, [lift])

  if (gone) return null

  return (
    <div className={'loader lg' + (lift ? ' lift' : '')} onClick={() => setLift(true)} aria-hidden="true">
      <div className="lg-garden">
        {garden.map((g, i) => (
          <div
            key={i}
            className="gf"
            style={{ left: g.x + '%', width: g.size, marginLeft: -g.size / 2, '--d': g.d + 's' }}
          >
            <div className="sw">
              <div className="bl">
                <Bloom color={g.color} petals={g.petals} />
              </div>
              <i className="stem" style={{ height: g.stem }} />
            </div>
          </div>
        ))}
      </div>

      <div className="lg-big">
        <div className="lg-petals">
          {Array.from({ length: 24 }, (_, i) => (
            <b key={i} className={i % 2 ? 'o' : ''} style={{ '--a': i * 15 + 'deg', '--k': i }} />
          ))}
        </div>
        <div className="lg-face">
          <img key={n} src={ORDER[n]} alt="" />
        </div>
      </div>

      <div
        className="lg-name"
        style={{
          background: 'linear-gradient(90deg,#ff7eb6,#ffd166,#c4b5fd,#ff7eb6)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 18px rgba(255,126,182,.45))',
        }}
      >
        SHAIK KARISHMA
      </div>
    </div>
  )
}
