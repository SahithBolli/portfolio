'use client'
import { useRef } from 'react'
import gsap from 'gsap'

export default function MagneticButton({ children, className = '', as: Tag = 'span', ...props }) {
  const ref = useRef(null)

  const onMove = e => {
    const r  = ref.current.getBoundingClientRect()
    const ox = (e.clientX - r.left - r.width  / 2) * 0.35
    const oy = (e.clientY - r.top  - r.height / 2) * 0.35
    gsap.to(ref.current, { x: ox, y: oy, duration: 0.35, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' })
  }

  return (
    <Tag
      ref={ref}
      className={`inline-flex ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}
