'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '@/data'

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.skills-sec-line', {
        scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: '.skills-sec-line', start: 'top 85%' },
      })
      gsap.from('.bento-cell', {
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.07,
        scrollTrigger: { trigger: '.bento-grid', start: 'top 82%' },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 px-6 lg:px-12"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <span className="block text-[.68rem] font-bold tracking-[.16em] uppercase mb-2" style={{ color: 'var(--brand)' }}>
          Tech Stack
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.04em] leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--txt)' }}
        >
          Tools I reach<br />for on day one.
        </h2>
        <div className="skills-sec-line sec-line mb-12" />

        {/* Bento grid — 12 cols on lg, 1 col on mobile */}
        <div
          className="bento-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4"
        >
          {skills.map(skill => (
            <div
              key={skill.title}
              className="bento-cell rounded-2xl border border-[var(--bdr)] p-6 flex flex-col gap-4 overflow-hidden"
              style={{
                background:  'var(--card)',
                gridColumn:  `span ${skill.span}`,
              }}
            >
              {/* header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="block text-[.6rem] font-bold tracking-[.14em] uppercase mb-1" style={{ color: 'var(--txt3)' }}>
                    {skill.tag}
                  </span>
                  <span className="font-display font-extrabold text-[1.05rem] tracking-[-0.02em]" style={{ color: 'var(--txt)' }}>
                    {skill.title}
                  </span>
                </div>
                <span
                  className="text-xl flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(6,214,160,.07)', border: '1px solid rgba(6,214,160,.12)' }}
                  aria-hidden="true"
                >
                  {skill.icon}
                </span>
              </div>

              {/* pill list */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="text-[.72rem] font-medium px-2.5 py-1 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,.04)',
                      border:     '1px solid var(--bdr)',
                      color:      'var(--txt2)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
