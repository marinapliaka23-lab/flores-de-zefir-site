import { useLanguage } from "../context/LanguageContext";
import { alumniContent } from "../i18n/detailedContent";
import { motion } from "framer-motion";
import {
  Crown,
  Handshake,
  BookLock,
  Share2,
  TrendingUp,
  Instagram,
  Star,
  ArrowRight,
} from "lucide-react";

const benefitIcons = [Handshake, BookLock, Share2, TrendingUp];

export default function AlumniSection() {
  const { lang } = useLanguage();
  const t = alumniContent[lang];

  return (
    <section id="alumni" data-testid="alumni-section" className="relative">
      {/* Part 1: Elite Community */}
      <div
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FAF9F6 0%, #F5EDE4 30%, #F5EDE4 70%, #FAF9F6 100%)",
        }}
      >
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

        {/* Decorative gold sparkles */}
        <div className="absolute top-12 left-[10%] text-[#C9A96E]/20">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-20 right-[15%] text-[#C9A96E]/15">
          <Star className="w-4 h-4" />
        </div>
        <div className="absolute bottom-16 left-[25%] text-[#C9A96E]/10">
          <Star className="w-5 h-5" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-6">
              <Crown className="w-4 h-4 text-[#C9A96E]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C9A96E] font-body">
                {t.overline}
              </span>
            </div>
            <h2
              data-testid="alumni-title"
              className="font-heading text-4xl sm:text-5xl tracking-tight font-light text-[#4A3B32] mb-4"
            >
              {t.title}
            </h2>
            <p className="text-base lg:text-lg text-[#8A7D75] font-body font-light max-w-2xl mx-auto mb-2">
              {t.subtitle}
            </p>
            <p className="text-sm text-[#8A7D75] font-body font-light max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            {t.benefits.map((benefit, idx) => {
              const Icon = benefitIcons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  data-testid={`alumni-benefit-${idx}`}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-l-4 border-l-[#C9A96E]/40 border border-[#E8E2DD]/40 shadow-[0_4px_24px_rgba(74,59,50,0.03)] hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-[#4A3B32] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#8A7D75] font-body font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-base text-[#4A3B32] font-body font-light italic max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.closing}
            </p>
            <a
              href="https://www.instagram.com/flores.de.zefir/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-first-master"
              className="inline-flex items-center gap-2 rounded-full bg-[#4A3B32] text-white hover:bg-[#3D2E24] transition-all px-10 py-4 font-medium font-body text-sm tracking-wide shadow-lg"
            >
              <Crown className="w-4 h-4 text-[#C9A96E]" />
              {t.masterCta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Part 2: Enrollment Steps */}
      <div className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              data-testid="enroll-title"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-[#4A3B32] text-center mb-12"
            >
              {t.enrollTitle}
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {t.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  data-testid={`enroll-step-${step.num}`}
                  className="text-center relative"
                >
                  {idx < t.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[60%] right-[-40%]">
                      <ArrowRight className="w-4 h-4 text-[#E8E2DD] mx-auto" />
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="font-heading text-2xl font-light text-[#C9A96E]">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#4A3B32] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#8A7D75] font-body font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/flores.de.zefir/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-enroll-final"
                className="inline-flex items-center gap-2 rounded-full bg-[#C1D5C0] text-[#2C2421] hover:bg-[#A9BCA8] transition-all px-10 py-4 font-medium font-body text-sm tracking-wide"
              >
                <Instagram className="w-4 h-4" />
                {t.enrollCta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
