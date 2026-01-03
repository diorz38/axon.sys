import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle authentication here
    navigate('/dashboard')
  }

  return (
    <>
      {/* Login Shell */}
      <section className="col-span-12 grid grid-cols-12 min-h-0 overflow-hidden border-b theme-border">
        {/* Left Panel */}
        <div className="hidden lg:flex lg:col-span-6 py-16 px-6 lg:px-12 border-b lg:border-b-0 lg:border-r theme-border flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase theme-text-muted">// ACCESS PROTOCOL V4</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight mt-4 animate-slide-up">
              Entry Point<br />For Core Systems.
            </h1>
            <p className="mt-8 theme-text-muted text-base leading-relaxed max-w-md">
              Log in to monitor spatial analytics, issue directives, and coordinate structural flow across distributed teams.
            </p>
          </div>
          <div className="mt-12 font-mono text-sm theme-text-muted">
            <span className="block mb-2 text-axon-accent">// STATUS</span>
            Connection stable. Latency 0.4s. Auth layers active.
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-12 lg:col-span-6 py-16 px-6 lg:px-12 flex items-center justify-center bg-axon-accent/[0.02]">
          {/* Login Card */}
          <div className="w-full max-w-md border theme-border p-8 lg:p-10 theme-surface shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <h2 className="text-3xl font-bold mb-2">Operator Login</h2>
            <p className="theme-text-muted text-sm mb-8">
              Authenticate to access dashboards, live modules, and system logs.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] uppercase theme-text-muted mb-2 font-mono"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@axon.sys"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-4 px-4 bg-transparent border theme-border theme-text text-base transition-all duration-200"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-xs tracking-[0.2em] uppercase theme-text-muted mb-2 font-mono"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-4 px-4 bg-transparent border theme-border theme-text text-base transition-all duration-200"
                />
              </div>

              {/* Form Row */}
              <div className="flex justify-between items-center font-mono text-[0.7rem] uppercase theme-text-muted mb-8">
                <label className="flex items-center gap-2 cursor-pointer tracking-wider">
                  <input type="checkbox" defaultChecked className="w-auto accent-axon-accent" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="theme-text-muted hover:text-axon-accent transition-colors duration-200 no-underline"
                >
                  Reset Access
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="cta-button w-full bg-axon-accent text-white py-4 px-8 font-mono uppercase font-bold tracking-[0.2em] border-none cursor-pointer"
              >
                Initialize
              </button>
            </form>

            {/* Alt Action */}
            <div className="mt-6 font-mono text-xs uppercase theme-text-muted">
              New operator?{' '}
              <a href="#" className="text-axon-accent no-underline hover:underline">
                Request credentials
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}