import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageCarouselModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          ✕
        </button>

        {/* LEFT ARROW */}
        <button
          onClick={onPrev}
          className="absolute left-6 text-white text-4xl"
        >
          ‹
        </button>

        {/* IMAGE */}
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
        />

        {/* RIGHT ARROW */}
        <button
          onClick={onNext}
          className="absolute right-6 text-white text-4xl"
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
