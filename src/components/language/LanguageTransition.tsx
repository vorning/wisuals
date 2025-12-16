'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from './useTranslation'
import { ReactNode, useEffect, useRef } from 'react'

interface LanguageTransitionProps {
  children: ReactNode
}

export default function LanguageTransition({ children }: LanguageTransitionProps) {
  const { language } = useTranslation()
  const prevLanguage = useRef(language)

  useEffect(() => {
    // Only scroll if language actually changed (not on initial load)
    if (prevLanguage.current !== language && prevLanguage.current !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    prevLanguage.current = language
  }, [language])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}