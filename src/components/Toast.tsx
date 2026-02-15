import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  show: boolean;
}

export default function Toast({ message, show }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -40,
            scale: 0.98,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="
            fixed
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-50

            bg-white/90 backdrop-blur-xl
            shadow-2xl
            rounded-2xl

            px-8 py-5
            text-center

            text-sm sm:text-base md:text-lg
            text-gray-800
            max-w-[90vw] sm:max-w-md
          "
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
