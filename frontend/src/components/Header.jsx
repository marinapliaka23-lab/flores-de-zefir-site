import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Globe, Instagram, Menu, X } from "lucide-react";

const langLabels = { en: "EN", pt: "PT", uk: "UK" };

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#catalog", label: t.nav.catalog },
    { href: "#how-to-order", label: t.nav.howToOrder },
    { href: "#course", label: t.nav.course },
    { href: "#alumni", label: t.nav.alumni },
    { href: "#about", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="header"
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#FAF9F6]/80 border-b border-[#E8E2DD]/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#"
          data-testid="logo"
          className="font-heading text-xl tracking-tight text-[#4A3B32]"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Flores de Zefir
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.href.slice(1)}`}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-body text-[#8A7D75] hover:text-[#4A3B32] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger
              data-testid="language-switcher"
              className="w-[80px] h-9 border-[#E8E2DD] bg-transparent text-[#4A3B32] text-sm"
            >
              <Globe className="w-3.5 h-3.5 mr-1 text-[#8A7D75]" />
              <SelectValue>{langLabels[lang]}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en" data-testid="lang-en">
                EN
              </SelectItem>
              <SelectItem value="pt" data-testid="lang-pt">
                PT
              </SelectItem>
              <SelectItem value="uk" data-testid="lang-uk">
                UK
              </SelectItem>
            </SelectContent>
          </Select>

          <a
            href="https://www.instagram.com/flores.de.zefir/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-instagram"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[#8A7D75] hover:text-[#4A3B32] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#4A3B32]"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[#FAF9F6]/95 backdrop-blur-xl border-t border-[#E8E2DD]/50 px-6 py-6"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-body text-[#4A3B32] hover:text-[#8A7D75] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/flores.de.zefir/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-[#4A3B32]"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
