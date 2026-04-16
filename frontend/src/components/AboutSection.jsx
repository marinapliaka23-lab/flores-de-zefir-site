import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Award, Clock, GraduationCap } from "lucide-react";

const FOUNDER_IMG =
  "https://customer-assets.emergentagent.com/job_airy-blooms/artifacts/o69v6tpr_%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D1%96%20%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D0%BE%D0%B2%D0%B0%20%D1%82%D0%B0%20%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96%D0%B2%21%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%20%2812%29.png";

const credentialIcons = [Award, Clock, GraduationCap];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(74,59,50,0.06)]">
              <img
                src={FOUNDER_IMG}
                alt="Iryna — Founder"
                className="w-full h-auto object-cover"
                data-testid="founder-image"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#C1D5C0]/15 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#F8E1E7]/20 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              data-testid="about-title"
              className="font-heading text-4xl sm:text-5xl tracking-tight font-light text-[#4A3B32] mb-6"
            >
              {t.about.title}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-[#8A7D75] font-body font-light mb-8">
              {t.about.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              {t.about.credentials.map((cred, idx) => {
                const Icon = credentialIcons[idx];
                return (
                  <div
                    key={idx}
                    data-testid={`credential-${idx}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F6] border border-[#E8E2DD]/60 text-sm text-[#4A3B32] font-body"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#C1D5C0]" />
                    {cred}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
