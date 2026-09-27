import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919027844424";

export default function Contact() {
  const handleWhatsApp = () => {
    const message = `Hello!
I have a few questions about staying at Maati Living Community.
Could you please help me?`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="py-32 px-6 sm:px-12 text-center bg-[#fafaf9] border-b border-stone-200/70"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-4">
        06 / CONVERSATIONS & INQUIRIES
      </span>

      <h2 className="text-4xl sm:text-5xl font-display font-medium text-stone-900 mb-6">
        Still Have Questions?
      </h2>

      <p className="text-stone-600 max-w-xl mx-auto mb-10 text-base font-light leading-relaxed">
        Whether about mountain road conditions, seasonal weather, curated dining, or special stay requests — reach out anytime. A host from the community will respond directly.
      </p>

      <button
        onClick={handleWhatsApp}
        className="
          inline-flex items-center gap-3
          bg-white border border-stone-300
          text-stone-900 px-8 py-3.5 rounded-full
          text-xs font-mono uppercase tracking-wider
          hover:bg-stone-900 hover:text-white hover:border-stone-900
          transition-all duration-200 shadow-sm
        "
      >
        <span>Message Us on WhatsApp</span>
        <span>→</span>
      </button>
    </motion.section>
  );
}
