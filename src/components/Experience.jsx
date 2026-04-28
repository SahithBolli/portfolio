'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '@/data'
import TiltCard from './TiltCard'

function Chip({ label }) {
  return (
    <span
      className="inline-flex text-[.7rem] font-medium px-3 py-1 rounded-full"
      style={{
        background: 'rgba(6,214,160,.07)',
        border:     '1px solid rgba(6,214,160,.14)',
        color:      'var(--brand)',
      }}
    >
      {label}
    </span>
  )
}

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.exp-sec-line', {
        scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: '.exp-sec-line', start: 'top 85%' },
      })
      gsap.from('.exp-item', {
        y: 44, opacity: 0, duration: 0.75, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: '.exp-list', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 lg:px-12"
      style={{ background: 'var(--bg2)' }}
    >
      <div className="max-w-screen-xl mx-auto">

        <span className="block text-[.68rem] font-bold tracking-[.16em] uppercase mb-2" style={{ color: 'var(--brand)' }}>
          Work History
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.03em] leading-[1.08] mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--txt)' }}
        >
          Where I&apos;ve<br />shipped things.
        </h2>
        <div className="exp-sec-line sec-line mb-14" />

        <div className="exp-list flex flex-col gap-5">
          {experience.map((job, idx) => (
            <TiltCard
              key={job.company}
              intensity={4}
              className="exp-item exp-card rounded-2xl border border-[var(--bdr)] p-6 lg:p-8"
              style={{ background: 'var(--card)' }}
            >
              {/* ── card header ── */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex flex-col gap-1 min-w-0">

                  {/* company + current badge */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3
                      className="font-display font-extrabold tracking-[-0.02em]"
                      style={{ fontSize: 'clamp(1.05rem,2vw,1.25rem)', color: 'var(--brand)' }}
                    >
                      {job.company}
                    </h3>
                    {job.current && (
                      <span
                        className="text-[.56rem] font-bold tracking-[.1em] uppercase px-2.5 py-0.5 rounded-full flex-shrink-0"
                        style={{ color: 'var(--brand)', background: 'var(--brand-dim)', border: '1px solid var(--brand-bdr)' }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* role */}
                  <p className="font-semibold text-[.92rem]" style={{ color: 'var(--txt)' }}>
                    {job.role}
                  </p>

                  {/* period · location */}
                  <div className="flex items-center gap-2 flex-wrap mt-0.5">
                    <span className="text-[.67rem] font-bold tracking-[.07em] uppercase" style={{ color: 'var(--txt3)' }}>
                      {job.period}
                    </span>
                    <span className="w-[3px] h-[3px] rounded-full flex-shrink-0" style={{ background: 'var(--txt3)' }} aria-hidden="true" />
                    <span className="text-[.67rem]" style={{ color: 'var(--txt3)' }}>{job.location}</span>
                  </div>
                </div>

                {/* faded index number */}
                <span
                  className="font-display font-extrabold leading-none tracking-[-0.04em] select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'rgba(6,214,160,.07)' }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* divider */}
              <div className="mb-5 h-px" style={{ background: 'var(--bdr)' }} />

              {/* bullets */}
              <ul className="flex flex-col gap-3 mb-5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-[.83rem] leading-relaxed" style={{ color: 'var(--txt2)' }}>
                    <span style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '0.25rem' }} aria-hidden="true">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, `<strong style="color:var(--txt);font-weight:600">`).replace(/<\/strong>/g, '</strong>') }} />
                  </li>
                ))}
              </ul>

              {/* chips */}
              <div className="flex flex-wrap gap-2">
                {job.chips.map(c => <Chip key={c} label={c} />)}
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  )
}
