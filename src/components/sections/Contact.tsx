"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Github,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useTranslation } from "@/components/language/useTranslation";

const EASE_SMOOTH = "easeInOut";

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.methods.email.label,
      value: "vv@wisuals.dk",
      href: "mailto:vv@wisuals.dk",
    },
    {
      icon: Phone,
      label: t.contact.methods.phone.label,
      value: "+45 61 72 11 23",
      href: "tel:+4561721123",
    },
  ];

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/victor-vorning-8b8a64153/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/vorningvictor/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vorning",
    },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleBookMeeting = () => {
    const calWindow = window as any;
    if (calWindow.Cal) {
      calWindow.Cal("modal", {
        calLink: "wisuals/15min",
        config: { layout: "month_view" },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwvprkay", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-cyan-500/[0.02]" />
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
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
            {t.contact.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-300 text-lg">{t.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info + Form */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_SMOOTH }}
              className="space-y-4"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-mono mb-1">
                        {method.label}
                      </div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_SMOOTH }}
            >
              <h3 className="text-sm font-mono text-blue-400 mb-4">
                {t.contact.socialsTag}
              </h3>
              <div className="flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + 0.05 * index }}
                      className="group flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE_SMOOTH }}
              className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {t.contact.form.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {t.contact.form.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-gray-400 mb-2"
                  >
                    {t.contact.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t.contact.form.fields.name.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-gray-400 mb-2"
                  >
                    {t.contact.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t.contact.form.fields.email.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-mono text-gray-400 mb-2"
                  >
                    {t.contact.form.fields.subject.label}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder={t.contact.form.fields.subject.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-gray-400 mb-2"
                  >
                    {t.contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contact.form.fields.message.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.contact.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t.contact.form.submit}
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-100">
                      {t.contact.form.success}
                    </p>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-100">
                      {t.contact.form.error}
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Right Column - Book Meeting Card (Sticky & Compact) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mx-auto">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t.contact.meeting.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {t.contact.meeting.description}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleBookMeeting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium w-full cursor-pointer"
                >
                  <Calendar size={18} />
                  {t.contact.meeting.cta}
                </button>

                {/* Additional info */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-500 font-mono">
                    {t.contact.meeting.duration}
                  </p>
                </div>

                {/* CTA Text */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {t.contact.ctaText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
