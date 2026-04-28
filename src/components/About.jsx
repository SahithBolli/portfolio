'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from './MagneticButton'

const stats = [
  { value: '5+',  label: 'Years Exp'             },
  { value: '30+', label: 'Microservices Deployed' },
  { value: '4',   label: 'Companies'              },
]

const roles = [
  { tag: 'ARCHITECT',  title: 'Systems Lead'     },
  { tag: 'CLOUD',      title: 'AWS Specialist'   },
  { tag: 'AI',         title: 'LLM Integrations' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        y: 40, opacity: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-card', start: 'top 95%', once: true },
      })
      gsap.from('.about-stat', {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-stats-row', start: 'top 95%', once: true },
      })
      gsap.from('.about-role-chip', {
        y: 16, opacity: 0, stagger: 0.09, duration: 0.55, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-roles-row', start: 'top 98%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-0 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* ── top stats bar ── */}
      <div
        className="about-stats-row grid grid-cols-3 border-b border-[var(--bdr)]"
        style={{ borderTop: '1px solid var(--bdr)' }}
      >
        {stats.map(s => (
          <div
            key={s.label}
            className="about-stat py-8 flex flex-col items-center justify-center border-r border-[var(--bdr)] last:border-r-0"
            style={{ background: 'var(--bg2)' }}
          >
            <span
              className="font-display font-extrabold tracking-[-0.04em] leading-none block mb-1"
              style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: 'var(--txt)' }}
            >
              {s.value}<span style={{ color: 'var(--brand)' }}></span>
            </span>
            <span className="text-[.68rem] font-bold tracking-[.12em] uppercase" style={{ color: 'var(--txt3)' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── main about card ── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div
          className="about-card rounded-3xl border border-[var(--bdr)] overflow-hidden"
          style={{ background: 'var(--card)' }}
        >
          <div className="grid lg:grid-cols-[1fr_380px]">

            {/* left — content */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[var(--bdr)]">
              <span className="block text-[.68rem] font-bold tracking-[.18em] uppercase mb-3" style={{ color: 'var(--brand)' }}>
                About Me
              </span>
              <h2
                className="font-display font-extrabold tracking-[-0.03em] leading-[1.08] mb-7"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--txt)' }}
              >
                I architect systems<br />
                <span style={{ color: 'var(--brand)' }}>that don&apos;t break.</span>
              </h2>

              <div className="space-y-4 text-[.91rem] mb-8" style={{ color: 'var(--txt2)', lineHeight: 1.9 }}>
                <p>
                  I&apos;m a software engineer with <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>5+ years</strong> designing
                  and shipping production-grade distributed systems. My work spans fintech at{' '}
                  <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>American Express</strong>, manufacturing
                  automation at <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>JELD-WEN</strong>, and enterprise
                  communications at <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Honeywell</strong> — where I own a
                  fleet of 30+ microservices on AWS EKS.
                </p>
                <p>
                  My core stack is <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Java & Spring Boot</strong>, with
                  deep hands-on experience in Kafka event pipelines, Kubernetes orchestration, Terraform IaC,
                  and CI/CD automation. I hold both the{' '}
                  <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>AWS Developer Associate</strong> and{' '}
                  <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Oracle Java SE 11</strong> certifications.
                </p>
                <p>
                  I care about systems that are <em>observable, recoverable, and maintainable</em> — not just
                  ones that work during a demo.
                </p>
              </div>

              {/* links */}
              <div className="flex flex-wrap gap-3">
                {[
                  { href: 'https://github.com/SahithBolli',          label: 'GitHub',      icon: '↗', ext: true  },
                  { href: 'https://www.linkedin.com/in/sahith-bolli', label: 'LinkedIn',    icon: '↗', ext: true  },
                  { href: 'mailto:sahithbolli980@gmail.com',          label: 'Email Me',    icon: '→', ext: false },
                  { href: '/Sahith_Bolli_Resume.pdf',                 label: 'Download CV', icon: '↓', dl: true   },
                ].map(({ href, label, icon, ext, dl }) => (
                  <MagneticButton
                    key={label}
                    as="a"
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(dl  ? { download: true } : {})}
                    className="flex items-center gap-2 text-[.8rem] font-display font-semibold tracking-[.04em] px-4 py-2 rounded-lg border transition-all duration-150 hover:-translate-y-0.5"
                    style={{ color: 'var(--txt)', border: '1.5px solid var(--bdr)', background: 'var(--bg)' }}
                  >
                    {label} <span aria-hidden="true" style={{ color: 'var(--brand)' }}>{icon}</span>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* right — full-bleed photo with overlay */}
            <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
              {/* full-bleed photo */}
              <img
                src="/sahith.jpg"
                alt="Sahith Bolli"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top center',
                }}
              />
              {/* dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(10,10,12,.35) 0%, rgba(10,10,12,.6) 100%)' }}
              />

              {/* content overlaid on photo */}
              <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full" style={{ minHeight: '420px' }}>
                <div>
                  <p className="text-[.68rem] font-bold tracking-[.18em] uppercase mb-4" style={{ color: 'rgba(255,255,255,.5)' }}>
                    What I bring
                  </p>
                  <div className="about-roles-row flex flex-col gap-3">
                    {roles.map(r => (
                      <div
                        key={r.tag}
                        className="about-role-chip rounded-xl px-5 py-4 flex items-center justify-between transition-all duration-200 hover:translate-x-1"
                        style={{
                          background: 'rgba(255,255,255,.10)',
                          border: '1px solid rgba(255,255,255,.15)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <span className="text-[.6rem] font-bold tracking-[.12em] uppercase" style={{ color: 'var(--brand)' }}>{r.tag}</span>
                        <span className="font-display font-extrabold text-[.95rem] text-white">{r.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* name at bottom */}
                <div className="pt-4 border-t border-white/10">
                  <p className="font-display font-bold text-[.9rem] text-white">Sahith Bolli</p>
                  <p className="text-[.68rem]" style={{ color: 'rgba(255,255,255,.55)' }}>Senior Java Full Stack Developer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
