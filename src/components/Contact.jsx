'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from './MagneticButton'

const socials = [
  {
    label: 'GitHub',
    href:  'https://github.com/SahithBolli',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/sahith-bolli',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href:  'mailto:sahithbolli980@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.contact-eyebrow', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-eyebrow', start: 'top 88%' },
      })
      gsap.from('.contact-heading', {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-heading', start: 'top 85%' },
      })
      gsap.from('.contact-email-link', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-email-link', start: 'top 88%' },
      })
      gsap.from('.contact-social', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.09,
        scrollTrigger: { trigger: '.contact-socials', start: 'top 90%' },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={ref}
      className="py-36 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(6,214,160,.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col items-center text-center">

        <span
          className="contact-eyebrow block text-[.68rem] font-bold tracking-[.16em] uppercase mb-6"
          style={{ color: 'var(--brand)' }}
        >
          Get In Touch
        </span>

        <h2
          className="contact-heading font-display font-extrabold tracking-[-0.04em] leading-[1.02] mb-8"
          style={{ fontSize: 'clamp(2.8rem,7vw,7rem)', color: 'var(--txt)' }}
        >
          Let&apos;s build<br />
          <span style={{ color: 'var(--brand)' }}>something</span><br />
          extraordinary.
        </h2>

        <p
          className="text-[.95rem] max-w-[440px] mb-12"
          style={{ color: 'var(--txt2)', lineHeight: 1.8 }}
        >
          Open to full-time roles, consulting, and interesting side projects.
          If you&apos;re building something ambitious — let&apos;s talk.
        </p>

        {/* big email CTA */}
        <MagneticButton
          as="a"
          href="mailto:sahithbolli980@gmail.com"
          className="contact-email-link font-display font-extrabold tracking-[-0.03em] transition-colors duration-150 hover:opacity-80 mb-14"
          style={{
            fontSize: 'clamp(1.1rem,3vw,2rem)',
            color:    'var(--brand)',
            borderBottom: '2px solid rgba(6,214,160,.3)',
            paddingBottom: '4px',
          }}
        >
          sahithbolli980@gmail.com
        </MagneticButton>

        {/* social icons */}
        <div className="contact-socials flex items-center gap-5">
          {socials.map(s => (
            <MagneticButton
              key={s.label}
              as="a"
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              className="contact-social w-12 h-12 rounded-xl flex items-center justify-center transition-[border-color,background,transform] duration-200 hover:border-[var(--brand-bdr)] hover:bg-[var(--brand-dim)] hover:-translate-y-0.5"
              style={{
                color:      'var(--txt3)',
                border:     '1px solid var(--bdr)',
                background: 'var(--card)',
              }}
            >
              {s.icon}
            </MagneticButton>
          ))}
        </div>

      </div>
    </section>
  )
}
