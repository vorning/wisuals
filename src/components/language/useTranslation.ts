'use client'

import { useState, useEffect } from 'react'
import { translations, type Language } from './translations'

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('da')

  useEffect(() => {
    // Load saved language
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'da' || savedLang === 'en')) {
      setLanguage(savedLang)
    }

    // Listen for language changes
    const handleLanguageChange = (e: CustomEvent<{ language: Language }>) => {
      setLanguage(e.detail.language)
    }

    window.addEventListener('languageChange', handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener)
    }
  }, [])

  return {
    t: translations[language],
    language,
    setLanguage
  }
}