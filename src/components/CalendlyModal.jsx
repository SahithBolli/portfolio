'use client'
import { useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/sahithbolli980/new-meeting'

export default function CalendlyModal({ onClose }) {
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
