'use client'

import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { useTranslation } from '@/components/language/useTranslation'

const EASE_SMOOTH = 'easeInOut'

export default function About() {
  const { t } = useTranslation()
  
  const stats = [
    { label: t.about.stats.experience, value: '5+' },
    { label: t.about.stats.projects, value: '24' },
    { label: t.about.stats.technologies, value: '15+' },
  ]

  return (
    <section
      id="about"
      className="relative py-24 bg-black border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blue-500/[0.02]" />
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[150px]" />
      </div>
      
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm text-blue-400 font-mono mb-2 block">
            {t.about.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
              <Image
                src="/Portræt.jpg"
                alt="Victor Vorning - Web Developer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              
              {/* Location badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 border border-white/15 rounded-lg p-4 backdrop-blur">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">
                      {t.about.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats under image */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="text-center p-4 bg-white/[0.02] border border-white/10 rounded-lg hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-2xl font-bold text-blue-400 mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t.about.name}
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>{t.about.bio.paragraph1}</p>
                <p>{t.about.bio.paragraph2}</p>
                <p>{t.about.bio.paragraph3}</p>
              </div>
            </div>

            {/* Focus areas */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-mono text-blue-400 mb-4">
                {t.about.focusTag}
              </h4>
              <div className="space-y-2">
                {t.about.focus.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                {t.about.cta.primary}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/[0.05] hover:border-white/20 transition-colors font-medium text-sm md:text-base"
              >
                {t.about.cta.secondary}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-blue-400 font-mono text-xs mb-2">
                  {item.period}
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
