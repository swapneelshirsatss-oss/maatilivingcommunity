import { useState } from "react";
import { motion } from "framer-motion";
import ImageCarouselModal from "./ImageCarouselModal";

const images = Array.from({ length: 14 }, (_, i) => `/images/${i + 1}.jpeg`);

export default function NatureGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openCarousel = (index: number) => setActiveIndex(index);
  const closeCarousel = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex((i) => (i! === 0 ? images.length - 1 : i! - 1));

  const next = () =>
    setActiveIndex((i) => (i! === images.length - 1 ? 0 : i! + 1));

  return (
    <section id="gallery" className="py-32 px-6 bg-white">
      {/* HEADING */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <span className="uppercase text-xs tracking-widest text-gray-400">
          Nature & Surroundings
        </span>
        <h2 className="text-4xl font-semibold mt-4 mb-4">
          Wake Up With Nature
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click on any moment to explore the landscapes around Maati Living.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <motion.div
            key={src}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openCarousel(index)}
          >
            <img
              src={src}
              alt={`Nature ${index + 1}`}
              className="w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <ImageCarouselModal
          images={images}
          currentIndex={activeIndex}
          onClose={closeCarousel}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
