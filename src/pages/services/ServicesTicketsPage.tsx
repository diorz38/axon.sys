import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../components/DataTable'
import { StatCard } from '../../components/StatCard'
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react'

// Dummy data
const ticketsData = Array.from({ length: 50 }, (_, i) => ({
  id: `TKT-${String(i + 1).padStart(4, '0')}`,
  subject: `Ticket Subject ${i + 1}`,
  status: ['open', 'in_progress', 'closed'][Math.floor(Math.random() * 3)] as 'open' | 'in_progress' | 'closed',
  priority: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
  assignee: `Agent ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
  created: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
}))

const columns: ColumnDef<typeof ticketsData[number]>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (info) => <span className="font-mono text-xs">{info.getValue() as string}</span>,
  },
  {
    accessorKey: 'subject',
    header: 'Subject',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => {
      const status = info.getValue() as 'open' | 'in_progress' | 'closed'
      const statusStyles = {
        open: 'bg-axon-accent/10 text-axon-accent',
        in_progress: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
        closed: 'bg-green-500/10 text-green-600 dark:text-green-400',
      }
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[status]}`}>
          {status.replace('_', ' ').toUpperCase()}
        </span>
      )
    },
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: (info) => {
      const priority = info.getValue() as 'low' | 'medium' | 'high'
      const priorityStyles = {
        low: 'bg-gray-500/10 text-gray-600 dark:text-gray-400',
        medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
        high: 'bg-red-500/10 text-red-600 dark:text-red-400',
      }
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${priorityStyles[priority]}`}>
          {priority.toUpperCase()}
        </span>
      )
    },
  },
  {
    accessorKey: 'assignee',
    header: 'Assignee',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'created',
    header: 'Created',
    cell: (info) => info.getValue() as string,
  },
]

export const ServicesTicketsPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// TOTAL_TICKETS"
          value="50"
          subtext="All Tickets"
          trend="up"
          trendValue="+8 from last week"
          icon={Ticket}
        />
        <StatCard
          label="// OPEN"
          value="18"
          subtext="Awaiting Response"
          trend="up"
          trendValue="+5 from yesterday"
          icon={AlertCircle}
        />
        <StatCard
          label="// IN_PROGRESS"
          value="22"
          subtext="Being Handled"
          trend="flat"
          trendValue="No change"
          icon={Clock}
        />
        <StatCard
          label="// CLOSED"
          value="10"
          subtext="Resolved"
          trend="up"
          trendValue="+3 today"
          icon={CheckCircle}
        />
      </div>

      {/* Data Table */}
      <DataTable 
        data={ticketsData} 
        columns={columns} 
        pageSize={10}
      />
    </>
  )
}
