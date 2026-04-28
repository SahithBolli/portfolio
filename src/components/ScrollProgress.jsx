'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] h-[2px] pointer-events-none"
      style={{
        width:      `${pct}%`,
        background: 'linear-gradient(to right, var(--brand), rgba(6,214,160,.55))',
        boxShadow:  '0 0 10px rgba(6,214,160,.8), 0 0 4px rgba(6,214,160,.5)',
        transition: 'width .08s linear',
      }}
    />
  )
}
