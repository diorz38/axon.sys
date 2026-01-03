import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../components/DataTable'
import { StatCard } from '../../components/StatCard'
import { HardDrive, Activity, AlertTriangle, CheckCircle } from 'lucide-react'

// Dummy data
const assetsData = Array.from({ length: 50 }, (_, i) => ({
  id: `AST-${String(i + 1).padStart(4, '0')}`,
  name: `Asset ${i + 1}`,
  type: ['Server', 'Database', 'Storage', 'Network'][Math.floor(Math.random() * 4)],
  status: ['active', 'maintenance', 'offline'][Math.floor(Math.random() * 3)] as 'active' | 'maintenance' | 'offline',
  location: `Data Center ${Math.floor(Math.random() * 5) + 1}`,
  lastUpdated: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
}))

const columns: ColumnDef<typeof assetsData[number]>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (info) => <span className="font-mono text-xs">{info.getValue() as string}</span>,
  },
  {
    accessorKey: 'name',
    header: 'Asset Name',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => {
      const status = info.getValue() as 'active' | 'maintenance' | 'offline'
      const statusStyles = {
        active: 'bg-green-500/10 text-green-600 dark:text-green-400',
        maintenance: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
        offline: 'bg-red-500/10 text-red-600 dark:text-red-400',
      }
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[status]}`}>
          {status.toUpperCase()}
        </span>
      )
    },
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'lastUpdated',
    header: 'Last Updated',
    cell: (info) => info.getValue() as string,
  },
]

export const ServicesAssetsPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// TOTAL_ASSETS"
          value="50"
          subtext="All Assets"
          trend="up"
          trendValue="+3 from last month"
          icon={HardDrive}
        />
        <StatCard
          label="// ACTIVE"
          value="42"
          subtext="Online & Running"
          trend="up"
          trendValue="+5% from baseline"
          icon={Activity}
        />
        <StatCard
          label="// MAINTENANCE"
          value="5"
          subtext="Scheduled Maintenance"
          trend="flat"
          trendValue="No change"
          icon={AlertTriangle}
        />
        <StatCard
          label="// OFFLINE"
          value="3"
          subtext="Currently Down"
          trend="down"
          trendValue="-1 from yesterday"
          icon={CheckCircle}
        />
      </div>

      {/* Data Table */}
      <DataTable 
        data={assetsData} 
        columns={columns} 
        pageSize={10}
      />
    </>
  )
}
