import React from "react";
import { RiMic2AiFill } from "react-icons/ri";
const Hero = () => {
  return (
    <section className="relative w-full h-lvh mt-16 overflow-hidden">

      {/* HERO IMAGE */}
      <img
        src="/assets/uber-eats.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 " />

      {/* CONTENT */}
      <section className="relative w-full h-105 text-white flex items-center justify-end px-24 mt-48">
  <div className="max-w-xl text-right">
    <h1 className="text-5xl font-bold leading-tight">
      What are you craving right now?
    </h1>

    <p className="mt-4 text-lg text-gray-300">
      Tell us your mood — we’ll find your perfect meal.
    </p>

    <div className="mt-8 flex justify-end gap-4">
      <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition flex items-center gap-2">
        <RiMic2AiFill />Talk to AI
      </button>

      <button className="px-6 py-3 border border-white rounded-full hover:scale-105 transition">
        🔥 Quick Picks
      </button>
    </div>
  </div>
</section>



    </section>
  );
};

export default Hero;
