import { ChevronRight } from "lucide-react";

const RightArrowButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-105 transition"
  >
    <ChevronRight />
  </button>
);

export default RightArrowButton;
