'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from './TiltCard'

const projects = [
  {
    number: '01',
    name:    'EventBridge Platform',
    desc:    'Distributed event streaming microservice handling real-time telemetry. Built Kafka-driven pipelines with Spring Boot, deployed on AWS EKS via Helm with zero-downtime releases.',
    tech:    ['Spring Boot', 'Kafka', 'AWS EKS', 'Helm', 'Docker', 'React'],
    metric:  '50K+ events/sec',
    github:  'https://github.com/SahithBolli',
    color:   'rgba(6,214,160,.06)',
    accent:  '#06D6A0',
  },
  {
    number: '02',
    name:    'KubeMetrics Dashboard',
    desc:    'Real-time Kubernetes cluster monitoring dashboard with Prometheus metrics, live pod health visualizations, and configurable alerting for distributed services.',
    tech:    ['React', 'TypeScript', 'Spring Boot', 'Prometheus', 'Grafana', 'Docker'],
    metric:  'Monitors 30+ services',
    github:  'https://github.com/SahithBolli',
    color:   'rgba(139,92,246,.05)',
    accent:  '#8B5CF6',
  },
  {
    number: '03',
    name:    'SmartGateway AI',
    desc:    'AI-augmented API gateway built on Spring Cloud with LangChain-powered intelligent request routing, semantic caching, and RAG-based API documentation lookup.',
    tech:    ['Spring Cloud', 'OpenAI API', 'LangChain', 'Java', 'Redis', 'Docker'],
    metric:  '40% latency reduction',
    github:  'https://github.com/SahithBolli',
    color:   'rgba(245,158,11,.05)',
    accent:  '#F59E0B',
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.proj-sec-line', {
        scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: '.proj-sec-line', start: 'top 85%' },
      })
      gsap.from('.proj-card', {
        y: 48, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.proj-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 lg:px-12"
      style={{ background: 'var(--bg2)' }}
    >
      <div className="max-w-screen-xl mx-auto">

        <span className="block text-[.68rem] font-bold tracking-[.16em] uppercase mb-2" style={{ color: 'var(--brand)' }}>
          Selected Work
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.03em] leading-[1.08] mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--txt)' }}
        >
          Things I&apos;ve<br />built on my own.
        </h2>
        <div className="proj-sec-line sec-line mb-14" />

        <div className="proj-grid grid lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <TiltCard
              key={p.name}
              intensity={5}
              className="proj-card flex flex-col rounded-2xl border border-[var(--bdr)] overflow-hidden"
              style={{ background: 'var(--card)' }}
            >
              {/* coloured top band */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}
                aria-hidden="true"
              />

              <div className="flex flex-col flex-1 p-6 lg:p-7">
                {/* number + metric */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-display font-extrabold leading-none"
                    style={{ fontSize: '2.4rem', color: p.color.replace('.06)', '.18)').replace('.05)', '.15)') }}
                    aria-hidden="true"
                  >
                    {p.number}
                  </span>
                  <span
                    className="text-[.65rem] font-bold tracking-[.08em] uppercase px-2.5 py-1 rounded-full"
                    style={{ color: p.accent, background: p.color, border: `1px solid ${p.accent}30` }}
                  >
                    {p.metric}
                  </span>
                </div>

                {/* name */}
                <h3
                  className="font-display font-extrabold tracking-[-0.02em] leading-tight mb-3"
                  style={{ fontSize: 'clamp(1.1rem,1.8vw,1.3rem)', color: 'var(--txt)' }}
                >
                  {p.name}
                </h3>

                {/* desc */}
                <p
                  className="text-[.83rem] leading-relaxed flex-1 mb-5"
                  style={{ color: 'var(--txt2)' }}
                >
                  {p.desc}
                </p>

                {/* tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="text-[.68rem] font-medium px-2.5 py-0.5 rounded-md"
                      style={{ background: 'var(--bg2)', color: 'var(--txt3)', border: '1px solid var(--bdr)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* footer actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--bdr)]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[.78rem] font-semibold transition-colors duration-150 hover:text-[var(--brand)]"
                    style={{ color: 'var(--txt3)' }}
                  >
                    <GitHubIcon /> View Code
                  </a>
                  <span className="flex-1" />
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[.78rem] font-bold transition-all duration-150 hover:-translate-y-0.5"
                    style={{ color: p.accent }}
                  >
                    Explore <ArrowIcon />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  )
}
