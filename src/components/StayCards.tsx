import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Toast from "./Toast";

const WHATSAPP_NUMBER = "917900816616";

const stays = [
  {
    title: "The Himalayan Suite",
    subtitle: "Floor-to-ceiling forest windows with sweeping valley views",
    capacity: "2 Guests · Handcrafted King Bed",
    img: "/hero/1.jpeg",
    tag: "Valley View",
    features: ["Private Forest Deck", "Deodar Pine Paneling", "Solar Warm Water"],
  },
  {
    title: "Mud House Cottage",
    subtitle: "Authentic Kumaoni earthen architecture with organic thermal balance",
    capacity: "2-3 Guests · Earth Hearth",
    img: "/hero/2.jpeg",
    tag: "Heritage Craft",
    features: ["Hand-Plastered Mud", "Quiet Courtyard Access", "Natural Clay Coolness"],
  },
  {
    title: "Pine Canopy Loft",
    subtitle: "Attic retreat surrounded by ancient Himalayan pine needles and birdsong",
    capacity: "2 Guests · Skylight Views",
    img: "/hero/3.jpeg",
    tag: "Forest Serenity",
    features: ["Stargazing Windows", "Artisan Woodwork", "Quiet Work Desk"],
  },
];

export default function StayCards() {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2600);
  };

  /* 🧠 NIGHT COUNT */
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff =
      (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const handleBooking = (room: string) => {
    if (!name.trim()) {
      triggerToast("Please enter your name 🌿");
      return;
    }
    if (!checkIn || !checkOut) {
      triggerToast("Please select check-in and check-out dates 📅");
      return;
    }
    if (nights <= 0) {
      triggerToast("Check-out date must be after check-in 📅");
      return;
    }

    const message = `Hello 👋
My name is *${name}*.

I’d like to book *${room}* at Maati Living Community, Mukteshwar.

  • Check-in: ${checkIn}
  • Check-out: ${checkOut}
  • Nights: ${nights}

Please share current availability and tariff details. Thank you!`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="stays" className="py-32 px-6 sm:px-12 bg-[#fafaf9] border-b border-stone-200/70">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-3">
          03 / COTTAGES & SUITES
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-stone-900 mb-4">
          Stays & Living Spaces
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto text-base font-light">
          Each cottage is handcrafted with stone, mud, and timber to provide an authentic sanctuary in the mountains.
        </p>
      </div>

      {/* MINIMALIST BOOKING INPUT CARD */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)]">
          {/* NAME */}
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-stone-500 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="e.g. Aditi Sharma"
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>

          {/* CHECK-IN */}
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-stone-500 block mb-2">
              Check-in Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                setCheckOut("");
              }}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>

          {/* CHECK-OUT */}
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-stone-500 block mb-2">
              Check-out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>
        </div>

        {/* NIGHT INFO */}
        {nights > 0 && (
          <p className="text-center font-mono text-xs text-stone-600 mt-4 tracking-wider uppercase">
            🌙 <span className="tnum font-semibold">{nights}</span> night{nights > 1 ? "s" : ""} selected for retreat
          </p>
        )}
      </div>

      {/* STAY CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stays.map((stay) => (
          <motion.div
            key={stay.title}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group rounded-2xl overflow-hidden bg-white border border-stone-200/90 flex flex-col shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:border-stone-400/80 transition-all"
          >
            <div className="overflow-hidden relative h-64">
              <span className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest bg-stone-900/80 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {stay.tag}
              </span>
              <img
                src={stay.img}
                alt={stay.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <span className="font-mono text-xs text-stone-400 mb-1">
                {stay.capacity}
              </span>
              <h3 className="font-display font-medium text-2xl text-stone-900 mb-2">
                {stay.title}
              </h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                {stay.subtitle}
              </p>

              <div className="space-y-1.5 mb-8 border-t border-stone-100 pt-4">
                {stay.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-stone-500 font-light">
                    <span className="w-1 h-1 rounded-full bg-stone-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBooking(stay.title)}
                className="mt-auto w-full bg-stone-900 text-stone-50 py-3 rounded-full text-xs font-mono uppercase tracking-wider
                           hover:bg-stone-800 transition-colors"
              >
                Inquire on WhatsApp →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TOAST */}
      <Toast show={showToast} message={toastMessage} />
    </section>
  );
}
