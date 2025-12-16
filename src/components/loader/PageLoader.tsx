'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../ui/Logo'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden'

    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ''
      
      // Dispatch event when loading is complete
      window.dispatchEvent(new CustomEvent('pageLoadComplete'))
      
      // Mark as loaded
      ;(window as any).__pageLoadedOnce = true
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
            }}
          />
          
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
            }}
          />

          {/* Loader content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-12">
            {/* Logo - fixed height container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center h-24"
            >
              <Logo />
            </motion.div>

            {/* Animated squares */}
            <div className="loader">
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
            </div>
          </div>

          <style jsx>{`
            @keyframes square-animation {
              0% { left: 0; top: 0; }
              10.5% { left: 0; top: 0; }
              12.5% { left: 32px; top: 0; }
              23% { left: 32px; top: 0; }
              25% { left: 64px; top: 0; }
              35.5% { left: 64px; top: 0; }
              37.5% { left: 64px; top: 32px; }
              48% { left: 64px; top: 32px; }
              50% { left: 32px; top: 32px; }
              60.5% { left: 32px; top: 32px; }
              62.5% { left: 32px; top: 64px; }
              73% { left: 32px; top: 64px; }
              75% { left: 0; top: 64px; }
              85.5% { left: 0; top: 64px; }
              87.5% { left: 0; top: 32px; }
              98% { left: 0; top: 32px; }
              100% { left: 0; top: 0; }
            }

            .loader {
              position: relative;
              width: 96px;
              height: 96px;
              transform: rotate(45deg);
            }

            .loader-square {
              position: absolute;
              top: 0;
              left: 0;
              width: 28px;
              height: 28px;
              margin: 2px;
              border-radius: 0px;
              background: linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%);
              animation: square-animation 10s ease-in-out infinite both;
            }

            .loader-square:nth-of-type(1) { animation-delay: -1.4285714286s; }
            .loader-square:nth-of-type(2) { animation-delay: -2.8571428571s; }
            .loader-square:nth-of-type(3) { animation-delay: -4.2857142857s; }
            .loader-square:nth-of-type(4) { animation-delay: -5.7142857143s; }
            .loader-square:nth-of-type(5) { animation-delay: -7.1428571429s; }
            .loader-square:nth-of-type(6) { animation-delay: -8.5714285714s; }
            .loader-square:nth-of-type(7) { animation-delay: -10s; }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}