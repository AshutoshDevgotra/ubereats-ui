import { useState } from "react";
import LoginButton from "./loginButton.jsx";
import SignupButton from "./SignupButton.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DeliveryPickupToggle from "./DeliveryPickupToggle.jsx";
import { LuShoppingCart } from "react-icons/lu";
import GetLocation from "./GetLocation.jsx";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar.js";
import { useAuthStore } from "./store/useAuthStore";
import { Link } from "react-router-dom";
import { useCartStore } from "./store/useCartStore";


const Navbar = () => {
  const user = useAuthStore(state => state.user);

  const cart = useCartStore(state => state.cart);

  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState("Enter your location");
  return (
    // Navbar container

    <div className="flex fixed inset-x-0 top-0 bg-white items-center space-x-2 p-3 justify-between z-50 px-10">

      <div className="flex items-center gap-5 ">

        <div className="hover:bg-gray-200 px-2 py-2 rounded-full">
        {/* hamburger menu */}
          <GiHamburgerMenu className="text-xl" />
        </div>
{/* logo */}
<Link href="/home">

       <div className="flex items-center gap-1">
          <span className="text-xl font-medium">Uber</span>
          <span className="text-xl font-bold">Eats</span>
       </div>
      </Link>
{/* Delivery Pickup Toggle */}

      <DeliveryPickupToggle />

      
      

      {/*Search Delivery location */}

      <div className="flex items-center whitespace-nowrap gap-2 justify-center">
        {/* location icon */}

        <FaLocationDot />
        <button
  readOnly
  onClick={() => setOpenLocation(true)}
  
  className=" px-1  py-2  focus:outline-none"
>
  {location}
</button>
</div>
       
</div>

      {/* search bar */}
<SearchBar />
{/* get ride */}
<div className="flex items-center gap-6 ">
{user ? (
  <Link to="/cart">
    <button className="relative text-xl px-4 py-1">
      <LuShoppingCart />

      {cart.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cart.reduce((a, b) => a + b.qty, 0)}
        </span>
      )}
    </button>
  </Link>
) : (
  <>
    <LoginButton />
    <SignupButton />
  </>
)}



        
      </div>
      



      {openLocation && (
  <GetLocation
    close={() => setOpenLocation(false)}
    setLocation={setLocation}
  />
)}
    </div>
  );
};

export default Navbar;
