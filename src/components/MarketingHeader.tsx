import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Menu, X } from 'lucide-react'

export const MarketingHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { label: 'Architecture', href: '#', responsive: 'sm' },
    { label: 'Modules', href: '#', responsive: 'sm' },
    { label: 'Integration', href: '#', responsive: 'md' },
    { label: 'Contact', href: '#', responsive: 'md' },
  ]

  return (
    <header
      className="col-span-12 flex justify-between items-center p-8 border-b theme-border backdrop-blur-md sticky top-0 z-50"
      style={{ backgroundColor: 'var(--color-bg)', opacity: 0.95 }}
    >
      <Link to="/" className="font-black text-2xl tracking-tighter uppercase theme-text hover:text-axon-accent transition-colors">
        Axon.Sys
      </Link>
      
      <nav className="flex items-center gap-8 lg:gap-12 font-mono text-xs uppercase">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`theme-text-muted hover:text-axon-accent transition-colors duration-300 hidden ${link.responsive}:block`}
          >
            {link.label}
          </a>
        ))}
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="theme-toggle px-3 py-2 border theme-border text-xs uppercase tracking-wider transition-colors hover:border-axon-accent"
        >
          <span className="dark:hidden">☀ LIGHT</span>
          <span className="hidden dark:inline">☾ DARK</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 theme-text-muted hover:text-axon-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-20 left-0 right-0 border-t theme-border bg-white dark:bg-black px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block font-mono text-xs uppercase theme-text-muted hover:text-axon-accent transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-full mt-4 px-3 py-2 border theme-border text-xs uppercase hover:border-axon-accent transition-colors"
          >
            <span className="dark:hidden">☀ LIGHT</span>
            <span className="hidden dark:inline">☾ DARK</span>
          </button>
        </div>
      )}
    </header>
  )
}