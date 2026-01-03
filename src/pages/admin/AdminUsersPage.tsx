import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../components/DataTable'
import { StatCard } from '../../components/StatCard'
import { Users, UserCheck, UserX, Clock } from 'lucide-react'

// Dummy data
const usersData = Array.from({ length: 50 }, (_, i) => ({
  id: `USR-${String(i + 1).padStart(4, '0')}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@axon.sys`,
  role: ['Admin', 'Manager', 'Operator', 'Viewer'][Math.floor(Math.random() * 4)],
  status: ['active', 'inactive'][Math.floor(Math.random() * 2)] as 'active' | 'inactive',
  lastLogin: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
}))

const columns: ColumnDef<typeof usersData[number]>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (info) => <span className="font-mono text-xs">{info.getValue() as string}</span>,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: (info) => {
      const role = info.getValue() as string
      const roleStyles = {
        Admin: 'bg-red-500/10 text-red-600 dark:text-red-400',
        Manager: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
        Operator: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
        Viewer: 'bg-gray-500/10 text-gray-600 dark:text-gray-400',
      }
      const style = roleStyles[role as keyof typeof roleStyles] || roleStyles.Viewer
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${style}`}>
          {role.toUpperCase()}
        </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => {
      const status = info.getValue() as 'active' | 'inactive'
      const statusStyles = {
        active: 'bg-green-500/10 text-green-600 dark:text-green-400',
        inactive: 'bg-gray-500/10 text-gray-600 dark:text-gray-400',
      }
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[status]}`}>
          {status.toUpperCase()}
        </span>
      )
    },
  },
  {
    accessorKey: 'lastLogin',
    header: 'Last Login',
    cell: (info) => info.getValue() as string,
  },
]

export const AdminUsersPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// TOTAL_USERS"
          value="50"
          subtext="All Users"
          trend="up"
          trendValue="+5 from last month"
          icon={Users}
        />
        <StatCard
          label="// ACTIVE"
          value="42"
          subtext="Currently Active"
          trend="up"
          trendValue="+3 this week"
          icon={UserCheck}
        />
        <StatCard
          label="// INACTIVE"
          value="8"
          subtext="Suspended Accounts"
          trend="down"
          trendValue="-2 from yesterday"
          icon={UserX}
        />
        <StatCard
          label="// PENDING"
          value="0"
          subtext="Awaiting Approval"
          trend="flat"
          trendValue="No pending users"
          icon={Clock}
        />
      </div>

      {/* Data Table */}
      <DataTable 
        data={usersData} 
        columns={columns} 
        pageSize={10}
      />
    </>
  )
}
