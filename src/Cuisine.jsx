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
    <div className="relative w-full overflow-hidden items-center px-12">

   

      {/* LEFT ARROW */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
        <LeftArrowButton onClick={() => scroll("left")} />
      </div>

      {/* SCROLL ROW */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory min-w-0 max-w-full"
      >
        {cuisines.map((item) => (
          <div key={item.id} className="shrink-0 snap-start min-w-0">
            <CuisineCard name={item.name} img={item.img} />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <RightArrowButton onClick={() => scroll("right")} />
      </div>

    </div>
  );
};

export default Cuisine;
