import React, { useEffect, useRef } from 'react'

export const ScaffoldBackground: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100
        bgRef.current.style.maskImage = `radial-gradient(circle at ${x}% ${y}%, black, transparent)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={bgRef}
      className="scaffold-bg fixed inset-0 -z-10"
      style={{ maskImage: 'radial-gradient(circle at 50% 50%, black, transparent)' }}
    />
  )
}