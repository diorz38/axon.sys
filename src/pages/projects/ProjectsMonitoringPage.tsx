import React from 'react'
import {
  Server,
  Zap,
  Activity,
  Users,
  Plus,
  RefreshCw,
  Shield,
  FileText
} from 'lucide-react'
import { StatCard } from '../../components/StatCard'

interface LogEntryProps {
  status: 'success' | 'pending' | 'info'
  title: string
  description: string
  time: string
}

const LogEntry: React.FC<LogEntryProps> = ({ status, title, description, time }) => {
  const statusConfig = {
    success: {
      color: 'bg-green-500 dark:bg-green-400',
      badge: 'bg-green-500/10 text-green-600 dark:text-green-400',
      text: 'SUCCESS'
    },
    pending: {
      color: 'bg-axon-accent',
      badge: 'bg-axon-accent/10 text-axon-accent',
      text: 'PENDING'
    },
    info: {
      color: 'bg-blue-500 dark:bg-blue-400',
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      text: 'INFO'
    }
  }

  return (
    <div className="p-3 md:p-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
      <div className="flex items-start gap-4">
        <div className={`w-2 h-2 mt-2 rounded-full ${statusConfig[status].color}`}></div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{title}</span>
            <span className={`px-2 py-0.5 ${statusConfig[status].badge} text-[0.65rem] rounded`}>
              {statusConfig[status].text}
            </span>
          </div>
          <p className="text-xs theme-text-muted mt-1">{description}</p>
          <span className="text-[0.65rem] theme-text-muted mt-2 block">{time}</span>
        </div>
      </div>
    </div>
  )
}

interface QuickActionProps {
  icon: React.ElementType
  title: string
  subtitle: string
  accent?: boolean
}

const QuickAction: React.FC<QuickActionProps> = ({ icon: Icon, title, subtitle, accent = false }) => {
  return (
    <button className="w-full p-3 md:p-4 border border-white/10 text-left hover:bg-black/5 dark:hover:bg-white/5 hover:border-axon-accent/50 transition-all group">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${accent ? 'bg-axon-accent/10 group-hover:bg-axon-accent/20' : 'bg-black/5 dark:bg-white/5'} flex items-center justify-center transition-colors`}>
          <Icon className={`w-5 h-5 ${accent ? 'text-axon-accent' : 'theme-text'}`} />
        </div>
        <div>
          <div className="font-medium text-sm">{title}</div>
          <div className="text-[0.65rem] theme-text-muted">{subtitle}</div>
        </div>
      </div>
    </button>
  )
}

export const ProjectsMonitoringPage: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          label="// NODES"
          value="12,847"
          subtext="Active Connections"
          trend="up"
          trendValue="+12.5% from last week"
          icon={Server}
        />
        <StatCard
          label="// LATENCY"
          value="0.4s"
          subtext="Avg Response Time"
          trend="up"
          trendValue="-8.2% improved"
          icon={Zap}
        />
        <StatCard
          label="// EFFICIENCY"
          value="94.2%"
          subtext="System Efficiency"
          trend="up"
          trendValue="+3.1% from baseline"
          icon={Activity}
        />
        <StatCard
          label="// TEAMS"
          value="248"
          subtext="Active Operators"
          trend="flat"
          trendValue="No change"
          icon={Users}
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Activity Feed */}
        <div className="lg:col-span-2 theme-surface border border-white/10">
          <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">System Activity</h2>
              <p className="text-xs theme-text-muted mt-1">// REAL_TIME_LOG_STREAM</p>
            </div>
            <button className="px-4 py-2 border border-white/10 text-xs uppercase hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              View All
            </button>
          </div>
          <div className="divide-y divide-white/10">
            <LogEntry
              status="success"
              title="Node cluster expanded"
              description="Added 24 new nodes to SECTOR_ALPHA infrastructure grid."
              time="2 minutes ago"
            />
            <LogEntry
              status="pending"
              title="Maintenance scheduled"
              description="Routine diagnostics planned for GRID_07 at 03:00 UTC."
              time="15 minutes ago"
            />
            <LogEntry
              status="info"
              title="New operator onboarded"
              description="User JKL_0042 granted ADMIN_LVL_2 access credentials."
              time="1 hour ago"
            />
            <LogEntry
              status="success"
              title="Security scan complete"
              description="Full perimeter scan completed. No anomalies detected."
              time="2 hours ago"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="theme-surface border border-white/10">
          <div className="p-4 md:p-6 border-b border-white/10">
            <h2 className="font-bold text-lg">Quick Actions</h2>
            <p className="text-xs theme-text-muted mt-1">// COMMAND_SHORTCUTS</p>
          </div>
          <div className="p-3 md:p-4 space-y-3">
            <QuickAction
              icon={Plus}
              title="Deploy Module"
              subtitle="INIT_NEW_INSTANCE"
              accent={true}
            />
            <QuickAction
              icon={RefreshCw}
              title="Sync All Nodes"
              subtitle="BROADCAST_UPDATE"
              accent={true}
            />
            <QuickAction
              icon={FileText}
              title="Generate Report"
              subtitle="EXPORT_ANALYTICS"
              accent={true}
            />
            <QuickAction
              icon={Shield}
              title="Security Audit"
              subtitle="RUN_PERIMETER_SCAN"
              accent={true}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 theme-text-muted text-xs">
        <div>© 2024 AXON SYSTEMIC LTD.</div>
        <div>ADMIN_CONSOLE // TECTONIC_V4</div>
      </footer>
    </>
  )
}
