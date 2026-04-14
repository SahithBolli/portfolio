'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education } from '@/data'

export default function Education() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.edu-sec-line', {
        scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: '.edu-sec-line', start: 'top 85%' },
      })
      gsap.from('.edu-card', {
        y: 45, opacity: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.edu-list', start: 'top 82%' },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="education"
      ref={ref}
      className="py-28 px-6 lg:px-12"
      style={{ background: 'var(--bg2)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <span className="block text-[.68rem] font-bold tracking-[.16em] uppercase mb-2" style={{ color: 'var(--brand)' }}>
          Education & Certs
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.04em] leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--txt)' }}
        >
          Credentials that<br />back the claims.
        </h2>
        <div className="edu-sec-line sec-line mb-12" />

        <div className="edu-list grid lg:grid-cols-3 gap-5">
          {education.map(item => (
            <div
              key={item.name}
              className={`edu-card rounded-2xl border p-7 flex flex-col gap-5 transition-[border-color,transform] duration-200 hover:-translate-y-1 ${
                item.type === 'degree'
                  ? 'border-[rgba(6,214,160,.22)] lg:col-span-1'
                  : 'border-[var(--bdr)]'
              }`}
              style={{ background: 'var(--card)' }}
            >
              {/* icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: item.iconBg,
                  border:     item.iconBdr ?? '1px solid rgba(255,255,255,.07)',
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* text */}
              <div className="flex flex-col gap-1.5 flex-1">
                <span
                  className="font-display font-bold text-[.95rem] leading-snug tracking-[-0.01em]"
                  style={{ color: 'var(--txt)' }}
                >
                  {item.name}
                </span>
                <span className="text-[.78rem] font-medium" style={{ color: 'var(--brand)' }}>
                  {item.org}
                </span>
                <span className="text-[.72rem] mt-auto pt-2" style={{ color: 'var(--txt3)' }}>
                  {item.period}
                </span>
              </div>

              {/* badge (degree only) */}
              {item.badge && (
                <span
                  className="self-start text-[.65rem] font-bold tracking-[.08em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color:      'var(--brand)',
                    background: 'var(--brand-dim)',
                    border:     '1px solid var(--brand-bdr)',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
