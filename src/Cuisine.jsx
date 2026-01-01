import { cuisines } from "/src/data/cuisines";
import { useRef } from "react";
import CuisineCard from "./CuisineCard";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";

const Cuisine = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-300 scrollbar-hide   px-2">


      {/* Left Button */}
      <LeftArrowButton onClick={() => scroll("left")} />

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {cuisines.map((item) => (
          <div key={item.id} className="shrink-0 w-fit snap-start">
            <CuisineCard name={item.name} img={item.img} />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <RightArrowButton onClick={() => scroll("right")} />
    </div>
  );
};

export default Cuisine;
