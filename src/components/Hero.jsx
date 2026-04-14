'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef   = useRef(null)

  /* ── particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], raf
    let mpx = -9999, mpy = -9999

    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
    const init   = () => {
      particles = Array.from({ length: 90 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.7,
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p, i) => {
        const mdx = p.x - mpx, mdy = p.y - mpy
        const md  = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 100 && md > 0) { const f = (100 - md) / 100 * 0.6; p.vx += (mdx / md) * f; p.vy += (mdy / md) * f }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > 1.5) { p.vx = (p.vx / spd) * 1.5; p.vy = (p.vy / spd) * 1.5 }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(6,214,160,0.5)'; ctx.fill()
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx*dx + dy*dy)
          if (d < 150) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.strokeStyle = `rgba(6,214,160,${(1 - d/150)*0.15})`; ctx.lineWidth = 0.5; ctx.stroke() }
        }
      })
      raf = requestAnimationFrame(draw)
    }
    const onMouseMove  = e => { const r = canvas.getBoundingClientRect(); mpx = e.clientX - r.left; mpy = e.clientY - r.top }
    const onMouseLeave = () => { mpx = -9999; mpy = -9999 }
    const onResize     = () => { resize(); init() }
    resize(); init(); draw()
    window.addEventListener('resize',    onResize,    { passive: true })
    canvas.addEventListener('mousemove', onMouseMove, { passive: true })
    canvas.addEventListener('mouseleave', onMouseLeave)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); canvas.removeEventListener('mousemove', onMouseMove); canvas.removeEventListener('mouseleave', onMouseLeave) }
  }, [])

  /* ── GSAP entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('#hero-badge',   { y: 24, opacity: 0, duration: 0.7, delay: 0.3 })
        .from('#hero-greeting',{ y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('#hero-name',    { y: 55, opacity: 0, duration: 1.0 }, '-=0.4')
        .from('#hero-sub',     { y: 24, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('#hero-stats',   { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('#hero-cta',     { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('#hero-photo-bg',{ opacity: 0, duration: 1.4, ease: 'power2.inOut' }, 0.1)
        .to('#hero-scroll',    { opacity: 0.55, duration: 0.5 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#020209' }}
    >
      {/* ── background photo (right half) ── */}
      <div
        id="hero-photo-bg"
        className="absolute top-0 right-0 h-full"
        style={{ width: '52%', opacity: 0 }}
        aria-hidden="true"
      >
        {/* actual photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:    'url(/sahith.jpg)',
            backgroundSize:     'cover',
            backgroundPosition: 'center top',
          }}
        />
        {/* fade left edge into dark bg */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #020209 0%, rgba(2,2,9,.75) 30%, rgba(2,2,9,.15) 70%, transparent 100%)' }}
        />
        {/* fade bottom */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #020209 0%, transparent 40%)' }}
        />
        {/* subtle teal tint */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(6,214,160,.04)', mixBlendMode: 'screen' }}
        />
      </div>

      {/* ── particle canvas (left half only, subtle) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
        aria-hidden="true"
      />

      {/* ── radial glow top-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', left: '-5%', width: '55%', height: '70%',
          background: 'radial-gradient(ellipse at top left, rgba(6,214,160,.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* ── content ── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <div className="max-w-[580px]">

          {/* available badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 text-[.72rem] font-semibold tracking-[.09em] uppercase px-4 py-1.5 rounded-full mb-8"
            style={{ color: 'var(--brand)', background: 'var(--brand-dim)', border: '1px solid var(--brand-bdr)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] pulse" aria-hidden="true" />
            Available for new opportunities
          </div>

          {/* greeting line */}
          <p
            id="hero-greeting"
            className="font-display font-semibold mb-3"
            style={{ fontSize: 'clamp(1.1rem,2.2vw,1.35rem)', color: 'var(--txt2)', letterSpacing: '0.01em' }}
          >
            Hey There,
          </p>

          {/* name */}
          <h1
            id="hero-name"
            className="font-display font-extrabold mb-6"
            style={{
              fontSize:      'clamp(3.5rem,8.5vw,7.5rem)',
              lineHeight:    1.08,
              letterSpacing: '-0.02em',
              color:         'var(--txt)',
            }}
            aria-label="I'm Sahith Bolli"
          >
            I&apos;m{' '}
            <span style={{ color: 'var(--brand)' }}>Sahith</span>
            <br />
            Bolli.
          </h1>

          {/* role + tagline */}
          <div id="hero-sub" className="mb-8 space-y-2">
            <p
              className="font-display font-semibold"
              style={{ fontSize: 'clamp(.95rem,1.8vw,1.2rem)', color: 'var(--txt2)' }}
            >
              Senior Full Stack Engineer
            </p>
            <p
              className="text-[.88rem] max-w-[420px]"
              style={{ color: 'var(--txt3)', lineHeight: 1.85 }}
            >
              Building distributed systems &amp; cloud-native architectures
              that scale — and stay up at 3&nbsp;AM. Currently at{' '}
              <strong style={{ color: 'var(--txt2)', fontWeight: 600 }}>Honeywell</strong>.
            </p>
          </div>

          {/* stats */}
          <div id="hero-stats" className="flex flex-wrap gap-8 mb-10">
            {[
              { value: '5+',  label: 'Years Experience'       },
              { value: '30+', label: 'Microservices Deployed'  },
              { value: '3',   label: 'Companies Shipped At'    },
            ].map(s => (
              <div key={s.label}>
                <span
                  className="block font-display font-extrabold"
                  style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', color: 'var(--txt)', lineHeight: 1, letterSpacing: '-0.03em' }}
                >
                  {s.value}
                </span>
                <span className="block text-[.68rem] font-medium mt-1.5 tracking-[.04em]" style={{ color: 'var(--txt3)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div id="hero-cta" className="flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href="mailto:sahithbolli980@gmail.com"
              className="font-display font-bold text-sm tracking-[.04em] text-[var(--bg)] bg-[var(--brand)] px-8 py-3.5 rounded-xl transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(6,214,160,.38)]"
            >
              Let&apos;s Talk
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#experience"
              className="flex items-center gap-2 font-display font-semibold text-sm text-[var(--txt)] border border-[var(--bdr)] px-8 py-3.5 rounded-xl transition-[border-color,background,transform] duration-200 hover:border-[var(--brand-bdr)] hover:bg-[var(--brand-dim)] hover:-translate-y-0.5"
            >
              See My Work
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </MagneticButton>
          </div>

        </div>
      </div>

      {/* scroll indicator */}
      <div
        id="hero-scroll"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <span className="text-[.6rem] tracking-[.15em] uppercase" style={{ color: 'var(--txt3)' }}>scroll</span>
        <div className="w-px h-12 scroll-line-anim" style={{ background: 'linear-gradient(to bottom, transparent, var(--brand))' }} />
      </div>
    </section>
  )
}
