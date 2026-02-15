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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-28 px-6 text-center bg-neutral-50"
    >
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
        No Pressure
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Still Have Questions?
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Whether it’s about the stay, food, accessibility, or something specific —
        just ask. A real person will reply.
      </p>

      <button
        onClick={handleWhatsApp}
        className="
          inline-flex items-center gap-2
          border border-black
          px-8 py-3 rounded-full
          hover:bg-black hover:text-white
          transition
        "
      >
        Chat on WhatsApp
      </button>
    </motion.section>
  );
}
