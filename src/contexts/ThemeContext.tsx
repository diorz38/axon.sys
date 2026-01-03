import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'
export type ColorTheme = 'orange' | 'blue' | 'indigo'
export type AppWidth = 'full' | 'narrow'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  colorTheme: ColorTheme
  setColorTheme: (color: ColorTheme) => void
  appWidth: AppWidth
  setAppWidth: (width: AppWidth) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const [colorTheme, setColorTheme] = useState<ColorTheme>('orange')
  const [appWidth, setAppWidth] = useState<AppWidth>('full')

  useEffect(() => {
    // Initial Load
    const savedTheme = (localStorage.getItem('axon-theme') as Theme) || 'dark'
    const savedColor = (localStorage.getItem('axon-color') as ColorTheme) || 'orange'
    const savedWidth = (localStorage.getItem('axon-width') as AppWidth) || 'full'

    setTheme(savedTheme)
    setColorTheme(savedColor)
    setAppWidth(savedWidth)

    // Apply Theme
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(savedTheme)

    // Apply Color
    applyColorTheme(savedColor)
  }, [])

  const applyColorTheme = (color: ColorTheme) => {
    const root = document.documentElement
    if (color === 'orange') {
      root.style.setProperty('--color-axon-accent', '#ff4d00')
    } else if (color === 'blue') {
      root.style.setProperty('--color-axon-accent', '#3b82f6')
    } else if (color === 'indigo') {
      root.style.setProperty('--color-axon-accent', '#6366f1')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(newTheme)
    localStorage.setItem('axon-theme', newTheme)
  }

  const updateColorTheme = (newColor: ColorTheme) => {
    setColorTheme(newColor)
    localStorage.setItem('axon-color', newColor)
    applyColorTheme(newColor)
  }

  const updateAppWidth = (newWidth: AppWidth) => {
    setAppWidth(newWidth)
    localStorage.setItem('axon-width', newWidth)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colorTheme,
        setColorTheme: updateColorTheme,
        appWidth,
        setAppWidth: updateAppWidth
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}