'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '@/data'

function Chip({ label }) {
  return (
    <span
      className="inline-flex text-[.72rem] font-medium px-3 py-1 rounded-full transition-colors duration-150"
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
        x: -55, opacity: 0, duration: 0.75, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.exp-list', start: 'top 80%' },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 px-6 lg:px-12"
      style={{ background: 'var(--bg2)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <span className="block text-[.68rem] font-bold tracking-[.16em] uppercase mb-2" style={{ color: 'var(--brand)' }}>
          Work History
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.04em] leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--txt)' }}
        >
          Where I&apos;ve<br />shipped things.
        </h2>
        <div className="exp-sec-line sec-line mb-12" />

        <div className="exp-list flex flex-col gap-4">
          {experience.map(job => (
            <article
              key={job.company}
              className="exp-item exp-card rounded-2xl border border-[var(--bdr)] p-7 lg:p-8 grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-10 overflow-hidden"
              style={{ background: 'var(--card)' }}
            >
              {/* left */}
              <div className="flex flex-col gap-1">
                {job.current && (
                  <span
                    className="self-start text-[.62rem] font-bold tracking-[.08em] uppercase px-2.5 py-1 rounded-full mb-1"
                    style={{ color: 'var(--brand)', background: 'var(--brand-dim)', border: '1px solid var(--brand-bdr)' }}
                  >
                    Current
                  </span>
                )}
                <span
                  className="font-display font-extrabold text-[1.15rem] tracking-[-0.02em] leading-tight"
                  style={{ color: 'var(--brand)' }}
                >
                  {job.company}
                </span>
                <span className="text-[.82rem] font-semibold" style={{ color: 'var(--txt)' }}>{job.role}</span>
                <span
                  className="text-[.72rem] font-bold tracking-[.07em] uppercase mt-1"
                  style={{ color: 'var(--txt3)' }}
                >
                  {job.period}
                </span>
                <span className="text-[.72rem]" style={{ color: 'var(--txt3)' }}>{job.location}</span>
              </div>

              {/* right */}
              <div>
                <ul className="flex flex-col gap-2.5 mb-5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-[.82rem] leading-relaxed" style={{ color: 'var(--txt2)' }}>
                      <span style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '0.27rem' }} aria-hidden="true">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, `<strong style="color:var(--txt);font-weight:600">`).replace(/<\/strong>/g, '</strong>') }} />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.chips.map(c => <Chip key={c} label={c} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
