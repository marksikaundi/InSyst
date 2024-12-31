'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Zap } from 'lucide-react'

export default function Header() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10">
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Website Security Audit
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-3xl text-xl sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Protect your digital fortress with our cutting-edge security analysis
          </motion.p>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-1/2">
          <div className="relative h-full">
            {['Shield', 'Lock', 'Zap'].map((icon, index) => (
              <motion.div
                key={icon}
                className="absolute"
                style={{
                  left: `${index * 30 + 10}%`,
                  top: `${index * 15}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index,
                }}
              >
                {icon === 'Shield' && <Shield size={48} />}
                {icon === 'Lock' && <Lock size={48} />}
                {icon === 'Zap' && <Zap size={48} />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
        style={{
          transform: `translateY(${Math.min(scrollY / 2, 64)}px)`,
        }}
      />
    </header>
  )
}

