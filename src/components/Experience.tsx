import { motion } from "framer-motion";

const rituals = [
  {
    title: "Slow Mornings",
    desc: "Wake up with birdsong, sunlight through trees, and no rush.",
  },
  {
    title: "Grounded Living",
    desc: "Natural materials, warm textures, and spaces that breathe.",
  },
  {
    title: "Quiet Evenings",
    desc: "Golden sunsets, tea by the fire, and deep stillness.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* FLOATING LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-black/20 origin-left"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="uppercase text-xs tracking-widest text-gray-400">
            The Experience
          </span>

          <h2 className="text-4xl font-semibold mt-4 mb-6 leading-snug">
            Designed For <br /> Slow Living
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md">
            At Maati Living, every space is intentionally created to slow you
            down — so you can listen, breathe, and reconnect.
          </p>
        </motion.div>

        {/* RITUALS */}
        <div className="space-y-8">
          {rituals.map((ritual, i) => (
            <motion.div
              key={ritual.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="border-l pl-6"
            >
              <h4 className="font-medium mb-1">{ritual.title}</h4>
              <p className="text-gray-600 text-sm">
                {ritual.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
