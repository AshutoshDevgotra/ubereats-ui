import React from 'react';

const Hero = () => {
  return (
    <section className="w-full mt-5 flex justify-center items-center relative z-10">
  <div className="relative w-300">

        {/* HERO IMAGE */}
        <img
          src="/assets/uber-eats.jpg"
          alt="Hero"
          className="w-auto h-auto "
        />

        {/* OVERLAY TEXT */}
        <div className="absolute inset-0  flex flex-col items-center justify-center  text-white text-center ">
          <h1 className="text-5xl font-bold">
            Order delivery near you
          </h1>

          <p className="text-lg mt-6">
            Get your favorite food delivered fast to your doorstep.
          </p>

          <div className="mt-10 w-full max-w-xl">
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="w-full text-white px-4 py-2 border border-white rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button className="mt-4 w-full px-4 py-3 bg-black rounded-xl hover:scale-105 transition">
              Search
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
