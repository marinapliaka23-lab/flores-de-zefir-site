import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { products, categoryGradients } from "../i18n/translations";
import { MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CatalogSection() {
  const { t } = useLanguage();

  return (
    <section
      id="catalog"
      data-testid="catalog-section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-[#8A7D75] mb-4 font-body">
            {t.catalog.sale}
          </p>
          <h2
            data-testid="catalog-title"
            className="font-heading text-4xl sm:text-5xl tracking-tight font-light text-[#4A3B32] mb-4"
          >
            {t.catalog.title}
          </h2>
          <p className="text-base text-[#8A7D75] font-body font-light">
            {t.catalog.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              data-testid={`product-card-${i}`}
              className="group"
            >
              <div
                className={`aspect-square rounded-2xl overflow-hidden ${!product.image ? `bg-gradient-to-br ${categoryGradients[product.category]} flex items-center justify-center p-4 text-center` : ''} border border-white shadow-sm group-hover:-translate-y-1 transition-transform duration-300`}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover ${product.objectPos || 'object-center'}`}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-[#4A3B32] font-medium text-sm sm:text-base font-body leading-tight">
                    {product.name}
                  </span>
                )}
              </div>
              <div className="mt-3 text-center">
                <p className="text-[#4A3B32] font-medium text-sm font-body mb-1 leading-tight">
                  {product.name}
                </p>
                <span className="text-[#8A7D75] line-through text-sm font-body mr-2">
                  {product.oldPrice}&euro;
                </span>
                <span className="text-[#4A3B32] font-medium text-lg font-body">
                  {product.newPrice}&euro;
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            data-testid="custom-order-card"
            className="group"
          >
            <div className="aspect-square rounded-2xl border-2 border-dashed border-[#E8C9D0] flex flex-col items-center justify-center p-6 text-center group-hover:-translate-y-1 transition-transform duration-300 bg-[#FAF9F6]">
              <MessageCircle className="w-8 h-8 text-[#C1D5C0] mb-3" />
              <span className="text-[#4A3B32] font-medium text-sm sm:text-base font-body leading-tight">
                {t.catalog.customTitle}
              </span>
              <span className="text-[#8A7D75] text-xs mt-2 font-body">
                {t.catalog.customDesc}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
