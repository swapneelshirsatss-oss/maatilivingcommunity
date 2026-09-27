import { motion } from "framer-motion";

const images = [
  "/hero/1.jpeg",
  "/hero/2.jpeg",
  "/hero/3.jpeg",
  "/hero/4.jpeg",
];

export default function HeroVideo() {
  const scrollToStays = () => {
    const section = document.getElementById("stays");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="h-[90vh] relative flex items-center overflow-hidden"
    >
      {/* BACKGROUND SLIDES */}
      {images.map((img, index) => (
        <motion.div
          key={img}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [1, 1.08, 1.12, 1.15] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 5,
          }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="relative z-20 px-8 sm:px-12 max-w-4xl"
      >
        <span className="inline-block font-mono text-xs uppercase tracking-widest text-stone-300 mb-4 px-3 py-1 border border-white/20 rounded-full backdrop-blur-sm">
          7,500 FT · Seetla, Mukteshwar
        </span>

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-display font-medium mb-6 leading-[1.05] tracking-tight">
          Where Silence <br />
          <span className="italic font-normal">Feels Like Luxury.</span>
        </h1>

        <p className="text-white/85 max-w-xl mb-10 text-base sm:text-lg font-light leading-relaxed">
          A handcrafted eco-retreat surrounded by deodar pine forests, earthen mud architecture, and deep Himalayan stillness.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={scrollToStays}
            className="bg-white text-stone-900 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide
                       hover:bg-stone-100 transition-all duration-200 shadow-sm"
          >
            Explore Stays & Suites
          </button>
          <a
            href="https://wa.me/917900816616?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay%20at%20Maati%20Living."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white px-6 py-3.5 text-sm font-mono tracking-wider uppercase border border-white/30 rounded-full hover:border-white transition-all duration-200 backdrop-blur-sm"
          >
            WhatsApp Inquiry →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
