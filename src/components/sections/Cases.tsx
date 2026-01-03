"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "@/components/language/useTranslation";

export default function Cases() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const proLutionImages = ["/pl1.png", "/pl2.png", "/pl5.png", "/pl3.png"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % proLutionImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + proLutionImages.length) % proLutionImages.length
    );
  };

  return (
    <section
      id="cases"
      className="relative py-24 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/[0.02]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm text-blue-400 font-mono mb-2 block">
            {t.cases.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.cases.title}
          </h2>
          <p className="text-gray-300 text-lg">{t.cases.description}</p>
        </motion.div>

        {/* Featured Project - ProLution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(15,23,42,0.9)] transition-all duration-300">
            {/* Image Carousel */}
            <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
              {proLutionImages.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`ProLution screenshot ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover object-top"
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/30 transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/30 transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {proLutionImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-blue-400 w-6"
                        : "bg-white/30 hover:bg-white/60 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-9">
              {/* Category */}
              <span className="inline-block px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-mono mb-4">
                {t.cases.prolution.category}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t.cases.prolution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.cases.prolution.description}
              </p>

              {/* Results */}
              <ul className="space-y-2 mb-6">
                {t.cases.prolution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
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
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["WordPress", "WooCommerce", "SEO", "Google Ads"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/[0.03] border border-white/10 rounded-lg text-gray-400 font-mono"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Testimonial - NEW! */}
              <div className="relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-6 mb-6">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-500/20" />

                <div className="relative">
                  <p className="text-gray-200 leading-relaxed mb-4 italic">
                    "{t.cases.prolution.testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">
                        {t.cases.prolution.testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {t.cases.prolution.testimonial.author}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {t.cases.prolution.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link */}
              <a
                href="https://prolution.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm md:text-base"
              >
                <span className="font-medium">{t.cases.prolution.cta}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-500/5 to-cyan-500/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <span className="relative text-sm text-gray-500 font-mono z-10">
                  {t.cases.comingSoon}
                </span>
              </div>

              <div className="p-6">
                <span className="inline-block px-2.5 py-0.5 text-xs bg-white/[0.03] border border-white/10 rounded-full text-gray-500 font-mono mb-3">
                  E-commerce
                </span>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  E-commerce Redesign
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Moderne Next.js webshop med Stripe integration og real-time
                  inventory.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "Stripe", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-white/[0.03] border border-white/10 rounded text-gray-500 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-500/5 to-cyan-500/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <span className="relative text-sm text-gray-500 font-mono z-10">
                  {t.cases.comingSoon}
                </span>
              </div>

              <div className="p-6">
                <span className="inline-block px-2.5 py-0.5 text-xs bg-white/[0.03] border border-white/10 rounded-full text-gray-500 font-mono mb-3">
                  Web App
                </span>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  SaaS Dashboard
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Analytics platform med real-time data visualization og bruger
                  management.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["React", "Node.js", "PostgreSQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-white/[0.03] border border-white/10 rounded text-gray-500 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
