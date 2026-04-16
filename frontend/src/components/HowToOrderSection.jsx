import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  Package,
  Flower2,
  Cherry,
  Ruler,
  Instagram,
} from "lucide-react";

const sectionIcons = {
  format: Package,
  flowers: Flower2,
  flavors: Cherry,
  size: Ruler,
};

export default function HowToOrderSection() {
  const { t } = useLanguage();

  const sections = [
    { key: "format", label: t.howToOrder.format, items: t.howToOrder.formats },
    {
      key: "flowers",
      label: t.howToOrder.flowers,
      items: t.howToOrder.flowersList,
    },
    {
      key: "flavors",
      label: t.howToOrder.flavors,
      items: t.howToOrder.flavorsList,
    },
    { key: "size", label: t.howToOrder.size, items: t.howToOrder.sizes },
  ];

  return (
    <section
      id="how-to-order"
      data-testid="how-to-order-section"
      className="py-24 lg:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            data-testid="how-to-order-title"
            className="font-heading text-4xl sm:text-5xl tracking-tight font-light text-[#4A3B32] mb-4"
          >
            {t.howToOrder.title}
          </h2>
          <p className="text-base text-[#8A7D75] font-body font-light">
            {t.howToOrder.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {sections.map((sec, idx) => {
            const Icon = sectionIcons[sec.key];
            return (
              <motion.div
                key={sec.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-testid={`order-section-${sec.key}`}
                className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(74,59,50,0.03)] border border-[#E8E2DD]/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#F8E1E7]/60 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#4A3B32]" />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-[#4A3B32]">
                    {sec.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sec.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-4 py-2 rounded-full bg-[#FAF9F6] border border-[#E8E2DD]/60 text-sm text-[#4A3B32] font-body hover:bg-[#F8E1E7]/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/flores.de.zefir/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-instagram-order"
            className="inline-flex items-center gap-2 rounded-full bg-[#C1D5C0] text-[#2C2421] hover:bg-[#A9BCA8] transition-all px-8 py-4 font-medium font-body text-sm"
          >
            <Instagram className="w-4 h-4" />
            {t.howToOrder.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
