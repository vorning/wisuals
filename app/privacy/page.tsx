'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/language/useTranslation'
import LanguageTransition from '@/components/language/LanguageTransition'

export default function PrivacyPage() {
  const { t, language } = useTranslation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black relative">
        {/* Global Striped Background */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background:
              "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
          }}
        />
        
        {/* Subtle overlay */}
        <div
          className="fixed inset-0 z-[1] pointer-events-none"
          style={{
            background: "rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Content with Language Transition */}
        <LanguageTransition>
          <div className="relative z-10 pt-32 pb-24">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                {/* Header */}
                <div className="mb-12">
                  <span className="text-sm text-blue-400 font-mono mb-2 block">
                    {t.privacy.tag}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t.privacy.title}
                  </h1>
                  <p className="text-gray-400">
                    {t.privacy.lastUpdated}: {new Date().toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-gray-300">
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.intro.title}</h2>
                    <p className="leading-relaxed">
                      {t.privacy.sections.intro.content}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.controller.title}</h2>
                    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                      <p className="leading-relaxed mb-2">
                        <strong className="text-white">Wisuals</strong><br />
                        Victor Vorning<br />
                        CVR: 45978788<br />
                        Email: vv@wisuals.dk<br />
                        Telefon: +45 61 72 11 23
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.dataCollection.title}</h2>
                    <p className="leading-relaxed mb-4">
                      {t.privacy.sections.dataCollection.intro}
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      {t.privacy.sections.dataCollection.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.dataUsage.title}</h2>
                    <p className="leading-relaxed mb-4">
                      {t.privacy.sections.dataUsage.intro}
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      {t.privacy.sections.dataUsage.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.cookiesSection.title}</h2>
                    <p className="leading-relaxed mb-4">
                      {t.privacy.sections.cookiesSection.intro}
                    </p>
                    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-bold mb-2">{t.privacy.sections.cookiesSection.necessary}</h3>
                      <p className="text-sm mb-4">{t.privacy.sections.cookiesSection.necessaryDesc}</p>
                      
                      <h3 className="text-white font-bold mb-2">{t.privacy.sections.cookiesSection.analytical}</h3>
                      <p className="text-sm">{t.privacy.sections.cookiesSection.analyticalDesc}</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.dataSharing.title}</h2>
                    <p className="leading-relaxed">
                      {t.privacy.sections.dataSharing.content}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.rights.title}</h2>
                    <p className="leading-relaxed mb-4">
                      {t.privacy.sections.rights.intro}
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      {t.privacy.sections.rights.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="leading-relaxed mt-4">
                      {t.privacy.sections.rights.contact}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.security.title}</h2>
                    <p className="leading-relaxed">
                      {t.privacy.sections.security.content}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.changes.title}</h2>
                    <p className="leading-relaxed">
                      {t.privacy.sections.changes.content}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.sections.contactSection.title}</h2>
                    <p className="leading-relaxed mb-4">
                      {t.privacy.sections.contactSection.intro}
                    </p>
                    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                      <p className="leading-relaxed">
                        Email: <a href="mailto:vv@wisuals.dk" className="text-blue-400 hover:text-blue-300">vv@wisuals.dk</a><br />
                        Telefon: <a href="tel:+4561721123" className="text-blue-400 hover:text-blue-300">+45 61 72 11 23</a>
                      </p>
                    </div>
                  </section>
                </div>

                {/* Back button */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t.privacy.backButton}
                  </a>
                </div>
              </motion.div>
            </Container>
          </div>
        </LanguageTransition>
      </main>
      <Footer />
    </>
  )
}