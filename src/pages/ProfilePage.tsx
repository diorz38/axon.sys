import React from 'react'
import { Mail, Shield, Key, Bell, Terminal, Activity } from 'lucide-react'

export const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animation-fade-in">
      <h1 className="text-2xl font-black uppercase tracking-tighter mb-2">User Profile</h1>
      <p className="theme-text-muted mb-8 text-xs font-mono">// IDENTITY_MATRIX_V4</p>

      {/* Profile Card */}
      <div className="theme-surface border theme-border p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start gap-8">

          {/* Avatar Box */}
          <div className="w-24 h-24 bg-axon-accent/10 border border-axon-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="font-black text-axon-accent text-3xl">OP</span>
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold uppercase tracking-tight">Operator</h2>
              <div className="px-2 py-1 bg-axon-accent text-black text-[0.65rem] font-bold uppercase tracking-wider">
                ACTIVE
              </div>
            </div>
            <p className="text-xs theme-text-muted font-mono mb-6 uppercase tracking-wider">
              ID: AXON_ADMIN_01 // LVL_3_ACCESS
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t theme-border pt-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 theme-text-muted" />
                </div>
                <div>
                  <div className="text-[0.65rem] theme-text-muted uppercase font-mono mb-1">CONTACT_EMAIL</div>
                  <div className="text-sm font-medium">operator@axon.sys</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <Shield className="w-4 h-4 theme-text-muted" />
                </div>
                <div>
                  <div className="text-[0.65rem] theme-text-muted uppercase font-mono mb-1">SECURITY_CLEARANCE</div>
                  <div className="text-sm font-medium">Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="theme-surface border theme-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-5 h-5 text-axon-accent" />
          <div>
            <h3 className="text-lg font-bold uppercase tracking-tight">System Actions</h3>
            <p className="text-[0.65rem] theme-text-muted uppercase font-mono">
              // EXECUTE_USER_COMMANDS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 border theme-border hover:border-axon-accent/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-left group">
            <div className="flex items-center justify-between mb-2">
              <Key className="w-5 h-5 theme-text-muted group-hover:text-axon-accent transition-colors" />
              <div className="w-2 h-2 bg-theme-border group-hover:bg-axon-accent transition-colors" />
            </div>
            <div className="font-bold text-sm uppercase tracking-wider mb-1">Change Credentials</div>
            <div className="text-xs theme-text-muted group-hover:text-theme-text transition-colors">
              Update password & 2FA
            </div>
          </button>

          <button className="p-4 border theme-border hover:border-axon-accent/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-left group">
            <div className="flex items-center justify-between mb-2">
              <Bell className="w-5 h-5 theme-text-muted group-hover:text-axon-accent transition-colors" />
              <div className="w-2 h-2 bg-theme-border group-hover:bg-axon-accent transition-colors" />
            </div>
            <div className="font-bold text-sm uppercase tracking-wider mb-1">Notifications</div>
            <div className="text-xs theme-text-muted group-hover:text-theme-text transition-colors">
              Configure alert streams
            </div>
          </button>

          <button className="p-4 border theme-border hover:border-axon-accent/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-left group">
            <div className="flex items-center justify-between mb-2">
              <Terminal className="w-5 h-5 theme-text-muted group-hover:text-axon-accent transition-colors" />
              <div className="w-2 h-2 bg-theme-border group-hover:bg-axon-accent transition-colors" />
            </div>
            <div className="font-bold text-sm uppercase tracking-wider mb-1">API Tokens</div>
            <div className="text-xs theme-text-muted group-hover:text-theme-text transition-colors">
              Manage access keys
            </div>
          </button>

          <button className="p-4 border theme-border hover:border-axon-accent/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-left group">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 theme-text-muted group-hover:text-axon-accent transition-colors" />
              <div className="w-2 h-2 bg-theme-border group-hover:bg-axon-accent transition-colors" />
            </div>
            <div className="font-bold text-sm uppercase tracking-wider mb-1">Audit Log</div>
            <div className="text-xs theme-text-muted group-hover:text-theme-text transition-colors">
              View command history
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t theme-border">
        <div className="text-[0.65rem] theme-text-muted font-mono uppercase">
          USER_ID: 8492-AX // ENCRYPTED
        </div>
        <div className="px-3 py-1 bg-transparent border border-theme-border text-[0.65rem] theme-text-muted font-mono">
          SESSION: SECURE
        </div>
      </div>
    </div>
  )
}