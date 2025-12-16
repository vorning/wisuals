'use client'

import Container from '@/components/layout/Container'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Linkedin, Instagram, Github, MapPin } from 'lucide-react'
import { useTranslation } from '@/components/language/useTranslation'

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/victor-vorning-8b8a64153/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/vorningvictor/',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/vorning',
  },
]

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const navigation = [
    { label: t.nav.projects, href: '#cases' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Subtle glow to match sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute -top-32 right-1/4 w-[420px] h-[420px] bg-blue-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <Container>
        <div className="relative z-10 py-12 md:py-14">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-4 group"
                aria-label="Wisuals – go to homepage"
              >
                <div className="relative h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-blue-400/60 group-hover:bg-white/[0.04] transition-all">
                  <Image
                    src="/logo-ikon.png"
                    alt="Wisuals logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-sm font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                  Wisuals
                </span>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-4">
                {t.footer.tagline}
              </p>

              <div className="space-y-2 text-sm">
                <a
                  href="mailto:vv@wisuals.dk"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  vv@wisuals.dk
                </a>

                <a
                  href="tel:+4561721123"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +45 61 72 11 23
                </a>

                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {t.footer.location}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm">
                {t.footer.navigation}
              </h3>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm">
                {t.footer.social}
              </h3>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Brand Signature */}
          <div className="py-6 border-y border-white/10 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
              <span className="text-gray-400 text-sm">
                {t.footer.signature}
              </span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span className="text-gray-500 text-sm font-mono">
                CVR: 45978788
              </span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs md:text-sm font-mono">
              © {currentYear} Wisuals. {t.footer.copyright}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              {t.footer.tech}{' '}
              <span className="text-blue-400">Next.js</span> &{' '}
              <span className="text-blue-400">TypeScript</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
