'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from './MagneticButton'

const miniCards = [
  {
    icon: '⚡', iconBg: 'rgba(6,214,160,.1)',
    title: 'Currently at Honeywell',
    body:  'Java Full Stack Developer building communications infrastructure at scale — email, SMS, and push for enterprise.',
  },
  {
    icon: '☁️', iconBg: 'rgba(139,92,246,.1)',
    title: 'Cloud-Native Specialist',
    body:  'AWS Certified Developer. Designed and deployed 30+ microservices on EKS with zero-downtime blue-green releases.',
  },
  {
    icon: '🤖', iconBg: 'rgba(245,158,11,.1)',
    title: 'AI & Data Pipelines',
    body:  'Exploring LangChain, RAG, and OpenAI API integration for intelligent backend systems and AI-augmented workflows.',
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.about-text-block', {
        y: 35, opacity: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text-block', start: 'top 85%' },
      })
      gsap.from('.about-mini-card', {
        x: 32, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cards-col', start: 'top 82%' },
      })
      gsap.from('.about-sec-line', {
        scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: '.about-sec-line', start: 'top 85%' },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6 lg:px-12"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <span className="block text-[.68rem] font-bold tracking-[.16em] uppercase mb-2" style={{ color: 'var(--brand)' }}>
          About
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.04em] leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--txt)' }}
        >
          I architect systems<br />that don&apos;t break.
        </h2>
        <div className="about-sec-line sec-line mb-12" />

        <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-start">

          {/* text */}
          <div className="about-text-block space-y-4 text-[.92rem]" style={{ color: 'var(--txt2)', lineHeight: 1.85 }}>
            <p>
              I&apos;m a software engineer with 5+ years designing and shipping production-grade distributed systems.
              My work spans fintech at{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>American Express</strong>,
              manufacturing automation at{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>JELD-WEN</strong>, and enterprise
              communications infrastructure at{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Honeywell</strong> — where I own a fleet of
              30+ microservices on AWS EKS.
            </p>
            <p>
              My core stack is{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Java</strong> and{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Spring Boot</strong>, with deep hands-on
              experience in Kafka event pipelines, Kubernetes orchestration, Terraform IaC, and CI/CD automation.
              I hold both the{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>AWS Developer Associate</strong> and{' '}
              <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Oracle Java SE&nbsp;11</strong> certifications.
            </p>
            <p>
              I care about systems that are observable, recoverable, and maintainable — not just ones that work
              during a demo.
            </p>

            {/* link row */}
            <div className="flex flex-wrap gap-3 pt-3">
              {[
                { href: 'https://github.com/SahithBolli',               label: 'GitHub',       icon: '↗' },
                { href: 'https://www.linkedin.com/in/sahith-bolli',      label: 'LinkedIn',     icon: '↗' },
                { href: 'mailto:sahithbolli980@gmail.com',               label: 'Email Me',     icon: '→' },
                { href: '/Sahith_Bolli_Resume.pdf', download: true,      label: 'Download CV',  icon: '↓' },
              ].map(({ href, label, icon, download }) => (
                <MagneticButton
                  key={label}
                  as="a"
                  href={href}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(download ? { download: true } : {})}
                  className="flex items-center gap-2 text-sm font-display font-semibold tracking-[.04em] px-4 py-2 rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(6,214,160,.14)]"
                  style={{ color: 'var(--brand)', border: '1px solid var(--brand-bdr)', background: 'var(--brand-dim)' }}
                >
                  {label} <span aria-hidden="true">{icon}</span>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* mini cards */}
          <div className="about-cards-col flex flex-col gap-4">
            {miniCards.map(c => (
              <div
                key={c.title}
                className="about-mini-card rounded-2xl p-5 border border-[var(--bdr)] transition-[border-color,transform] duration-200 hover:border-[var(--brand-bdr)] hover:translate-x-1"
                style={{ background: 'var(--card)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: c.iconBg }}
                    aria-hidden="true"
                  >
                    {c.icon}
                  </div>
                  <span className="font-display font-bold text-sm" style={{ color: 'var(--txt)' }}>{c.title}</span>
                </div>
                <p className="text-[.78rem] leading-relaxed" style={{ color: 'var(--txt2)' }}>{c.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
