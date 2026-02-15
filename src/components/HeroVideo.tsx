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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.2 }}
        className="relative z-20 px-10 max-w-4xl"
      >
        <h1 className="text-white text-5xl md:text-6xl font-semibold mb-4 leading-tight">
          Where Silence <br /> Feels Like Luxury
        </h1>

        <p className="text-white/90 max-w-xl mb-8 text-lg">
          A slow-living eco retreat surrounded by forests, warmth & calm.
        </p>

        <button
          onClick={scrollToStays}
          className="bg-white text-black px-8 py-3 rounded-full font-medium
                     hover:bg-black hover:text-white transition-all duration-300"
        >
          Explore Stays
        </button>
      </motion.div>
    </section>
  );
}
