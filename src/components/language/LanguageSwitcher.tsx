'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Language = 'da' | 'en'

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>('da')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang) {
      setCurrentLang(savedLang)
      document.documentElement.lang = savedLang
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }))
  }

  return (
    <div className="relative inline-flex items-center bg-white/[0.03] border border-white/10 rounded-md p-0.5 font-mono w-[72px]">
      {/* Background slider */}
      <motion.div
        className="absolute inset-y-0.5 bg-blue-500/20 border border-blue-500/30 rounded-sm w-[calc(50%-2px)]"
        initial={false}
        animate={{
          left: currentLang === 'da' ? '2px' : 'calc(50% + 2px)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* DA Button */}
      <button
        onClick={() => handleLanguageChange('da')}
        className={`relative z-10 flex-1 py-1 text-[10px] font-medium transition-colors cursor-pointer ${
          currentLang === 'da' ? 'text-white' : 'text-gray-500'
        }`}
        aria-label="Switch to Danish"
      >
        DA
      </button>

      {/* EN Button */}
      <button
        onClick={() => handleLanguageChange('en')}
        className={`relative z-10 flex-1 py-1 text-[10px] font-medium transition-colors cursor-pointer ${
          currentLang === 'en' ? 'text-white' : 'text-gray-500'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}