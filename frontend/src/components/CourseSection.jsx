import { useLanguage } from "../context/LanguageContext";
import { courseContent } from "../i18n/detailedContent";
import { motion } from "framer-motion";
import {
  Send,
  Globe,
  Clock,
  HeartHandshake,
  Sparkles,
  Timer,
  Home,
  ChefHat,
  BookOpen,
  Flower2,
  Package,
  UserCheck,
  GraduationCap,
  Gift,
  ListChecks,
  FlaskConical,
  Play,
  Wrench,
  Instagram,
  Infinity,
  Heart,
} from "lucide-react";

const AIRY_BG =
  "https://static.prod-images.emergentagent.com/jobs/7b303e07-c54a-464d-ad81-4fb8860d0941/images/585b82b832a201228466556d07342f7f940f2fd1da53d4df7cedc9695c18a7c4.png";

const roomIcons = [ChefHat, BookOpen, Flower2, Package, HeartHandshake, GraduationCap];
const roomColors = [
  "from-[#F8E1E7]/50 to-[#FCF0F3]/30",
  "from-[#C1D5C0]/40 to-[#E8F0E7]/20",
  "from-[#E8C9D0]/40 to-[#F8E1E7]/20",
  "from-[#C1D5C0]/50 to-[#C1D5C0]/20",
  "from-[#F8E1E7]/40 to-[#E8C9D0]/20",
  "from-[#C9A96E]/20 to-[#DCC5A0]/10",
];

const detailIcons = [Globe, Send, Infinity, Heart];
const insideIcons = [ListChecks, FlaskConical, Gift, Wrench, Play, Package];

export default function CourseSection() {
  const { lang } = useLanguage();
  const t = courseContent[lang];

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="course" data-testid="course-section" className="relative">
      {/* Course Banner Image */}
      <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_airy-blooms/artifacts/fnls7ex7_5211144384030642665.jpg"
          alt="Marshmallow floristry"
          data-testid="course-banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Part 1: Pioneer Intro */}
      <div className="py-24 lg:py-32 bg-white relative overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 opacity-[0.05] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${AIRY_BG})` }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] font-medium text-[#C1D5C0] mb-4 font-body">
              {t.overline}
            </p>
            <h2
              data-testid="course-headline"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight font-light text-[#4A3B32] mb-6"
            >
              {t.headline}
            </h2>
            <p className="text-base lg:text-lg text-[#8A7D75] font-body font-light max-w-3xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {t.benefits.map((benefit, idx) => {
              const icons = [Sparkles, Timer, HeartHandshake];
              const Icon = icons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  data-testid={`benefit-card-${idx}`}
                  className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#E8E2DD]/50 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C1D5C0]/25 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#4A3B32]" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[#4A3B32] mb-3">
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              data-testid="cta-enroll-course"
              onClick={() => scrollTo("#alumni")}
              className="rounded-full bg-[#C1D5C0] text-[#2C2421] hover:bg-[#A9BCA8] transition-all px-10 py-4 font-medium font-body text-sm tracking-wide"
            >
              {t.enrollCta}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Part 2: The House — Rooms */}
      <div className="py-24 lg:py-32 bg-[#FAF9F6] relative overflow-hidden">
        {/* House silhouette decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
          <div className="flex justify-center">
            <Home className="w-10 h-10 text-[#E8E2DD]" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              data-testid="house-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight font-light text-[#4A3B32] mb-4"
            >
              {t.houseTitle}
            </h2>
            <p className="text-base text-[#8A7D75] font-body font-light max-w-2xl mx-auto">
              {t.houseSubtitle}
            </p>
          </motion.div>

          {/* Rooms Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px house-timeline-line md:-translate-x-px" />

            {t.rooms.map((room, idx) => {
              const Icon = roomIcons[idx];
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  data-testid={`course-room-${room.num}`}
                  className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Room card */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className={`bg-white rounded-3xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(74,59,50,0.04)] border border-[#E8E2DD]/50 hover:-translate-y-1 transition-transform duration-300 inline-block ${isEven ? "md:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${roomColors[idx]} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-5 h-5 text-[#4A3B32]" />
                        </div>
                        <div>
                          <h4 className="font-heading text-lg font-medium text-[#4A3B32]">
                            {room.name}
                          </h4>
                          <span className="text-xs uppercase tracking-[0.15em] text-[#8A7D75] font-body">
                            {room.title}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-[#8A7D75] font-body font-light leading-relaxed">
                        {room.desc}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#E8E2DD] flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xs font-bold text-[#4A3B32] font-body">
                      {room.num}
                    </span>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Part 3: Key Details & Inside the Course */}
      <div className="py-24 lg:py-32 bg-white relative grain-overlay">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3
              data-testid="details-title"
              className="font-heading text-2xl sm:text-3xl font-medium text-[#4A3B32] text-center mb-10"
            >
              {t.detailsTitle}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.details.map((detail, idx) => {
                const Icon = detailIcons[idx];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-[#FAF9F6] border border-[#E8E2DD]/50"
                  >
                    <Icon className="w-5 h-5 text-[#C1D5C0] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#4A3B32] font-body leading-relaxed">
                      {detail}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              data-testid="inside-title"
              className="font-heading text-2xl sm:text-3xl font-medium text-[#4A3B32] text-center mb-10"
            >
              {t.insideTitle}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.inside.map((item, idx) => {
                const Icon = insideIcons[idx];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    data-testid={`inside-item-${idx}`}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E2DD]/50"
                  >
                    <Icon className="w-4 h-4 text-[#E8C9D0] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#4A3B32] font-body leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Lesson Previews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { src: "https://customer-assets.emergentagent.com/job_airy-blooms/artifacts/4wslosqv_Lesson%201.png", alt: "Lesson 1 — Inventory" },
                { src: "https://customer-assets.emergentagent.com/job_airy-blooms/artifacts/165v6295_Lesson%201%20%282%29.png", alt: "Lesson 2 — Juice and Puree" },
                { src: "https://customer-assets.emergentagent.com/job_airy-blooms/artifacts/iymzlh6f_Lesson%201%20%285%29.png", alt: "Lesson 4 — Invert Syrup" },
              ].map((lesson, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  data-testid={`lesson-preview-${idx}`}
                  className="rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(74,59,50,0.06)] border border-[#E8E2DD]/50 hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={lesson.src}
                    alt={lesson.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Part 4: Pricing */}
      <div className="py-20 bg-[#FAF9F6]">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div
              data-testid="pricing-mentorship"
              className="bg-white rounded-3xl p-8 text-center border border-[#C1D5C0]/40 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_24px_rgba(74,59,50,0.04)]"
            >
              <p className="text-sm uppercase tracking-[0.15em] font-medium text-[#8A7D75] mb-2 font-body">
                {t.mentorship}
              </p>
              <p className="font-heading text-5xl font-light text-[#4A3B32]">
                {t.mentorshipPrice}&euro;
              </p>
            </div>
            <div
              data-testid="pricing-selfpaced"
              className="bg-white rounded-3xl p-8 text-center border border-[#F8E1E7]/60 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_24px_rgba(74,59,50,0.04)]"
            >
              <p className="text-sm uppercase tracking-[0.15em] font-medium text-[#8A7D75] mb-2 font-body">
                {t.selfPaced}
              </p>
              <p className="font-heading text-5xl font-light text-[#4A3B32]">
                {t.selfPacedPrice}&euro;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
