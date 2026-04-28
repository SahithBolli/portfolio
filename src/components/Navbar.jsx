'use client'
import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const DownloadIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
  </svg>
)

const navLinks = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[900] px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b border-[var(--bdr)]' : ''
      }`}
      style={{ background: scrolled ? 'rgba(248,248,246,0.92)' : 'transparent' }}
      aria-label="Main navigation"
    >
      {/* logo + open to work */}
      <a href="#hero" className="flex items-center gap-2.5 font-display font-extrabold text-[.95rem] text-[var(--txt)] whitespace-nowrap" aria-label="Home">
        Sahith Bolli
        <span
          className="hidden sm:flex items-center gap-1.5 text-[.6rem] font-bold tracking-[.1em] uppercase px-2.5 py-0.5 rounded-full"
          style={{ color: 'var(--brand)', background: 'var(--brand-dim)', border: '1px solid var(--brand-bdr)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] pulse" aria-hidden="true" />
          Open to Work
        </span>
      </a>

      {/* desktop nav links */}
      <div className="hidden lg:flex items-center gap-7">
        {navLinks.map(l => (
          <a
            key={l.label}
            href={l.href}
            className="text-[.82rem] font-medium transition-colors duration-150 hover:text-[var(--brand)]"
            style={{ color: 'var(--txt3)' }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* resume + mobile menu */}
      <div className="flex items-center gap-3">
        <MagneticButton
          as="a"
          href="/Sahith_Bolli_Resume.pdf"
          download
          className="hidden sm:flex items-center gap-2 font-display font-bold text-[.78rem] tracking-[.04em] px-4 py-2 rounded-lg border transition-all duration-150 hover:-translate-y-0.5"
          style={{ color: 'var(--txt)', border: '1.5px solid var(--bdr)', background: 'var(--card)' }}
        >
          <DownloadIcon /> Résumé
        </MagneticButton>

        {/* mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 rounded transition-all" style={{ background: 'var(--txt)', transform: open ? 'translateY(8px) rotate(45deg)' : '' }} />
          <span className="w-5 h-0.5 rounded transition-all" style={{ background: 'var(--txt)', opacity: open ? 0 : 1 }} />
          <span className="w-5 h-0.5 rounded transition-all" style={{ background: 'var(--txt)', transform: open ? 'translateY(-8px) rotate(-45deg)' : '' }} />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col border-b border-[var(--bdr)] lg:hidden"
          style={{ background: 'rgba(248,248,246,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3.5 text-sm font-medium border-b border-[var(--bdr)] hover:text-[var(--brand)] transition-colors"
              style={{ color: 'var(--txt2)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Sahith_Bolli_Resume.pdf"
            download
            className="px-6 py-3.5 text-sm font-bold"
            style={{ color: 'var(--brand)' }}
            onClick={() => setOpen(false)}
          >
            Download Résumé ↓
          </a>
        </div>
      )}
    </nav>
  )
}
