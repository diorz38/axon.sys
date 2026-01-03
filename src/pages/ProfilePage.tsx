import React from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Shield, ArrowLeft } from 'lucide-react'

export const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/dashboard" 
          className="inline-flex items-center gap-2 text-sm theme-text-muted hover:theme-text mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile</h1>
          <p className="theme-text-muted">Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="theme-bg border theme-border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded bg-axon-accent/20 flex items-center justify-center font-bold text-axon-accent text-2xl">
              OP
            </div>
            <div>
              <h2 className="text-xl font-semibold">Operator</h2>
              <p className="theme-text-muted text-sm">ADMIN_LVL_3</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 theme-text-muted" />
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm theme-text-muted">operator@axon.sys</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 theme-text-muted" />
              <div>
                <div className="text-sm font-medium">Role</div>
                <div className="text-sm theme-text-muted">Administrator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="theme-bg border theme-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="px-4 py-3 text-left border theme-border rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="font-medium">Change Password</div>
              <div className="text-sm theme-text-muted">Update your security credentials</div>
            </button>
            <button className="px-4 py-3 text-left border theme-border rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="font-medium">Notification Settings</div>
              <div className="text-sm theme-text-muted">Manage email and push notifications</div>
            </button>
            <button className="px-4 py-3 text-left border theme-border rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="font-medium">API Keys</div>
              <div className="text-sm theme-text-muted">Manage your API access tokens</div>
            </button>
            <button className="px-4 py-3 text-left border theme-border rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="font-medium">Activity Log</div>
              <div className="text-sm theme-text-muted">View recent account activity</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}