import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { ScaffoldBackground } from '../components/ScaffoldBackground'
import { ModuleProvider } from '../contexts/ModuleContext'
import { getRouteByPath } from '../types/modules'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

const DashboardLayoutContent: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  // Get header title based on current route
  const route = getRouteByPath(location.pathname)
  const title = route?.label || 'Dashboard'
  const subtitle = route?.description || '// SYSTEM_OVERVIEW_REAL_TIME'

  return (
    <div className="min-h-screen font-mono">
      <ScaffoldBackground />
      
      <div className="flex min-h-screen">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={closeSidebar}
          onMobileToggle={toggleSidebar}
        />
        
        <main className="flex-1 lg:ml-64">
          <Header 
            title={title}
            subtitle={subtitle}
            onMenuClick={toggleSidebar}
            showStatus={true}
          />
          
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <ModuleProvider>
      <DashboardLayoutContent {...props} />
    </ModuleProvider>
  )
}
