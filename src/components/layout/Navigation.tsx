"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Container from "@/components/layout/Container"
import { cn } from "@/lib/utils"
import { Calendar, Send } from "lucide-react"
import Logo from "@/components/ui/Logo"
import LanguageSwitcher from "@/components/language/LanguageSwitcher"
import LanguageTransition from "@/components/language/LanguageTransition"
import { useTranslation } from "@/components/language/useTranslation"

export default function Navigation() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navItems = useMemo(
    () => [
      { label: t.nav.projects, href: "#cases" },
      { label: t.nav.services, href: "#services" },
      { label: t.nav.about, href: "#about" },
      { label: t.nav.contact, href: "#contact" },
    ],
    [t.nav.projects, t.nav.services, t.nav.about, t.nav.contact]
  )

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -35% 0px",
      }
    )

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[]

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses = useMemo(
    () =>
      cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform border-b",
        scrolled
          ? "bg-black/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.7)] border-white/10"
          : "bg-black/20 backdrop-blur-sm border-transparent"
      ),
    [scrolled]
  )

  const handleBookMeeting = () => {
    const calWindow = window as any
    if (calWindow.Cal) {
      calWindow.Cal("modal", { calLink: "wisuals/15min", config: { layout: "month_view" } })
    }
  }

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={headerClasses}
        role="banner"
      >
        <Container>
          <nav className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link
              href="/"
              aria-label="Wisuals – home"
              className="block w-auto h-auto"
            >
              <Logo />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <LanguageTransition>
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative text-sm transition-colors duration-200 group outline-none px-1 py-0.5",
                        isActive ? "text-white" : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-px bg-blue-400 transition-all duration-300",
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      />
                    </Link>
                  )
                })}
              </div>
            </LanguageTransition>

            {/* DESKTOP CTA + LANGUAGE - Wider buttons */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <div className="h-6 w-px bg-white/10" />
              <LanguageTransition>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleBookMeeting}
                    className="w-[155px] px-4 py-2 text-sm border border-white/10 text-white rounded-lg hover:bg-white/[0.05] hover:border-white/20 transition-all font-medium flex items-center justify-center gap-2"
                  >
                    <Calendar size={16} />
                    <span>{t.nav.bookMeeting}</span>
                  </button>

                  <Link
                    href="#contact"
                    className="w-[155px] px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>{t.nav.startProject}</span>
                  </Link>
                </div>
              </LanguageTransition>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden relative w-7 h-7 text-white outline-none rounded-md"
              aria-label={mobileMenuOpen ? "Luk menu" : "Åbn menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="absolute inset-0 flex flex-col justify-center gap-1.5">
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                  className="w-full h-px bg-white"
                />
                <motion.span
                  animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                  className="w-full h-px bg-white"
                />
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                  className="w-full h-px bg-white"
                />
              </div>
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">
              <Container>
                <LanguageTransition>
                  <div className="py-4 space-y-1">

                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.href
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "block py-3 transition-colors",
                              isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"
                            )}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      )
                    })}

                    {/* CTA + LANGUAGE */}
                    <motion.div
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.05 }}
                      className="pt-4 space-y-2"
                    >
                      <div className="pb-2 flex items-center gap-3">
                        <span className="text-sm text-gray-400">Sprog:</span>
                        <LanguageSwitcher />
                      </div>

                      <button
                        onClick={() => {
                          handleBookMeeting()
                          setMobileMenuOpen(false)
                        }}
                        className="block w-full px-4 py-2 text-center border border-white/10 text-white rounded-lg hover:bg-white/[0.05] hover:border-white/20 font-medium flex items-center justify-center gap-2"
                      >
                        <Calendar size={16} /> {t.nav.bookMeeting}
                      </button>

                      <Link
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full px-4 py-2 text-center bg-white text-black rounded-lg hover:bg-gray-200 font-medium flex items-center justify-center gap-2"
                      >
                        <Send size={16} /> {t.nav.startProject}
                      </Link>
                    </motion.div>
                  </div>
                </LanguageTransition>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}