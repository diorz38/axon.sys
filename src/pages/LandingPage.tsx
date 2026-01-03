import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const LandingPage: React.FC = () => {
  useEffect(() => {
    // Add active class to reveal elements
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => {
      if (el.classList.contains('active')) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
            }
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="col-span-12 min-h-[80vh] grid grid-cols-12 border-b theme-border">
        {/* Hero Title */}
        <div className="col-span-12 lg:col-span-8 p-8 lg:py-16 border-b lg:border-b-0 lg:border-r theme-border flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8 animate-slide-up">
            Static Space.<br />Dynamic Flow.
          </h1>
        </div>

        {/* Hero Meta */}
        <div className="col-span-12 lg:col-span-4 p-8 lg:py-16 flex flex-col justify-between font-mono bg-axon-accent/[0.02]">
          <div>
            <span className="text-xs text-axon-accent block mb-4">// SYSTEM_VERSION_4.0</span>
            <p className="text-base theme-text-muted leading-relaxed">
              A tectonic approach to workspace management. We build the scaffolding for high-performance teams to scale without friction.
            </p>
          </div>
          <div className="mt-16">
            <Link
              to="/login"
              className="cta-button inline-block bg-axon-accent text-white py-6 px-12 font-mono font-bold uppercase no-underline"
            >
              Initialize Setup
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="col-span-12 grid grid-cols-1 md:grid-cols-3 border-b theme-border">
        {/* Feature 1 */}
        <div className="feature-item p-8 lg:p-12 border-b md:border-b-0 md:border-r theme-border relative overflow-hidden hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors duration-400">
          <span className="font-mono text-axon-accent text-sm block mb-16">01 / LOGISTICS</span>
          <h3 className="text-3xl font-bold uppercase mb-4">Kinetic Routing</h3>
          <p className="theme-text-muted text-sm leading-relaxed">
            Automated desk and resource allocation that shifts with your team's real-time density and project needs.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-item p-8 lg:p-12 border-b md:border-b-0 md:border-r theme-border relative overflow-hidden hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors duration-400">
          <span className="font-mono text-axon-accent text-sm block mb-16">02 / INFRASTRUCTURE</span>
          <h3 className="text-3xl font-bold uppercase mb-4">Deep Stack</h3>
          <p className="theme-text-muted text-sm leading-relaxed">
            Integrate every peripheral, climate sensor, and security node into a single command-line interface.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-item p-8 lg:p-12 relative overflow-hidden hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors duration-400">
          <span className="font-mono text-axon-accent text-sm block mb-16">03 / ANALYTICS</span>
          <h3 className="text-3xl font-bold uppercase mb-4">Grid Logic</h3>
          <p className="theme-text-muted text-sm leading-relaxed">
            Predictive spatial modeling. Understand how your office breathes before you sign the next lease.
          </p>
        </div>
      </section>

      {/* Slab Section */}
      <section className="col-span-12 py-32 px-8 flex items-center justify-center slab-section relative">
        <div className="reveal text-center max-w-3xl">
          <span className="font-mono text-xs opacity-50 block mb-4">// RECONSTRUCT_WORK</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
            The end of the generic office dashboard.
          </h2>
          <p className="mb-12 text-xl opacity-80">
            AXON is a structural framework for the modern enterprise, treating space as a variable, not a constant.
          </p>
          <Link
            to="/dashboard"
            className="cta-button cta-button-alt inline-block bg-black dark:bg-white text-white dark:text-black py-6 px-12 font-mono font-bold uppercase no-underline"
          >
            Deploy Infrastructure
          </Link>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="col-span-12 grid grid-cols-2 lg:grid-cols-4 border-b theme-border">
        {/* Metric 1 */}
        <div className="reveal py-16 px-8 border-r border-b lg:border-b-0 theme-border text-center">
          <span className="font-mono text-5xl block mb-2">42%</span>
          <span className="uppercase text-[0.7rem] tracking-[0.2em] theme-text-muted">Efficiency Gain</span>
        </div>

        {/* Metric 2 */}
        <div className="reveal py-16 px-8 border-b lg:border-b-0 lg:border-r theme-border text-center">
          <span className="font-mono text-5xl block mb-2">0.4s</span>
          <span className="uppercase text-[0.7rem] tracking-[0.2em] theme-text-muted">System Latency</span>
        </div>

        {/* Metric 3 */}
        <div className="reveal py-16 px-8 border-r theme-border text-center">
          <span className="font-mono text-5xl block mb-2">12k+</span>
          <span className="uppercase text-[0.7rem] tracking-[0.2em] theme-text-muted">Nodes Managed</span>
        </div>

        {/* Metric 4 */}
        <div className="reveal py-16 px-8 text-center">
          <span className="font-mono text-5xl block mb-2">∞</span>
          <span className="uppercase text-[0.7rem] tracking-[0.2em] theme-text-muted">Scalability</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="col-span-12 py-16 px-8 flex flex-col md:flex-row justify-between gap-4 font-mono theme-text-muted text-xs">
        <div>© 2024 AXON SYSTEMIC LTD.</div>
        <div>ST_GRID_01 // LONDON_OPERATIONS</div>
        <div>BUILT_ON_TECTONIC_V4</div>
      </footer>
    </>
  )
}