import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LogOut,
  Menu,
  X,
  User,
  Home,
  ChevronDown,
  Settings
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useModule } from '../contexts/ModuleContext'
import { MODULE_CONFIG, type ModuleType } from '../types/modules'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onMobileToggle: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onMobileToggle }) => {
  const { currentModule, setCurrentModule } = useModule()
  const location = useLocation()
  const navigate = useNavigate()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const moduleDropdownRef = useRef<HTMLDivElement>(null)

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
      if (moduleDropdownRef.current && !moduleDropdownRef.current.contains(event.target as Node)) {
        setIsModuleDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close user menu when location changes
  useEffect(() => {
    setIsUserMenuOpen(false)
    setIsModuleDropdownOpen(false)
  }, [location])

  const handleLogout = () => {
    console.log('Logout clicked')
    navigate('/login')
  }

  const handleModuleChange = (moduleId: ModuleType) => {
    setCurrentModule(moduleId)
    setIsModuleDropdownOpen(false)
  }

  const currentModuleConfig = MODULE_CONFIG.find(m => m.id === currentModule)

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity opacity-100"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-64 border-r theme-border theme-bg backdrop-blur-md flex flex-col fixed inset-y-0 left-0 z-50 lg:sticky lg:top-0 lg:h-screen lg:z-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } shrink-0`}
        style={{ backgroundColor: 'var(--color-bg)', opacity: 0.95 }}
      >
        {/* Sidebar Header with Module Switcher */}
        <div className="p-4 border-b theme-border relative" ref={moduleDropdownRef}>
          <div className="font-black text-xl tracking-tighter uppercase mb-1">Axon.Sys</div>
          <div className="text-[0.65rem] uppercase theme-text-muted mb-3">// ADMIN_PANEL_V4</div>

          {/* Module Switcher Dropdown */}
          <button
            onClick={() => setIsModuleDropdownOpen(!isModuleDropdownOpen)}
            className="w-full flex items-center justify-between px-3 py-2 border theme-border rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="text-sm font-medium">
              {currentModuleConfig ? currentModuleConfig.label : 'Select Module'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isModuleDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Module Dropdown Menu */}
          {isModuleDropdownOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-[var(--color-bg)] border theme-border rounded-lg shadow-lg overflow-hidden z-50">
              {MODULE_CONFIG.map((module, index) => (
                <React.Fragment key={module.id}>
                  {module.id === 'admin' && (
                    <div className="border-t theme-border" />
                  )}
                  <button
                    onClick={() => handleModuleChange(module.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${currentModule === module.id ? 'bg-axon-accent/10 text-axon-accent' : 'theme-text'
                      }`}
                  >
                    <module.icon className="w-4 h-4" />
                    <span>{module.label}</span>
                  </button>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto">
          {currentModuleConfig && (
            <>
              <div className="px-4 mb-4">
                <span className="text-[0.65rem] uppercase theme-text-muted tracking-wider">
                  {currentModuleConfig.label} Menu
                </span>
              </div>

              {currentModuleConfig.routes.map((route) => {
                const Icon = route.icon
                const isActive = location.pathname === route.path
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`sidebar-link flex items-center gap-3 px-6 py-3 text-sm border-l-2 border-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${isActive ? 'active' : 'theme-text-muted'
                      }`}
                    onClick={onClose}
                  >
                    <Icon className="w-4 h-4" />
                    {route.label}
                  </Link>
                )
              })}
            </>
          )}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t theme-border relative" ref={userMenuRef}>
          <div
            className="flex items-center gap-3 p-2 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <div className="w-9 h-9 rounded bg-axon-accent/20 flex items-center justify-center font-bold text-axon-accent text-sm">
              OP
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Operator</div>
              <div className="text-[0.65rem] theme-text-muted">ADMIN_LVL_3</div>
            </div>
            <div className={`transform transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 theme-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Popup Menu */}
          {isUserMenuOpen && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-[var(--color-bg)] border theme-border rounded-lg shadow-lg overflow-hidden z-50">
              <div className="py-1">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  Landing Page
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-red-500"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden absolute -right-10 top-4 p-2 bg-[var(--color-bg)] border theme-border rounded-r"
          onClick={onMobileToggle}
        >
          {isOpen ? <X className="w-5 h-5 theme-text" /> : <Menu className="w-5 h-5 theme-text" />}
        </button>
      </aside>
    </>
  )
}
