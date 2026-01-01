import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex justify-center relative overflow-hidden z-10">
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">

        {/* HERO IMAGE */}
        <img
          src="/assets/uber-eats.jpg"
          alt="Hero"
          className="w-full h-auto object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">

          <div className="w-full max-w-xl overflow-hidden">

            <h1 className="text-5xl font-bold">
              Order delivery near you
            </h1>

            <p className="text-lg mt-6">
              Get your favorite food delivered fast to your doorstep.
            </p>

            <div className="mt-10 w-full overflow-hidden">
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="box-border w-full px-4 py-2 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button className="mt-4 w-full px-4 py-3 bg-black rounded-xl hover:scale-105 transition">
                Search
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
