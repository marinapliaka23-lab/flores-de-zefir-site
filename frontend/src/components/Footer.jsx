import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="py-12 bg-white border-t border-[#E8E2DD]/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg tracking-tight text-[#4A3B32]">
          Flores de Zefir
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/flores.de.zefir/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram"
            className="text-[#8A7D75] hover:text-[#4A3B32] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <p className="text-sm text-[#8A7D75] font-body">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
