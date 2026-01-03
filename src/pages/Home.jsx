import Cuisine from "../cuisine";
import Filters from "../Filters";
import Hero from "../hero";
import SideBar from "../SideBar";
import Navbar from "../navbar";
import RestaurantsNearYou from "../components/RestaurantsNearYou";

const Home = () => {
  return (
    <div className="flex min-w-0 px-10">
    

      <div className="flex-1 min-w-0 overflow-hidden">
        <Cuisine />
        <Filters />
        <RestaurantsNearYou />

      </div>

    </div>
  );
};

export default Home;
