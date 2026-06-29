import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const moveDot = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(animateRing)
    }

    const handleEnter = () => {
      if (ringRef.current) ringRef.current.classList.add('scale-150', 'border-gold')
      if (dotRef.current) dotRef.current.classList.add('bg-gold', 'scale-150')
    }
    const handleLeave = () => {
      if (ringRef.current) ringRef.current.classList.remove('scale-150', 'border-gold')
      if (dotRef.current) dotRef.current.classList.remove('bg-gold', 'scale-150')
    }

    window.addEventListener('mousemove', moveDot)
    rafRef.current = requestAnimationFrame(animateRing)

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveDot)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-all duration-100"
        style={{ transform: 'translate(-50%, -50%)', marginLeft: '-4px', marginTop: '-4px' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] transition-transform duration-200"
        style={{ transform: 'translate(-50%, -50%)', marginLeft: '-16px', marginTop: '-16px' }}
      />
    </>
  )
}
