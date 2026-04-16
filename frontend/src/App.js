import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import CourseSection from "@/components/CourseSection";
import AlumniSection from "@/components/AlumniSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingDecor from "@/components/FloatingDecor";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF9F6] relative">
        <FloatingDecor />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <CatalogSection />
          <HowToOrderSection />
          <CourseSection />
          <AlumniSection />
          <AboutSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
