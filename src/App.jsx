import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./Footer";
import Cuisine from "./cuisine";
import Sidebar from "./SideBar";
import Filters from "./Filters";




const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">

      <Navbar />

      <div className="flex pt-16 min-w-0 px-10">

        <Sidebar />

        <div className="flex-1 min-w-0 overflow-hidden">
          <Cuisine />
          <Filters />
          <Hero />
          {/* <Footer /> */}
        </div>

      </div>
    </div>
  );
};

export default App;
