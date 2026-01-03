import React from 'react'
import { CardGrid } from '../../components/CardGrid'
import { StatCard } from '../../components/StatCard'
import { Shield, Users, Key } from 'lucide-react'

// Dummy data
const rolesData = Array.from({ length: 24 }, (_, i) => ({
  id: `ROL-${String(i + 1).padStart(3, '0')}`,
  name: `Role ${i + 1}`,
  description: `Description for role ${i + 1} with specific permissions and access levels.`,
  usersCount: Math.floor(Math.random() * 50) + 1,
  permissions: Math.floor(Math.random() * 20) + 5,
}))

export const AdminRolesPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// TOTAL_ROLES"
          value="24"
          subtext="All Roles"
          trend="up"
          trendValue="+2 from last month"
          icon={Shield}
        />
        <StatCard
          label="// ACTIVE"
          value="20"
          subtext="Currently Assigned"
          trend="flat"
          trendValue="No change"
          icon={Users}
        />
        <StatCard
          label="// PERMISSIONS"
          value="156"
          subtext="Total Permissions"
          trend="up"
          trendValue="+8 from baseline"
          icon={Key}
        />
        <StatCard
          label="// AVG_USERS"
          value="12"
          subtext="Users Per Role"
          trend="up"
          trendValue="+5% from baseline"
          icon={Users}
        />
      </div>

      {/* Cards Grid */}
      <CardGrid
        data={rolesData}
        renderItem={(role) => (
          <div className="theme-surface border theme-border rounded-lg p-6 hover:border-axon-accent/50 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded bg-axon-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-axon-accent" />
              </div>
              <span className="font-mono text-xs theme-text-muted">{role.id}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{role.name}</h3>
            <p className="text-sm theme-text-muted mb-4">{role.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 theme-text-muted" />
                <span className="theme-text">{role.usersCount} users</span>
              </div>
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 theme-text-muted" />
                <span className="theme-text">{role.permissions} permissions</span>
              </div>
            </div>
          </div>
        )}
        itemsPerRow={3}
        pageSize={9}
      />
    </>
  )
}
