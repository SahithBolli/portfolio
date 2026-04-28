'use client'
import { useEffect, useRef, useState } from 'react'
import MagneticButton from './MagneticButton'

const CALENDLY_URL = 'https://calendly.com/sahithbolli980/30min'

function CalendlyModal({ onClose }) {
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ maxWidth: '900px', height: 'min(82vh, 680px)', background: '#1a1a1a' }}
        onClick={e => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1l12 12M13 1L1 13"/>
          </svg>
        </button>
        <iframe
          src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=06D6A0`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Book a call with Sahith"
        />
      </div>
    </div>
  )
}

const ROLES = [
  'Senior Java Full Stack Developer',
  'Cloud-Native Architect',
  'Backend Systems Engineer',
  'AWS & Kafka Specialist',
]

const LinkedInIcon = () => (
  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

export default function Hero() {
  const heroRef = useRef(null)
  const [showCalendly, setShowCalendly] = useState(false)

  /* ── typing animation ── */
  const [roleIdx,  setRoleIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(ROLES[0].length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIdx]
    let t
    if (!deleting) {
      if (charIdx < role.length) t = setTimeout(() => setCharIdx(c => c + 1), 72)
      else t = setTimeout(() => setDeleting(true), 2200)
    } else {
      if (charIdx > 0) t = setTimeout(() => setCharIdx(c => c - 1), 38)
      else { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  return (
    <>
    {showCalendly && <CalendlyModal onClose={() => setShowCalendly(false)} />}
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* ── subtle grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── scattered role labels ── */}
      <div
        className="absolute left-0 right-0 flex justify-between items-center px-6 lg:px-16 z-10"
        style={{ top: '100px' }}
        aria-hidden="true"
      >
        {['Software Developer', 'Full Stack Engineer', 'AI Engineer'].map(role => (
          <span
            key={role}
            className="font-display font-bold tracking-[.18em] uppercase"
            style={{ fontSize: 'clamp(.6rem, .8vw, .78rem)', color: 'var(--brand)' }}
          >
            {role}
          </span>
        ))}
      </div>

      {/* ── massive name ── */}
      <div
        className="absolute left-0 right-0 flex items-center justify-center pointer-events-none"
        style={{ top: '50%', transform: 'translateY(-54%)' }}
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold leading-none select-none block w-full text-center"
          style={{
            fontSize:      'clamp(19vw, 22vw, 22vw)',
            color:         'var(--txt)',
            letterSpacing: '0.02em',
          }}
        >
          SAHITH
        </span>
      </div>


      {/* ── bottom bar ── */}
      <div
        className="absolute left-0 right-0 z-30 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 px-6 lg:px-16"
        style={{ bottom: '44px' }}
      >
        {/* quote */}
        <p
          style={{
            fontStyle:  'italic',
            color:      'var(--txt3)',
            fontSize:   'clamp(.78rem, 1.1vw, .92rem)',
            lineHeight: 1.65,
            maxWidth:   '300px',
            fontFamily: 'Georgia, serif',
          }}
        >
          &ldquo;Building distributed systems &amp; cloud-native<br />
          architectures that scale — and stay up at&nbsp;3&nbsp;AM.&rdquo;
        </p>

        {/* CTA + socials */}
        <div className="flex items-center gap-3">
          <MagneticButton
            as="button"
            onClick={() => setShowCalendly(true)}
            className="font-display font-bold tracking-[.06em] uppercase px-7 py-3 rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,.15)]"
            style={{ fontSize: '.82rem', background: 'var(--txt)', color: 'var(--bg)' }}
          >
            Book a Call
          </MagneticButton>

          {[
            { href: 'https://www.linkedin.com/in/sahith-bolli', label: 'LinkedIn', Icon: LinkedInIcon },
            { href: 'https://github.com/SahithBolli',            label: 'GitHub',   Icon: GitHubIcon   },
          ].map(({ href, label, Icon }) => (
            <MagneticButton
              key={label}
              as="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--brand-bdr)] hover:text-[var(--brand)]"
              style={{ border: '1.5px solid var(--bdr)', color: 'var(--txt3)', background: 'var(--card)' }}
            >
              <Icon />
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* ── typing role badge ── */}
      <div
        className="absolute left-6 lg:left-16 z-30 flex items-center gap-2"
        style={{ bottom: '108px' }}
      >
        <span
          className="font-display font-semibold"
          style={{ fontSize: 'clamp(.78rem, 1vw, .9rem)', color: 'var(--txt2)' }}
        >
          {ROLES[roleIdx].slice(0, charIdx)}
          <span className="typing-cursor" />
        </span>
      </div>

    </section>
    </>
  )
}
