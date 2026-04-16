import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 lg:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            data-testid="faq-title"
            className="font-heading text-4xl sm:text-5xl tracking-tight font-light text-[#4A3B32]"
          >
            {t.faq.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                data-testid={`faq-item-${idx}`}
                className="border-b border-[#E8E2DD]"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${idx}`}
                  className="font-body text-left text-[#4A3B32] text-base py-6 hover:no-underline hover:text-[#8A7D75] transition-colors"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#8A7D75] font-body font-light text-base leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
