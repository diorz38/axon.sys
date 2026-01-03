import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../components/DataTable'
import { StatCard } from '../../components/StatCard'
import { Box, Activity, CheckCircle, Clock } from 'lucide-react'

// Dummy data
const projectsData = Array.from({ length: 50 }, (_, i) => ({
  id: `PRJ-${String(i + 1).padStart(4, '0')}`,
  name: `Project ${i + 1}`,
  status: ['active', 'completed', 'pending'][Math.floor(Math.random() * 3)] as 'active' | 'completed' | 'pending',
  startDate: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
  manager: `Manager ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
  progress: `${Math.floor(Math.random() * 100)}%`,
}))

const columns: ColumnDef<typeof projectsData[number]>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (info) => <span className="font-mono text-xs">{info.getValue() as string}</span>,
  },
  {
    accessorKey: 'name',
    header: 'Project Name',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => {
      const status = info.getValue() as 'active' | 'completed' | 'pending'
      const statusStyles = {
        active: 'bg-green-500/10 text-green-600 dark:text-green-400',
        completed: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
        pending: 'bg-axon-accent/10 text-axon-accent',
      }
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[status]}`}>
          {status.toUpperCase()}
        </span>
      )
    },
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'manager',
    header: 'Manager',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: (info) => {
      const value = info.getValue() as string
      return (
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-axon-accent transition-all"
              style={{ width: value }}
            />
          </div>
          <span className="text-xs theme-text-muted">{value}</span>
        </div>
      )
    },
  },
]

export const ProjectsListPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// TOTAL_PROJECTS"
          value="50"
          subtext="All Projects"
          trend="up"
          trendValue="+5 from last month"
          icon={Box}
        />
        <StatCard
          label="// ACTIVE"
          value="32"
          subtext="Currently Running"
          trend="up"
          trendValue="+12% from baseline"
          icon={Activity}
        />
        <StatCard
          label="// COMPLETED"
          value="15"
          subtext="Successfully Delivered"
          trend="up"
          trendValue="+3 this week"
          icon={CheckCircle}
        />
        <StatCard
          label="// PENDING"
          value="3"
          subtext="Awaiting Approval"
          trend="down"
          trendValue="-2 from yesterday"
          icon={Clock}
        />
      </div>

      {/* Data Table */}
      <DataTable
        data={projectsData}
        columns={columns}
        pageSize={10}
      />
    </>
  )
}
