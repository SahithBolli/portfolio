'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('c-dot')
    const ring = document.getElementById('c-ring')
    if (!dot || !ring) return

    let mx = -200, my = -200, rx = -200, ry = -200
    let raf

    const onMove  = e => { mx = e.clientX; my = e.clientY }
    const onLeave = () => { dot.classList.add('gone');    ring.classList.add('gone') }
    const onEnter = () => { dot.classList.remove('gone'); ring.classList.remove('gone') }

    window.addEventListener('mousemove',     onMove,   { passive: true })
    document.addEventListener('mouseleave',  onLeave)
    document.addEventListener('mouseenter',  onEnter)

    const loop = () => {
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // grow cursor over interactive elements (event delegation)
    const onOver = e => {
      if (e.target.closest('a, button, [data-hover]')) {
        dot.classList.add('big'); ring.classList.add('big')
      }
    }
    const onOut = e => {
      if (e.target.closest('a, button, [data-hover]')) {
        dot.classList.remove('big'); ring.classList.remove('big')
      }
    }
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)

    return () => {
      window.removeEventListener('mousemove',    onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="c-dot"  id="c-dot"  aria-hidden="true" />
      <div className="c-ring" id="c-ring" aria-hidden="true" />
    </>
  )
}
