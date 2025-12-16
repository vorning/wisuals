'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { useTranslation } from '@/components/language/useTranslation';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiWordpress,
  SiWoocommerce,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiFigma,
  SiVercel,
} from 'react-icons/si';

const EASE_SMOOTH = 'easeInOut';

export default function Hero() {
  const { t } = useTranslation();
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    const handleLoadComplete = () => {
      setLoadComplete(true);
      (window as any).__pageLoadedOnce = true;
    };

    // Lyt efter event fra PageLoader
    window.addEventListener('pageLoadComplete', handleLoadComplete);

    // Tjek om siden allerede har været loadet før (fx efter sprogskift)
    const alreadyLoaded = (window as any).__pageLoadedOnce;

    // Første load → lang fallback (kun backup, PageLoader sender event efter ~2s)
    // Efterfølgende (sprogskift osv.) → kort fallback
    const fallbackDelay = alreadyLoaded ? 200 : 5000;

    const timer = setTimeout(() => {
      setLoadComplete(true);
    }, fallbackDelay);

    return () => {
      window.removeEventListener('pageLoadComplete', handleLoadComplete);
      clearTimeout(timer);
    };
  }, []);

  const techStack = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'WordPress', icon: SiWordpress },
    { name: 'WooCommerce', icon: SiWoocommerce },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PHP', icon: SiPhp },
    { name: 'Figma', icon: SiFigma },
    { name: 'Vercel', icon: SiVercel },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-24 overflow-hidden">
      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Venstre kolonne – tekst, CTA, tech stack */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, ease: EASE_SMOOTH }}
              className="mb-6 md:mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs border border-white/10 rounded-full text-gray-400 font-mono bg-black/40 backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH }}
              className="text-4xl md:text-5xl lg:text-[2.9rem] font-bold tracking-tight mb-4 md:mb-6 leading-tight max-w-xl"
            >
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={
                  loadComplete
                    ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                    : { opacity: 0, x: -20, filter: 'blur(10px)' }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.hero.headline1}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={
                  loadComplete
                    ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                    : { opacity: 0, x: -20, filter: 'blur(10px)' }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.hero.headline2}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE_SMOOTH }}
              className="text-base md:text-lg text-gray-300 max-w-2xl mb-6 md:mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE_SMOOTH }}
              className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium text-sm md:text-base hover:bg-gray-200 transition-colors"
              >
                {t.hero.cta.primary}
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
                href="#chatbot"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white text-sm md:text-base hover:bg-white/[0.05] hover:border-blue-400/60 transition-colors"
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {t.hero.cta.chatbotChip}
                </span>
                <span className="text-sm md:text-base">
                  {t.hero.cta.chatbotLabel}
                </span>
              </a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE_SMOOTH }}
              className="flex flex-wrap gap-2 mb-8 md:mb-10"
            >
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                    animate={
                      loadComplete
                        ? { opacity: 1, scale: 1, rotateX: 0 }
                        : { opacity: 0, scale: 0.5, rotateX: -90 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-2 px-2.5 md:px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg hover:border-blue-500/30 transition-all">
                      <Icon className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-mono">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0, ease: EASE_SMOOTH }}
              className="flex flex-wrap gap-6 md:gap-8 mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/10 font-mono text-xs md:text-sm"
            >
              {[
                { label: t.hero.stats.lighthouse, value: '98+' },
                { label: t.hero.stats.projects, value: '20+' },
                { label: t.hero.stats.experience, value: t.hero.stats.experienceValue },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-baseline gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    loadComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className="text-gray-500">{stat.label}:</span>
                  <span className="text-blue-400 font-bold">{stat.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Højre kolonne – Chat preview / “mini chatbot” */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={loadComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE_SMOOTH }}
            className="relative"
          >
            {/* Glow bag kortet */}
            <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl opacity-60" />

            {/* Selve kortet */}
            <div className="relative bg-black/60 border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_0_50px_rgba(15,23,42,0.9)] backdrop-blur-xl overflow-hidden">
              {/* Topbar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-black shadow-lg">
                    AI
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">
                      {t.hero.chatPreview.assistantName}
                    </div>
                    <div className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {t.hero.chatPreview.assistantTag}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-3 text-[11px] leading-relaxed">
                {/* User 1 */}
                <div className="max-w-[85%] rounded-2xl bg-white/[0.02] border border-white/10 px-3 py-2 text-gray-200">
                  {t.hero.chatPreview.user1}
                </div>

                {/* Bot 1 */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/40 px-3 py-2 text-gray-50 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                    {t.hero.chatPreview.bot1}
                  </div>
                </div>

                {/* User 2 */}
                <div className="max-w-[85%] rounded-2xl bg-white/[0.02] border border-white/10 px-3 py-2 text-gray-200">
                  {t.hero.chatPreview.user2}
                </div>

                {/* Bot 2 */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/40 px-3 py-2 text-gray-50 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                    {t.hero.chatPreview.bot2}
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  {t.hero.chatPreview.footerNote}
                </div>
                <a
                  href="#chatbot"
                  className="text-[11px] text-blue-300 hover:text-blue-200 font-medium"
                >
                  {t.hero.chatPreview.footerLink}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
