'use client'
import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const GitHubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
  </svg>
)

const iconBtn = `
  w-9 h-9 rounded-lg border border-[var(--bdr)] flex items-center justify-center
  text-[var(--txt3)] transition-colors duration-150
  hover:text-[var(--brand)] hover:border-[var(--brand-bdr)] hover:bg-[var(--brand-dim)]
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[900] px-6 lg:px-12 py-[1.3rem] flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[rgba(2,2,9,0.88)] backdrop-blur-xl border-b border-[var(--bdr)]' : ''
      }`}
      aria-label="Main navigation"
    >
      {/* logo */}
      <a href="#hero" className="flex items-center gap-2.5 font-display font-extrabold text-[1.05rem] text-[var(--txt)]" aria-label="Home">
        <span className="w-2 h-2 rounded-full bg-[var(--brand)] pulse" aria-hidden="true" />
        Sahith Bolli
      </a>

      {/* right */}
      <div className="flex items-center gap-2.5">
        <MagneticButton as="a" href="https://github.com/SahithBolli" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="GitHub">
          <GitHubIcon />
        </MagneticButton>

        <MagneticButton as="a" href="https://www.linkedin.com/in/sahith-bolli" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="LinkedIn">
          <LinkedInIcon />
        </MagneticButton>

        <MagneticButton
          as="a"
          href="/Sahith_Bolli_Resume.pdf"
          download
          className="flex items-center gap-2 font-display font-bold text-[.78rem] tracking-[.04em] text-[var(--bg)] bg-[var(--brand)] px-4 py-2 rounded-lg transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(6,214,160,.3)]"
        >
          <DownloadIcon /> Résumé
        </MagneticButton>
      </div>
    </nav>
  )
}
