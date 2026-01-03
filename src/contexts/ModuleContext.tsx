import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { ModuleType } from '../types/modules'
import { MODULE_CONFIG, getModuleFromPath } from '../types/modules'

interface ModuleContextType {
  currentModule: ModuleType | null
  setCurrentModule: (module: ModuleType) => void
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined)

export const ModuleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentModule, setCurrentModule] = useState<ModuleType | null>(() => {
    return getModuleFromPath(location.pathname)
  })

  // Update current module when path changes
  useEffect(() => {
    const moduleFromPath = getModuleFromPath(location.pathname)
    if (moduleFromPath && moduleFromPath !== currentModule) {
      setCurrentModule(moduleFromPath)
    }
  }, [location.pathname])

  // Navigate to first route of module when switching
  const handleSetModule = (module: ModuleType) => {
    const moduleConfig = MODULE_CONFIG.find(m => m.id === module)
    if (moduleConfig && moduleConfig.routes.length > 0) {
      navigate(moduleConfig.routes[0].path)
    }
  }

  return (
    <ModuleContext.Provider value={{ currentModule, setCurrentModule: handleSetModule }}>
      {children}
    </ModuleContext.Provider>
  )
}

export const useModule = () => {
  const context = useContext(ModuleContext)
  if (context === undefined) {
    throw new Error('useModule must be used within a ModuleProvider')
  }
  return context
}
