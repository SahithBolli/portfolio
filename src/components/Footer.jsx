export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-6 border-t border-[var(--bdr)] bg-[var(--bg)] flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2.5 font-display font-extrabold text-sm text-[var(--txt)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
        Sahith Bolli
      </div>
      <small className="text-xs text-[var(--txt3)]">© 2025 · Built with React &amp; Next.js</small>
    </footer>
  )
}
