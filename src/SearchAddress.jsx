import { MdLocationPin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { IoTime } from "react-icons/io5";

export default function SearchAddress({ close, setLocation }) {
  const locations = ["Mississauga, ON", "Toronto, ON", "Brampton, ON"];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-105 rounded-xl p-5">

        <div className="flex justify-between items-center  mx-2 my-2">
          <h2 className="font-bold text-lg">Addresses</h2>
          <button onClick={close} className="text-xl"><ImCross className="text-xs mx-2 hover:cursor-pointer" /></button>
        </div>
{/* search icon inside input of location model */}
<div className="flex items-center justify-center ">
<IoSearch className="text-2xl    "/>
        <input
          placeholder="Search for an address"
          className="w-full border rounded-full px-4 py-2  border-none focus:outline-none"
        />
</div >

        <p className="font-medium mb-2">Saved addresses</p>

        {locations.map((loc) => (
          <div
            key={loc}
            onClick={() => {
              setLocation(loc);
              close();
            }}
            className="cursor-pointer flex items-center gap-3 p-2 rounded hover:bg-gray-100"
          >
            <MdLocationPin /> {loc}
          </div>
        ))}

        <div className="mt-4 flex justify-between items-center p-2 rounded hover:bg-gray-100">
          <div className="flex items-center justify-center gap-2">
          <IoTime />
          Deliver now 
          </div>
          <span className="text-green-500 cursor-pointer">Schedule</span>
        </div>

      </div>
    </div>
  );
}
