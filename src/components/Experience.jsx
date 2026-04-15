'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '@/data'

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
        x: -40, opacity: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.exp-list', start: 'top 80%' },
      })
      gsap.from('.exp-timeline-line', {
        scaleY: 0, transformOrigin: 'top', duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.exp-list', start: 'top 78%' },
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

        {/* timeline container */}
        <div className="exp-list relative">

          {/* vertical line — desktop only */}
          <div
            className="exp-timeline-line hidden lg:block absolute left-[200px] top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--brand), rgba(6,214,160,.06))' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {experience.map((job) => (
              <div
                key={job.company}
                className="exp-item relative lg:grid lg:grid-cols-[200px_1fr] lg:gap-12 items-start"
              >
                {/* ── LEFT meta ── */}
                <div className="lg:text-right mb-5 lg:mb-0 lg:pt-1 flex lg:flex-col items-center lg:items-end gap-3 lg:gap-0">
                  <div>
                    {job.current && (
                      <span
                        className="inline-block text-[.58rem] font-bold tracking-[.08em] uppercase px-2.5 py-0.5 rounded-full mb-2"
                        style={{ color: 'var(--brand)', background: 'var(--brand-dim)', border: '1px solid var(--brand-bdr)' }}
                      >
                        Current
                      </span>
                    )}
                    <p className="font-display font-extrabold text-[1.05rem] leading-tight" style={{ color: 'var(--brand)' }}>
                      {job.company}
                    </p>
                    <p className="text-[.78rem] font-semibold mt-0.5" style={{ color: 'var(--txt)' }}>
                      {job.role}
                    </p>
                  </div>
                  <div className="hidden lg:block mt-3">
                    <p className="text-[.65rem] font-bold tracking-[.06em] uppercase" style={{ color: 'var(--txt3)' }}>
                      {job.period}
                    </p>
                    <p className="text-[.68rem] mt-0.5" style={{ color: 'var(--txt3)' }}>
                      {job.location}
                    </p>
                  </div>
                </div>

                {/* timeline dot — desktop */}
                <div
                  className="hidden lg:flex absolute items-center justify-center w-3.5 h-3.5 rounded-full border-2 border-[var(--brand)]"
                  style={{ left: '194px', top: '6px', background: 'var(--bg2)' }}
                  aria-hidden="true"
                />

                {/* ── RIGHT card ── */}
                <div
                  className="rounded-2xl border border-[var(--bdr)] p-5 lg:p-7 exp-card"
                  style={{ background: 'var(--card)' }}
                >
                  {/* mobile-only meta row */}
                  <div className="flex items-center gap-3 mb-4 lg:hidden">
                    <div>
                      <p className="text-[.65rem] font-bold tracking-[.06em] uppercase" style={{ color: 'var(--txt3)' }}>
                        {job.period}
                      </p>
                      <p className="text-[.68rem]" style={{ color: 'var(--txt3)' }}>
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-5">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-[.82rem] leading-relaxed" style={{ color: 'var(--txt2)' }}>
                        <span style={{ color: 'var(--brand)', flexShrink: 0, marginTop: '0.25rem' }} aria-hidden="true">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, `<strong style="color:var(--txt);font-weight:600">`).replace(/<\/strong>/g, '</strong>') }} />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.chips.map(c => <Chip key={c} label={c} />)}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
