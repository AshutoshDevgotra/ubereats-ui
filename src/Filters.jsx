import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdKeyboardArrowDown,MdOutlineStarOutline } from "react-icons/md";

const Filters = () => {
  return (
    <div className='p-4 flex gap-4 max-w-6xl   '>
        <button className="mb-2  px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2"> <MdOutlineLocalOffer /> Offers</button>
        <button className="mb-2  px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2">Delivery Fee <MdKeyboardArrowDown /></button>
        <button className="mb-2 px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2"><MdOutlineStarOutline />Rating</button>
        <button className="mb-2 px-4 py-1 bg-gray-200 rounded-full">Best Overall</button>
        <button className="mb-2 px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2">Sort <MdKeyboardArrowDown /></button>
    </div>
    
)
}
export default Filters;