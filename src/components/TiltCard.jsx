'use client'
import { useRef, useCallback } from 'react'

export default function TiltCard({ children, className, style, intensity = 7, ...props }) {
  const ref = useRef(null)

  const onMove = useCallback(e => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width  - 0.5
    const y = (e.clientY - r.top)  / r.height - 0.5
    el.style.transform  = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(10px) scale(1.015)`
    el.style.transition = 'transform .08s ease'
  }, [intensity])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform  = ''
    el.style.transition = 'transform .55s cubic-bezier(.22,1,.36,1)'
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </div>
  )
}
