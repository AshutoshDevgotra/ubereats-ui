import { MdLocationPin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoSearch, IoTime } from "react-icons/io5";
import { useLocationStore } from "./store/useLocationStore";

export default function GetLocation({ close }) {
  const setLocation = useLocationStore(state => state.setLocation);

  const locations = [
    { address: "Mississauga, ON", lat: 43.5890, lng: -79.6441 },
    { address: "Toronto, ON", lat: 43.6532, lng: -79.3832 },
    { address: "Brampton, ON", lat: 43.7315, lng: -79.7624 }
  ];

  // 🔥 REAL GPS DETECTION
  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      const a = data.address;

      // Clean Uber-style address
      const clean =
        `${a.suburb || a.neighbourhood || ""} ${a.city || a.town || ""}, ${a.state || ""}`
          .replace(/\s+/g, " ")
          .trim();

      setLocation({ address: clean, lat, lng });
      close();
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-xl p-5">

        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg">Delivery address</h2>
          <button onClick={close}><ImCross /></button>
        </div>

        <div className="flex items-center gap-2 border rounded-full px-4 py-2 mb-4">
          <IoSearch />
          <input placeholder="Search for an address" className="w-full outline-none" />
        </div>

        {/* Current GPS */}
        <button
          onClick={detectLocation}
          className="w-full flex items-center gap-3 p-2 rounded hover:bg-gray-100 mb-4"
        >
          <MdLocationPin /> Use my current location
        </button>

        <p className="font-medium mb-2">Saved locations</p>

        {locations.map(loc => (
          <div
            key={loc.address}
            onClick={() => { setLocation(loc); close(); }}
            className="cursor-pointer flex items-center gap-3 p-2 rounded hover:bg-gray-100"
          >
            <MdLocationPin /> {loc.address}
          </div>
        ))}

        <div className="mt-4 flex justify-between items-center p-2 rounded hover:bg-gray-100">
          <div className="flex items-center gap-2">
            <IoTime /> Deliver now
          </div>
          <span className="text-green-500 cursor-pointer">Schedule</span>
        </div>
      </div>
    </div>
  );
}
