import { FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function PremiumFooter() {
  return (
    <footer className="bg-[#111110] text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-24 grid gap-16 md:grid-cols-12">

        {/* BRAND + ADDRESS */}
        <div className="md:col-span-5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400 block mb-2">
            7,500 FT ELEVATION · MUKTESHWAR
          </span>
          <h3 className="text-3xl font-display font-medium text-stone-100 mb-4">
            Maati Living Community
          </h3>

          <p className="text-sm text-stone-400 font-light leading-relaxed mb-6 max-w-sm">
            Towards Chatola Road, Seetla, Mukteshwar, Nainital District, Uttarakhand 263138, India
          </p>

          <div className="flex items-center gap-3 text-sm text-stone-300 font-mono">
            <FaPhone className="text-stone-500 text-xs" />
            <a
              href="tel:+917900816616"
              className="hover:text-white transition-colors"
            >
              +91 79008 16616
            </a>
          </div>
        </div>

        {/* CONNECT & RITUALS */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-6">
            Connect
          </h4>

          <div className="flex gap-6 text-xl text-stone-400 mb-8">
            <a
              href="https://www.instagram.com/maatiliving/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-stone-100 transition-colors"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/917900816616"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-stone-100 transition-colors"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://maps.app.goo.gl/dhCZdwisAvmvj6Pq5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="hover:text-stone-100 transition-colors"
            >
              <FaMapMarkerAlt />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-stone-100 transition-colors"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="text-xs font-light text-stone-500 leading-relaxed">
            Open for slow-travelers, writers, nature lovers, and peaceful family retreats.
          </p>
        </div>

        {/* MAP */}
        <div className="md:col-span-4 w-full h-64 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
          <iframe
            title="Maati Living Location"
            src="https://www.google.com/maps?q=Maati%20Living%20Community%20Mukteshwar&output=embed"
            className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-800/80 py-6 px-6 text-center text-xs font-mono text-stone-400">
        © 2026 Maati Living Community · Handcrafted Slow Living in Uttarakhand
      </div>
    </footer>
  );
}
