import React from 'react'
import { MarketingHeader } from '../components/MarketingHeader'
import { ScaffoldBackground } from '../components/ScaffoldBackground'

interface MarketingLayoutProps {
  children?: React.ReactNode
}

export const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <ScaffoldBackground />
      
      <div className="grid grid-cols-12 w-full max-w-[1600px] mx-auto border-l border-r theme-border">
        <MarketingHeader />
        
        {children}
      </div>
    </div>
  )
}