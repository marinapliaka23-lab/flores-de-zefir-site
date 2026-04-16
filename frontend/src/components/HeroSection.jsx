import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Instagram } from "lucide-react";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_airy-blooms/artifacts/gqzn07tf_%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%2C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20%281%29.png";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm uppercase tracking-[0.2em] font-medium text-[#8A7D75] mb-6 font-body">
              Flores de Zefir
            </p>
            <h1
              data-testid="hero-headline"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight font-light text-[#4A3B32] leading-[1.1] mb-6"
            >
              {t.hero.headline}
            </h1>
            <p
              data-testid="hero-subheadline"
              className="text-base lg:text-lg leading-relaxed font-light text-[#8A7D75] mb-10 max-w-xl font-body"
            >
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                data-testid="cta-join-course"
                onClick={() => scrollTo("#course")}
                className="rounded-full bg-[#C1D5C0] text-[#2C2421] hover:bg-[#A9BCA8] transition-all px-8 py-4 font-medium font-body text-sm"
              >
                {t.hero.joinCourse}
              </button>
              <button
                data-testid="cta-order-bouquet"
                onClick={() => scrollTo("#catalog")}
                className="rounded-full bg-[#F8E1E7] text-[#4A3B32] hover:bg-[#E8C9D0] transition-all px-8 py-4 font-medium font-body text-sm"
              >
                {t.hero.orderBouquet}
              </button>
              <a
                href="https://www.instagram.com/flores.de.zefir/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-instagram"
                className="rounded-full border border-[#E8E2DD] text-[#4A3B32] hover:bg-[#F8E1E7]/30 transition-all px-8 py-4 font-medium font-body text-sm flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                {t.hero.instagram}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(74,59,50,0.08)]">
              <img
                src={HERO_IMG}
                alt="Marshmallow flowers"
                className="w-full h-auto object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-white/10" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#C1D5C0]/20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#F8E1E7]/30 blur-2xl" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("#catalog")}
          data-testid="scroll-down-btn"
          className="text-[#8A7D75] hover:text-[#4A3B32] transition-colors animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}
