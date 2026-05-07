import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "./data";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: 'rgba(10,15,30,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
              <Icon name="Grid2x2" size={18} className="text-white" />
            </div>
            <span className="text-white font-oswald text-xl font-bold tracking-wide">ОКНА<span style={{ color: '#00D4AA' }}>ПРО</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+74951234567" className="text-white font-semibold text-sm flex items-center gap-1">
              <Icon name="Phone" size={14} style={{ color: '#00D4AA' }} />
              +7 (495) 123-45-67
            </a>
            <a href="#contacts" className="btn-primary px-4 py-2 rounded-xl text-sm text-white">
              Заказать замер
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-4 pb-4" style={{ background: 'rgba(10,15,30,0.98)' }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white py-3 text-sm font-medium border-b border-white/10">
              {link.label}
            </a>
          ))}
          <a href="#contacts" className="btn-primary mt-4 block text-center px-4 py-3 rounded-xl text-white text-sm">
            Заказать замер
          </a>
        </div>
      )}
    </nav>
  );
}
