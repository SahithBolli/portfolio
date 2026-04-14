'use client'
import { useEffect, useRef } from 'react'
import { stats } from '@/data'

function StatItem({ target, suffix, label, sub }) {
  const numRef = useRef(null)
  const fired  = useRef(false)

  useEffect(() => {
    const el  = numRef.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired.current) {
        fired.current = true
        const duration = 2200
        const start    = performance.now()

        const update = now => {
          const p    = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          el.textContent = Math.round(ease * target)
          if (p < 1) requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
        observer.disconnect()
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div
      className="py-12 px-10 text-center transition-colors duration-200"
      style={{ background: 'var(--bg2)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--card)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
    >
      <span
        className="font-display font-extrabold tracking-[-0.04em] block mb-1.5"
        style={{ fontSize: 'clamp(2.8rem,5vw,4.5rem)', lineHeight: 1, color: 'var(--txt)' }}
      >
        <span ref={numRef}>0</span>
        <span style={{ color: 'var(--brand)' }}>{suffix}</span>
      </span>
      <span className="block text-sm font-medium mb-1" style={{ color: 'var(--txt2)' }}>{label}</span>
      <span className="block text-xs" style={{ color: 'var(--txt3)' }}>{sub}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section aria-label="Key statistics">
      <div
        className="grid grid-cols-2 lg:grid-cols-4 border border-[var(--bdr)] rounded-2xl overflow-hidden mx-4 lg:mx-12 my-4"
        style={{ background: 'var(--bdr)' }}
      >
        {stats.map(s => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
