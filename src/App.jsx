import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./Footer";
import Cuisine from "./cuisine";
import Sidebar from "./SideBar";

const App = () => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">

      <Navbar />

      <div className="flex pt-16 ">
        <Sidebar />

        <div className="flex-1  w-full">
          <Cuisine />
          <Hero />
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;
