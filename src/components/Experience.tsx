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
      className="py-32 px-6 sm:px-12 bg-[#fafaf9] border-b border-stone-200/70 relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-5 md:sticky md:top-28"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-4">
            02 / THE LIVING PHILOSOPHY
          </span>

          <h2 className="text-4xl sm:text-5xl font-display font-medium mb-6 leading-[1.1] text-stone-900">
            Spaces Designed <br />
            <span className="italic font-normal">For Slow Living.</span>
          </h2>

          <p className="text-stone-600 leading-relaxed text-base font-light mb-8">
            At Maati Living, architecture is not an imposition on the landscape.
            Hand-plastered mud walls, natural pine timber, and wide verandahs
            invite you to slow down, listen to the breeze, and reconnect.
          </p>

          <div className="pt-6 border-t border-stone-200 flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-stone-500">
            <span>Natural Mud & Lime</span>
            <span>•</span>
            <span>Solar Heated</span>
            <span>•</span>
            <span>Organic Kitchen</span>
          </div>
        </motion.div>

        {/* RITUALS LIST WITH HAIRLINE DIVIDERS */}
        <div className="md:col-span-7 divide-y divide-stone-200/80 border-y border-stone-200/80">
          {rituals.map((ritual, i) => (
            <motion.div
              key={ritual.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline hover:bg-stone-500/[0.02] transition-colors"
            >
              <span className="sm:col-span-3 font-mono text-xs text-stone-400">
                0{i + 1} / RITUAL
              </span>
              <div className="sm:col-span-9">
                <h4 className="text-xl font-display font-medium text-stone-900 mb-2">
                  {ritual.title}
                </h4>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {ritual.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
