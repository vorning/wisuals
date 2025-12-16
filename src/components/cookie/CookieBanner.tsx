'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { useTranslation } from '@/components/language/useTranslation'

export default function CookieBanner() {
  const { t } = useTranslation()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
    
    // Initialize analytics here (Google Analytics, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
    
    // Deny analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                <Cookie className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2">
                  {t.cookies.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.cookies.description}{' '}
                  <a 
                    href="/privacy" 
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {t.cookies.privacyPolicy}
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm cursor-pointer"
              >
                {t.cookies.accept}
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 border border-white/10 text-white rounded-lg hover:bg-white/[0.05] hover:border-white/20 transition-all font-medium text-sm cursor-pointer"
              >
                {t.cookies.decline}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}