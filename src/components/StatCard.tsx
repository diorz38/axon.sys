import React from 'react'
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'

export interface StatCardProps {
  label: string
  value: string
  subtext: string
  trend: 'up' | 'down' | 'flat'
  trendValue: string
  icon: React.ElementType
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, trend, trendValue, icon: Icon }) => {
  const trendColors = {
    up: 'text-green-500 dark:text-green-400',
    down: 'text-red-500 dark:text-red-400',
    flat: 'theme-text-muted'
  }

  const TrendIcon = trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : Minus

  return (
    <div className="stat-card theme-surface border theme-border p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-axon-accent">{label}</span>
        <Icon className="w-5 h-5 theme-text-muted" />
      </div>
      <div className="text-4xl font-bold mb-1">{value}</div>
      <div className="text-xs theme-text-muted uppercase tracking-wider">{subtext}</div>
      <div className={`mt-4 flex items-center gap-2 ${trendColors[trend]} text-xs`}>
        <TrendIcon className="w-3 h-3" />
        {trendValue}
      </div>
    </div>
  )
}
