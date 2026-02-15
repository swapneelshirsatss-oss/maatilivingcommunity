import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Toast from "./Toast";

const WHATSAPP_NUMBER = "917900816616";

const stays = [
  { title: "Himalayan Room", img: "/hero/1.jpeg" },
  { title: "Mud House Cottage", img: "/hero/2.jpeg" },
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

I’d like to book the *${room}* at Maati Living Community.

  | Check-in: ${checkIn}
  | Check-out: ${checkOut}
  | Nights: ${nights}

Please share the price and availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="stays" className="py-28 px-6 bg-neutral-50">
      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mb-3">
        Stays & Suites
      </h2>
      <p className="text-center text-gray-600 mb-16">
        Choose your stay · Select your dates · Relax
      </p>

      {/* BOOKING INPUT CARD */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
          {/* NAME */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* CHECK-IN */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Check-in Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                setCheckOut("");
              }}
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* CHECK-OUT */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Check-out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        {/* NIGHT INFO */}
        {nights > 0 && (
          <p className="text-center text-sm text-gray-600 mt-4">
            🌙 {nights} night{nights > 1 ? "s" : ""} stay selected
          </p>
        )}
      </div>

      {/* STAY CARDS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {stays.map((stay) => (
          <motion.div
            key={stay.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={stay.img}
                alt={stay.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="font-medium text-xl">{stay.title}</h3>

              <button
                onClick={() => handleBooking(stay.title)}
                className="mt-auto bg-black text-white py-3 rounded-full
                           hover:bg-neutral-800 transition"
              >
                Book on WhatsApp
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
