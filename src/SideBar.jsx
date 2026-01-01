import React from 'react'
import { useState } from "react";
import {
  AiOutlineHome, AiFillHome,
  AiOutlineShop, AiFillShop,
  AiOutlineShopping, AiFillShopping,
  AiOutlineTag,
  AiFillTag,
} from "react-icons/ai";
import { LiaCapsulesSolid } from "react-icons/lia";
import { FaCapsules } from "react-icons/fa6";
import { TbApple,TbAppleFilled } from "react-icons/tb";
import {
  MdOutlineLocalPharmacy,
  MdLocalPharmacy,
  MdOutlinePets,
  MdPets,
  
  MdOutlineChildCare,
  MdChildCare
} from "react-icons/md";
import { PiBeerBottleBold ,PiBeerBottleFill} from "react-icons/pi";
import { RiFlowerLine} from "react-icons/ri";
import { RiFlowerFill } from "react-icons/ri";
import { HiOutlineCpuChip ,HiMiniCpuChip } from "react-icons/hi2";


import { FaRegHeart,FaHeart } from "react-icons/fa6";


const SideBar = () => {
  const [active, setActive] = useState("home");
  const menu = [
  { id: "home", label: "Home", outline: AiOutlineHome, fill: AiFillHome },

  { id: "grocery", label: "Grocery", outline: TbApple, fill: TbAppleFilled },

  { id: "convenience", label: "Convenience", outline: AiOutlineShop, fill: AiFillShop },

  { id: "alcohol", label: "Alcohol", outline: PiBeerBottleBold, fill: PiBeerBottleFill },

  { id: "health", label: "Health", outline: LiaCapsulesSolid, fill: FaCapsules },

  { id: "retail", label: "Retail", outline: AiOutlineShopping, fill: AiFillShopping },

  { id: "pet", label: "Pet", outline: MdOutlinePets, fill: MdPets },

  { id: "flowers", label: "Flowers", outline: RiFlowerLine, fill: RiFlowerFill },

  { id: "baby", label: "Baby", outline: MdOutlineChildCare, fill: MdChildCare },

  { id: "personal-care", label: "Personal Care", outline: FaRegHeart, fill: FaHeart },

  { id: "electronics", label: "Electronics", outline: HiOutlineCpuChip, fill: HiMiniCpuChip },

  { id: "offers", label: "Offers", outline: AiOutlineTag, fill: AiFillTag },
];
 return (
    <div className="flex ">
  {/* Sidebar */}
  <aside className="h-screen w-full bg-white overflow-y-auto scrollbar-hide">

      <div className="p-3">
        {menu.map((item) => {
          const Icon = active === item.id ? item.fill : item.outline;

          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition 
                ${active === item.id 
                ? "bg-black text-white" 
                : "text-gray-600 hover:bg-gray-100"}`}
            >
              <Icon className="text-lg" />
              <span className="font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </aside>

    </div>
  )
}

export default SideBar 