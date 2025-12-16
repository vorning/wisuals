'use client';

import { useState, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import {
  MessageCircle,
  Bot,
  Sparkles,
  MousePointerClick,
  Globe2,
  ShieldCheck,
} from 'lucide-react';
import { useTranslation } from '@/components/language/useTranslation';

type ScenarioKey = 'faq' | 'booking' | 'lead';

const EASE_SMOOTH = 'easeInOut';

export default function ChatbotShowcase() {
  const { t } = useTranslation();
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('faq');

  // Byg scenarierne ud fra translations
  const scenarios: Record<
    ScenarioKey,
    {
      label: string;
      description: string;
      messages: { from: 'user' | 'bot'; text: string }[];
    }
  > = {
    faq: {
      label: t.chatbot.scenarios.faq.label,
      description: t.chatbot.scenarios.faq.description,
      messages: [
        { from: 'user', text: t.chatbot.scenarios.faq.messages.user1 },
        { from: 'bot', text: t.chatbot.scenarios.faq.messages.bot1 },
        { from: 'user', text: t.chatbot.scenarios.faq.messages.user2 },
        { from: 'bot', text: t.chatbot.scenarios.faq.messages.bot2 },
      ],
    },
    booking: {
      label: t.chatbot.scenarios.booking.label,
      description: t.chatbot.scenarios.booking.description,
      messages: [
        { from: 'user', text: t.chatbot.scenarios.booking.messages.user1 },
        { from: 'bot', text: t.chatbot.scenarios.booking.messages.bot1 },
        { from: 'user', text: t.chatbot.scenarios.booking.messages.user2 },
        { from: 'bot', text: t.chatbot.scenarios.booking.messages.bot2 },
      ],
    },
    lead: {
      label: t.chatbot.scenarios.lead.label,
      description: t.chatbot.scenarios.lead.description,
      messages: [
        { from: 'user', text: t.chatbot.scenarios.lead.messages.user1 },
        { from: 'bot', text: t.chatbot.scenarios.lead.messages.bot1 },
        { from: 'user', text: t.chatbot.scenarios.lead.messages.user2 },
        { from: 'bot', text: t.chatbot.scenarios.lead.messages.bot2 },
      ],
    },
  };

  const active = scenarios[activeScenario];

  return (
    <section
      id="chatbot"
      className="relative py-24 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/[0.02]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
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
            {t.chatbot.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.chatbot.title}
          </h2>
          <p className="text-gray-300 text-lg">
            {t.chatbot.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10">
          {/* Chat demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
            className="h-full"
          >
            <div className="group relative h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-4 md:mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {t.chatbot.ui.headerTitle}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {t.chatbot.ui.headerStatus}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[11px] text-gray-500 font-mono">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span>{t.chatbot.ui.headerBadge}</span>
                </div>
              </div>

              {/* Scenario tabs */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                {(
                  [
                    { key: 'faq', icon: MessageCircle },
                    { key: 'booking', icon: MousePointerClick },
                    { key: 'lead', icon: Globe2 },
                  ] as { key: ScenarioKey; icon: ComponentType<any> }[]
                ).map(({ key, icon: Icon }) => {
                  const selected = key === activeScenario;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveScenario(key)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                        selected
                          ? 'bg-blue-500/20 border-blue-500/50 text-blue-200'
                          : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-blue-500/40 hover:text-blue-100'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{scenarios[key].label}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-gray-500 mb-4">{active.description}</p>

              {/* Chat window */}
              <div className="relative bg-black/40 border border-white/5 rounded-xl p-4 md:p-5 h-[260px] md:h-[300px] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40" />
                <div className="relative h-full overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                  {active.messages.map((msg, index) => {
                    const isUser = msg.from === 'user';
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.25, delay: index * 0.05 }}
                        className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed border ${
                            isUser
                              ? 'bg-blue-500/20 border-blue-500/40 text-blue-50 rounded-br-sm'
                              : 'bg-white/[0.03] border-white/10 text-gray-100 rounded-bl-sm'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Input (demo-only) */}
              <div className="mt-4 flex items-center gap-2 border border-white/10 rounded-xl bg-white/[0.02] px-3 py-2.5 text-xs text-gray-500">
                <MessageCircle className="w-4 h-4 text-gray-500" />
                <span className="truncate">
                  {t.chatbot.ui.demoNote}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Features / salgstekst */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_SMOOTH }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t.chatbot.ui.rightTitle}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.chatbot.ui.rightIntro}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">
                    {t.chatbot.ui.features.design.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.chatbot.ui.features.design.description}
                </p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MousePointerClick className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">
                    {t.chatbot.ui.features.conversions.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.chatbot.ui.features.conversions.description}
                </p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">
                    {t.chatbot.ui.features.languages.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.chatbot.ui.features.languages.description}
                </p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">
                    {t.chatbot.ui.features.privacy.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.chatbot.ui.features.privacy.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.chatbot.ui.bottomText}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
