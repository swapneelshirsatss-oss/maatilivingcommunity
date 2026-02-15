import { FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function PremiumFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">

        {/* BRAND + ADDRESS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Maati Living Community
          </h3>

          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Maati Living Sign Board, 500 Meter Towards, to Chatola Road,
            Seetla, Mukteshwar, Uttarakhand 263138
          </p>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <FaPhone />
            <a
              href="tel:+917900816616"
              className="hover:text-white transition"
            >
              +91 7900816616
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-medium mb-4">Connect With Us</h4>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.instagram.com/maatiliving/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/917900816616"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://maps.app.goo.gl/dhCZdwisAvmvj6Pq5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="Maati Living Location"
            src="https://www.google.com/maps?q=Maati%20Living%20Community%20Mukteshwar&output=embed"
            className="w-full h-full grayscale hover:grayscale-0 transition"
            loading="lazy"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © 2026 Maati Living Community · All Rights Reserved
      </div>
    </footer>
  );
}
