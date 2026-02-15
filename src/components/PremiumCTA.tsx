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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative py-36 px-6 text-center overflow-hidden"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-sm uppercase tracking-widest text-gray-400 mb-6"
        >
          A Gentle Reminder
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
        >
          You don’t need another vacation.
          <br />
          You need a pause.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-600 mb-12 max-w-xl mx-auto"
        >
          Step away from the noise. Slow down your mornings.
          Let nature reset the rhythm of your days.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            relative bg-black text-white
            px-12 py-4 rounded-full text-lg font-medium
            overflow-hidden
          "
        >
          <span className="relative z-10">
            Begin Your Stay
          </span>

          {/* BUTTON GLOW */}
          <span
            className="
              absolute inset-0 bg-white/10
              opacity-0 hover:opacity-100
              transition
            "
          />
        </motion.button>
      </div>
    </motion.section>
  );
}
