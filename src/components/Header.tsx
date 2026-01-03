import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Bell, Menu } from 'lucide-react'

interface HeaderProps {
  title: string
  subtitle?: string
  onMenuClick?: () => void
  showStatus?: boolean
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, onMenuClick, showStatus = false }) => {
  const { toggleTheme } = useTheme()

  return (
    <header 
      className="sticky top-0 z-30 backdrop-blur-md border-b theme-border"
      style={{ backgroundColor: 'var(--color-bg)', opacity: 0.95 }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          {onMenuClick && (
            <button 
              className="lg:hidden p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
              onClick={onMenuClick}
            >
              <Menu className="w-5 h-5 theme-text" />
            </button>
          )}
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            {subtitle && (
              <p className="text-xs theme-text-muted mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle px-3 py-2 border theme-border text-xs uppercase tracking-wider transition-colors hover:border-axon-accent"
          >
            <span className="dark:hidden">☀ LIGHT</span>
            <span className="hidden dark:inline">☾ DARK</span>
          </button>
          
          {/* Status Indicator */}
          {showStatus && (
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded text-green-500 dark:text-green-400 text-xs">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></span>
              ALL SYSTEMS ONLINE
            </div>
          )}

          {/* Notifications */}
          <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors">
            <Bell className="w-5 h-5 theme-text-muted" />
          </button>
        </div>
      </div>
    </header>
  )
}