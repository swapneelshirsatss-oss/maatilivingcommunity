import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Stays", href: "#stays" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "917900816616"; 
const WHATSAPP_MESSAGE = "Hello, I want to book a stay at Maati Living Community.";

export default function PremiumNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fafaf9]/85 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-semibold tracking-tight text-stone-900 group-hover:text-stone-700 transition">
            Maati Living
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-stone-400 pl-2 border-l border-stone-300">
            Mukteshwar
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-stone-600">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-stone-950 transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              WHATSAPP_MESSAGE
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs font-sans tracking-wide hover:bg-stone-800 transition-all duration-200"
          >
            Reserve Stay
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-lg p-2 text-stone-800 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGE
                )}`}
                target="_blank"
                className="block text-center bg-black text-white py-2 rounded-full"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
