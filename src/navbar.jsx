import { useState } from "react";
import LoginButton from "./loginButton.jsx";
import SignupButton from "./SignupButton.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DeliveryPickupToggle from "./DeliveryPickupToggle.jsx";
import { LuShoppingCart } from "react-icons/lu";
import SearchAddress from "./SearchAddress.jsx";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar.js";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState("Enter your location");
  return (
    // Navbar container
    
    <div className="flex  fixed right-0 top-0 left-0 bg-white  items-center space-x-2 p-3 justify-between z-50">

      <div className="flex items-center gap-5 mx-5">

        <div className="hover:bg-gray-200 px-2 py-2 rounded-full">
        {/* hamburger menu */}
          <GiHamburgerMenu className="text-2xl" />
        </div>
{/* logo */}
       <div className="flex items-center gap-1">
          <span className="text-2xl font-medium">Uber</span>
          <span className="text-2xl font-bold">Eats</span>
       </div>
      
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
<div className="flex items-center gap-6">
{!isLoggedIn && (
  <div className="hover:underline cursor-pointer flex items-center gap-3">
    Get a Ride <FaArrowUpRightFromSquare />
  </div>
)}
{/* loggedin then cart in navbar */}
        {isLoggedIn ? (
          <button className="text-2xl  px-4 py-1 ">
            <LuShoppingCart />
          </button>
        ) : (
          <>
            <LoginButton onLogin={() => setIsLoggedIn(true)}  />
            <SignupButton onSignup={() => setIsLoggedIn(true)} />
          </>
        )}
        
      </div>
      



      {openLocation && (
  <SearchAddress
    close={() => setOpenLocation(false)}
    setLocation={setLocation}
  />
)}
    </div>
  );
};

export default Navbar;
