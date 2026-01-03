import type { ReactElement } from 'react'
import { 
  Box, 
  Server, 
  Shield,
  List,
  Activity,
  Ticket,
  HardDrive,
  Users,
  Settings,
  Key,
  BarChart2
} from 'lucide-react'

export type ModuleType = 'projects' | 'services' | 'admin'

export interface ModuleRoute {
  path: string
  label: string
  icon: React.ElementType
  description?: string
}

export interface ModuleConfig {
  id: ModuleType
  label: string
  icon: React.ElementType
  routes: ModuleRoute[]
  description?: string
}

// Module configuration
export const MODULE_CONFIG: ModuleConfig[] = [
  {
    id: 'projects',
    label: 'Projects',
    icon: Box,
    description: 'Project management and tracking',
    routes: [
      {
        path: '/projects/list',
        label: 'List',
        icon: List,
        description: 'View all projects'
      },
      {
        path: '/projects/progress',
        label: 'Progress',
        icon: Activity,
        description: 'Track project progress'
      },
      {
        path: '/projects/monitoring',
        label: 'Monitoring',
        icon: BarChart2,
        description: 'Real-time monitoring'
      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    icon: Server,
    description: 'Service management',
    routes: [
      {
        path: '/services/tickets',
        label: 'Tickets',
        icon: Ticket,
        description: 'Support tickets'
      },
      {
        path: '/services/assets',
        label: 'Assets',
        icon: HardDrive,
        description: 'Service assets'
      }
    ]
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: Shield,
    description: 'Administrative controls',
    routes: [
      {
        path: '/admin/users',
        label: 'Users',
        icon: Users,
        description: 'User management'
      },
      {
        path: '/admin/roles',
        label: 'Roles',
        icon: Key,
        description: 'Role definitions'
      },
      {
        path: '/admin/permissions',
        label: 'Permissions',
        icon: Settings,
        description: 'Access permissions'
      }
    ]
  }
]

// Helper functions
export const getModuleById = (id: ModuleType): ModuleConfig | undefined => {
  return MODULE_CONFIG.find(m => m.id === id)
}

export const getRouteByPath = (path: string): ModuleRoute | undefined => {
  for (const module of MODULE_CONFIG) {
    const route = module.routes.find(r => r.path === path)
    if (route) return route
  }
  return undefined
}

export const getModuleFromPath = (path: string): ModuleType | null => {
  if (path.startsWith('/projects/')) return 'projects'
  if (path.startsWith('/services/')) return 'services'
  if (path.startsWith('/admin/')) return 'admin'
  return null
}

// Dummy data types
export interface TableData {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending' | 'completed'
  createdAt: string
  [key: string]: any
}

export interface CardData {
  id: string
  title: string
  description: string
  badge?: string
  icon?: React.ElementType
}

export interface StatData {
  label: string
  value: string
  subtext: string
  trend: 'up' | 'down' | 'flat'
  trendValue: string
  icon: React.ElementType
}
