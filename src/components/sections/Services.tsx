'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { Code2, ShoppingCart, Search, Palette, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/components/language/useTranslation';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code2,
      title: t.services.webDev.title,
      badge: t.services.webDev.badge,
      description: t.services.webDev.description,
      features: t.services.webDev.features,
    },
    {
      icon: ShoppingCart,
      title: t.services.ecommerce.title,
      badge: t.services.ecommerce.badge,
      description: t.services.ecommerce.description,
      features: t.services.ecommerce.features,
      highlight: true, // lille visuel boost på e-commerce
    },
    {
      icon: Search,
      title: t.services.seo.title,
      badge: t.services.seo.badge,
      description: t.services.seo.description,
      features: t.services.seo.features,
    },
    {
      icon: Palette,
      title: t.services.design.title,
      badge: t.services.design.badge,
      description: t.services.design.description,
      features: t.services.design.features,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-24 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Soft glow bag sektionen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-cyan-500/[0.02]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <span className="text-sm text-blue-400 font-mono mb-2 block">
            {t.services.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.1rem] font-bold text-white mb-4 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlight = service.highlight;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
              >
                <div
                  className={[
                    'group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 transition-all duration-300 overflow-hidden',
                    isHighlight ? 'shadow-[0_0_60px_rgba(59,130,246,0.25)] border-blue-500/40 bg-blue-950/20' : '',
                  ].join(' ')}
                >
                  {/* Subtle top gradient edge */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                  {/* Icon + badge row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    {service.badge && (
                      <span
                        className={[
                          'text-[11px] font-mono px-2.5 py-1 rounded-full border',
                          isHighlight
                            ? 'bg-blue-500/15 border-blue-400/60 text-blue-200'
                            : 'bg-white/[0.02] border-white/10 text-gray-400',
                        ].join(' ')}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Always included strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 rounded-2xl border border-white/10 bg-white/[0.02] px-5 md:px-6 py-5 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h3 className="text-sm font-mono text-blue-400 mb-1">
              {t.services.alwaysIncluded.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-xl">
              {/* lille opsummering kunne laves her senere hvis du vil – for nu holder vi det simpelt */}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {t.services.alwaysIncluded.items.map((item: string, i: number) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flexibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 p-7 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.services.flexibility.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base max-w-2xl">
            {t.services.flexibility.description}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">
                {t.services.flexibility.wordpress.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {t.services.flexibility.wordpress.description}
              </p>
            </div>
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">
                {t.services.flexibility.custom.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {t.services.flexibility.custom.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            {t.services.cta.question}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm md:text-base"
          >
            {t.services.cta.button}
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
        </motion.div>
      </Container>
    </section>
  );
}
