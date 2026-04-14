import { marqueeItems } from '@/data'

function Track({ delay = false }) {
  return (
    <div className={`flex gap-0 flex-shrink-0 ${delay ? 'marquee-b' : 'marquee-a'}`}>
      {marqueeItems.map(item => (
        <span
          key={item}
          className="font-display text-[.72rem] font-bold tracking-[.12em] uppercase whitespace-nowrap px-10 flex items-center gap-10"
          style={{ color: 'var(--txt3)' }}
        >
          {item}
          <span style={{ color: 'var(--brand)' }} aria-hidden="true">·</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      className="py-5 overflow-hidden border-t border-b border-[var(--bdr)]"
      style={{ background: 'var(--bg2)' }}
      aria-hidden="true"
    >
      <div className="flex">
        <Track />
        <Track delay />
      </div>
    </div>
  )
}
