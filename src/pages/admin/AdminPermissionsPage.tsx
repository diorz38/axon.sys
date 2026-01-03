import React from 'react'
import { CardGrid } from '../../components/CardGrid'
import { StatCard } from '../../components/StatCard'
import { Key, Shield, Lock } from 'lucide-react'

// Dummy data
const permissionsData = Array.from({ length: 30 }, (_, i) => ({
  id: `PER-${String(i + 1).padStart(3, '0')}`,
  name: `Permission ${i + 1}`,
  description: `Description for permission ${i + 1} with specific access controls.`,
  category: ['Read', 'Write', 'Execute', 'Admin'][Math.floor(Math.random() * 4)],
  rolesAssigned: Math.floor(Math.random() * 10) + 1,
}))

export const AdminPermissionsPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// TOTAL_PERMISSIONS"
          value="30"
          subtext="All Permissions"
          trend="up"
          trendValue="+5 from last month"
          icon={Key}
        />
        <StatCard
          label="// ACTIVE"
          value="28"
          subtext="Currently Assigned"
          trend="up"
          trendValue="+3 this week"
          icon={Shield}
        />
        <StatCard
          label="// RESTRICTED"
          value="2"
          subtext="Limited Access"
          trend="flat"
          trendValue="No change"
          icon={Lock}
        />
        <StatCard
          label="// AVG_ROLES"
          value="4"
          subtext="Roles Per Permission"
          trend="up"
          trendValue="+8% from baseline"
          icon={Shield}
        />
      </div>

      {/* Cards Grid */}
      <CardGrid
        data={permissionsData}
        renderItem={(permission) => (
          <div className="theme-surface border theme-border rounded-lg p-6 hover:border-axon-accent/50 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded bg-axon-accent/10 flex items-center justify-center">
                <Key className="w-6 h-6 text-axon-accent" />
              </div>
              <span className="font-mono text-xs theme-text-muted">{permission.id}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{permission.name}</h3>
            <p className="text-sm theme-text-muted mb-4">{permission.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 theme-text-muted" />
                <span className="theme-text">{permission.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 theme-text-muted" />
                <span className="theme-text">{permission.rolesAssigned} roles</span>
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
