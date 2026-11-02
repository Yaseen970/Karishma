import { useEffect, useRef } from 'react'
// Adds the "show" class to children when they scroll into view
export function useReveal(selector) {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('show')), { threshold: 0.2 })
    ref.current?.querySelectorAll(selector).forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [selector])
  return ref
}
