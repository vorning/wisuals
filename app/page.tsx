"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Cases from "@/components/sections/Cases";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/cookie/CookieBanner";
import LanguageTransition from "@/components/language/LanguageTransition";
import PageLoader from "@/components/loader/PageLoader";
import ChatbotShowcase from "@/components/sections/ChatbotShowcase";
import Chatbot from "@/components/sections/Chatbot";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      <PageLoader />
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

        {/* Content wrapper with Language Transition */}
        <LanguageTransition>
          <div className="relative z-10">
            <Hero />
            <Services />
            <ChatbotShowcase />
            <Cases />
            <About />
            <Contact />
            <Chatbot />
          </div>
        </LanguageTransition>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
