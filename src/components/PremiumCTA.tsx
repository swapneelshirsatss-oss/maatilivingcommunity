import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "917900816616"; 

export default function PremiumCTA() {
  const handleClick = () => {
    const message = `Hello!
I would like to book a stay at Maati Living Community.
Please share the availability and details.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative py-36 px-6 sm:px-12 text-center bg-[#fafaf9] border-b border-stone-200/70"
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-6">
          05 / A GENTLE INVITATION
        </span>

        <h2 className="text-4xl sm:text-6xl font-display font-medium text-stone-900 mb-6 leading-[1.1] tracking-tight">
          You don’t need another vacation. <br />
          <span className="italic font-normal">You need a pause.</span>
        </h2>

        <p className="text-stone-600 mb-10 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
          Step away from the noise. Slow down your mornings.
          Let the deodar pines reset the natural cadence of your days.
        </p>

        <button
          onClick={handleClick}
          className="
            bg-stone-900 text-stone-50
            px-10 py-4 rounded-full text-xs font-mono uppercase tracking-widest
            hover:bg-stone-800 transition-colors duration-200 shadow-sm
          "
        >
          Begin Your Stay On WhatsApp →
        </button>
      </div>
    </motion.section>
  );
}
