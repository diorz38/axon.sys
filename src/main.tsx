import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import './styles/globals.css'

// Import layouts and pages
import { MarketingLayout } from './layouts/MarketingLayout'
import { DashboardLayout } from './layouts/DashboardLayout'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { ProfilePage } from './pages/ProfilePage'

// Import module pages
import { ProjectsListPage } from './pages/projects/ProjectsListPage'
import { ProjectsProgressPage } from './pages/projects/ProjectsProgressPage'
import { ProjectsMonitoringPage } from './pages/projects/ProjectsMonitoringPage'
import { ServicesTicketsPage } from './pages/services/ServicesTicketsPage'
import { ServicesAssetsPage } from './pages/services/ServicesAssetsPage'
import { AdminUsersPage } from './pages/admin/AdminUsersPage'
import { AdminRolesPage } from './pages/admin/AdminRolesPage'
import { AdminPermissionsPage } from './pages/admin/AdminPermissionsPage'

// Create the root component
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketingLayout><LandingPage /></MarketingLayout>} />
          <Route path="/login" element={<MarketingLayout><LoginPage /></MarketingLayout>} />
          <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
          <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
          
          {/* Projects Module Routes */}
          <Route path="/projects/list" element={<DashboardLayout><ProjectsListPage /></DashboardLayout>} />
          <Route path="/projects/progress" element={<DashboardLayout><ProjectsProgressPage /></DashboardLayout>} />
          <Route path="/projects/monitoring" element={<DashboardLayout><ProjectsMonitoringPage /></DashboardLayout>} />
          
          {/* Services Module Routes */}
          <Route path="/services/tickets" element={<DashboardLayout><ServicesTicketsPage /></DashboardLayout>} />
          <Route path="/services/assets" element={<DashboardLayout><ServicesAssetsPage /></DashboardLayout>} />
          
          {/* Admin Module Routes */}
          <Route path="/admin/users" element={<DashboardLayout><AdminUsersPage /></DashboardLayout>} />
          <Route path="/admin/roles" element={<DashboardLayout><AdminRolesPage /></DashboardLayout>} />
          <Route path="/admin/permissions" element={<DashboardLayout><AdminPermissionsPage /></DashboardLayout>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
