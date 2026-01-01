import { useState } from "react";

export default function DeliveryPickupToggle() {
  const [mode, setMode] = useState("delivery");

  return (
    <div className="relative items-center  w-52 bg-gray-100 border border-gray-300 rounded-full p-1 flex">

      {/* Sliding Pill */}
      <div
        className={`absolute  h-8 w-[48%] rounded-full bg-green-500 transition-all duration-300 ease-in-out
          ${mode === "pickup" ? "translate-x-full" : "translate-x-0"}`}
      />

      <button
        onClick={() => setMode("delivery")}
        className="relative z-10 w-1/2 text-sm font-medium py-1"
      >
        Delivery
      </button>

      <button
        onClick={() => setMode("pickup")}
        className="relative z-10 w-1/2 text-sm font-medium py-1"
      >
        Pickup
      </button>

    </div>
  );
}
