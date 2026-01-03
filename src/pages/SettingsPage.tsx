import React from 'react'
import {
    Palette,
    Layout,
    Sun,
    Moon,
    Monitor,
    Check
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import type { ColorTheme, AppWidth } from '../contexts/ThemeContext'

interface SectionProps {
    title: string
    description: string
    icon: React.ElementType
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, description, icon: Icon, children }) => {
    return (
        <div className="theme-surface border theme-border p-6 mb-6">
            <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-axon-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-axon-accent" />
                </div>
                <div>
                    <h2 className="text-lg font-bold uppercase tracking-tight">{title}</h2>
                    <p className="text-xs theme-text-muted mt-1 uppercase tracking-wider">{description}</p>
                </div>
            </div>
            <div className="pl-0 md:pl-14">
                {children}
            </div>
        </div>
    )
}

export const SettingsPage: React.FC = () => {
    console.log('Rendering SettingsPage')
    const { theme, toggleTheme, colorTheme, setColorTheme, appWidth, setAppWidth } = useTheme()

    const colors: { id: ColorTheme; label: string; color: string }[] = [
        { id: 'orange', label: 'Tectonic Orange', color: '#ff4d00' },
        { id: 'blue', label: 'Ocean Blue', color: '#3b82f6' },
        { id: 'indigo', label: 'Deep Indigo', color: '#6366f1' },
    ]

    const layouts: { id: AppWidth; label: string; description: string }[] = [
        { id: 'full', label: 'Standard', description: 'Fluid width container' },
        { id: 'narrow', label: 'Boxed', description: 'Centralized 80% view' },
    ]

    return (
        <div className="max-w-4xl mx-auto animation-fade-in">
            <h1 className="text-2xl font-black uppercase tracking-tighter mb-2">Display Configuration</h1>
            <p className="theme-text-muted mb-8 text-xs font-mono">// SYSTEM_PREFERENCES_CONFIG</p>

            {/* Appearance */}
            <Section
                title="Interface Mode"
                description="// TOGGLE_LIGHT_DARK_THEME"
                icon={theme === 'dark' ? Moon : Sun}
            >
                <div className="flex gap-4">
                    <button
                        onClick={() => theme !== 'light' && toggleTheme()}
                        className={`flex-1 p-6 border text-center transition-all group ${theme === 'light'
                            ? 'border-axon-accent bg-axon-accent/5'
                            : 'theme-border hover:bg-black/5 dark:hover:bg-white/5 hover:border-axon-accent/50'
                            }`}
                    >
                        <Sun className={`w-8 h-8 mx-auto mb-4 ${theme === 'light' ? 'text-axon-accent' : 'theme-text-muted group-hover:text-axon-accent'}`} />
                        <div className="font-bold text-sm uppercase tracking-wider">Light Mode</div>
                    </button>

                    <button
                        onClick={() => theme !== 'dark' && toggleTheme()}
                        className={`flex-1 p-6 border text-center transition-all group ${theme === 'dark'
                            ? 'border-axon-accent bg-axon-accent/5'
                            : 'theme-border hover:bg-black/5 dark:hover:bg-white/5 hover:border-axon-accent/50'
                            }`}
                    >
                        <Moon className={`w-8 h-8 mx-auto mb-4 ${theme === 'dark' ? 'text-axon-accent' : 'theme-text-muted group-hover:text-axon-accent'}`} />
                        <div className="font-bold text-sm uppercase tracking-wider">Dark Mode</div>
                    </button>
                </div>
            </Section>

            {/* Accent Color */}
            <Section
                title="Chromatic Variance"
                description="// SELECT_PRIMARY_ACCENT"
                icon={Palette}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {colors.map((color) => (
                        <button
                            key={color.id}
                            onClick={() => setColorTheme(color.id)}
                            className={`p-4 border flex items-center gap-4 transition-all group ${colorTheme === color.id
                                ? 'border-axon-accent bg-axon-accent/5'
                                : 'theme-border hover:bg-black/5 dark:hover:bg-white/5 hover:border-axon-accent/50'
                                }`}
                        >
                            <div
                                className="w-8 h-8 flex items-center justify-center text-white"
                                style={{ backgroundColor: color.color }}
                            >
                                {colorTheme === color.id && <Check className="w-4 h-4" />}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-sm uppercase">{color.label}</div>
                                <div className="text-[0.65rem] theme-text-muted uppercase font-mono tracking-wider">{color.id}_HEX</div>
                            </div>
                        </button>
                    ))}
                </div>
            </Section>

            {/* App Layout */}
            <Section
                title="Viewport Structure"
                description="// DEFINE_CONTAINER_WIDTH"
                icon={Layout}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {layouts.map((layout) => (
                        <button
                            key={layout.id}
                            onClick={() => setAppWidth(layout.id)}
                            className={`p-4 border text-left transition-all group ${appWidth === layout.id
                                ? 'border-axon-accent bg-axon-accent/5'
                                : 'theme-border hover:bg-black/5 dark:hover:bg-white/5 hover:border-axon-accent/50'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <Monitor className={`w-6 h-6 ${appWidth === layout.id ? 'text-axon-accent' : 'theme-text-muted group-hover:text-axon-accent'}`} />
                                {appWidth === layout.id && <Check className="w-4 h-4 text-axon-accent" />}
                            </div>
                            <div className="font-bold text-sm uppercase tracking-wider">{layout.label}</div>
                            <div className="text-xs theme-text-muted font-mono mt-1">{layout.description}</div>
                        </button>
                    ))}
                </div>
            </Section>

            <div className="flex justify-between items-center mt-12 pt-6 border-t theme-border">
                <div className="text-[0.65rem] theme-text-muted font-mono uppercase">
                    SYS_CONFIG_V4.0 // USER_PREF_SAVED
                </div>
                <div className="px-3 py-1 bg-axon-accent/10 border border-axon-accent/30 text-[0.65rem] text-axon-accent font-mono">
                    STATUS: SYNCED
                </div>
            </div>
        </div>
    )
}
