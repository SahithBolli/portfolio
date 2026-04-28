'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CalendlyModal from './CalendlyModal'

const INPUT_STYLE = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,.18)',
  color: '#fff',
  outline: 'none',
  width: '100%',
  padding: '10px 0',
  fontSize: '.88rem',
  fontFamily: 'inherit',
  transition: 'border-color .2s',
}

const LABEL_STYLE = {
  display: 'block',
  fontSize: '.58rem',
  letterSpacing: '.15em',
  color: 'rgba(255,255,255,.3)',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: '6px',
}

export default function Contact() {
  const ref = useRef(null)
  const [showCalendly, setShowCalendly] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.ct-heading', {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-heading', start: 'top 90%', once: true },
      })
      gsap.from('.ct-info', {
        y: 24, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-left', start: 'top 88%', once: true },
      })
      gsap.from('.ct-form', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-form', start: 'top 88%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.firstName} ${form.lastName}`)
    const body = encodeURIComponent(`Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sahithbolli980@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      {showCalendly && <CalendlyModal onClose={() => setShowCalendly(false)} />}

      <section
        id="contact"
        ref={ref}
        className="py-24 lg:py-32 px-6 lg:px-16 relative overflow-hidden"
        style={{ background: '#0A0A0C' }}
      >
        {/* heading */}
        <h2
          className="ct-heading font-display font-extrabold uppercase text-center mb-16 lg:mb-20 leading-none tracking-[-0.02em]"
          style={{ fontSize: 'clamp(3rem,9vw,7.5rem)' }}
        >
          <span style={{ color: '#fff' }}>GET IN </span>
          <span style={{ color: 'var(--brand)' }}>TOUCH</span>
        </h2>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-28">

          {/* ── left — info ── */}
          <div className="ct-left flex flex-col gap-10">
            <div className="ct-info">
              <p style={LABEL_STYLE}>EMAIL_CHANNEL</p>
              <a
                href="mailto:sahithbolli980@gmail.com"
                style={{ fontSize: 'clamp(.95rem,1.8vw,1.3rem)', color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}
                className="hover:opacity-80 transition-opacity"
              >
                sahithbolli980@gmail.com
              </a>
            </div>

            <div className="ct-info">
              <p style={LABEL_STYLE}>GEO_LOCATION</p>
              <p style={{ fontSize: 'clamp(.95rem,1.8vw,1.3rem)', color: '#fff', fontWeight: 600 }}>
                Atlanta, GA, USA
              </p>
            </div>

            <div className="ct-info">
              <p style={{ ...LABEL_STYLE, marginBottom: '14px' }}>PREFER A DIRECT SYNC?</p>
              <button
                onClick={() => setShowCalendly(true)}
                className="font-display font-bold tracking-[.1em] uppercase px-8 py-3.5 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: 'var(--brand)', color: '#0A0A0C', fontSize: '.78rem', letterSpacing: '.12em' }}
              >
                SCHEDULE_A_CALL
              </button>
            </div>
          </div>

          {/* ── right — form ── */}
          <form className="ct-form flex flex-col gap-7" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label style={LABEL_STYLE}>_FIRST_NAME</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  style={INPUT_STYLE}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--brand)')}
                  onBlur={e  => (e.target.style.borderBottomColor = 'rgba(255,255,255,.18)')}
                />
              </div>
              <div>
                <label style={LABEL_STYLE}>_LAST_NAME</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  style={INPUT_STYLE}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--brand)')}
                  onBlur={e  => (e.target.style.borderBottomColor = 'rgba(255,255,255,.18)')}
                />
              </div>
            </div>

            <div>
              <label style={LABEL_STYLE}>_EMAIL_ADDR</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                style={INPUT_STYLE}
                onFocus={e => (e.target.style.borderBottomColor = 'var(--brand)')}
                onBlur={e  => (e.target.style.borderBottomColor = 'rgba(255,255,255,.18)')}
              />
            </div>

            <div>
              <label style={LABEL_STYLE}>_MESSAGE_PROMPT</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                style={{ ...INPUT_STYLE, resize: 'none' }}
                onFocus={e => (e.target.style.borderBottomColor = 'var(--brand)')}
                onBlur={e  => (e.target.style.borderBottomColor = 'rgba(255,255,255,.18)')}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="font-display font-bold tracking-[.1em] uppercase px-10 py-4 transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  background: sent ? 'var(--brand)' : '#fff',
                  color: '#0A0A0C',
                  fontSize: '.78rem',
                  letterSpacing: '.12em',
                  boxShadow: '4px 4px 0 var(--brand)',
                }}
              >
                {sent ? 'MESSAGE_SENT ✓' : 'TRANSMIT_MESSAGE'}
              </button>
            </div>
          </form>

        </div>

        {/* ── footer line ── */}
        <div
          className="max-w-screen-xl mx-auto mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}
        >
          <p style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.13em', textTransform: 'uppercase' }}>
            © 2026 SAHITH_BOLLI // PORTFOLIO
          </p>
          <div className="flex gap-8">
            {['About', 'Experience', 'Projects', 'Contact'].map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.11em', textTransform: 'uppercase', textDecoration: 'none' }}
                className="hover:text-white transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
