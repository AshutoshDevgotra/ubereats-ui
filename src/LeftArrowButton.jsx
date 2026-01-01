import { ChevronLeft } from "lucide-react";

const LeftArrowButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 mx-2 bg-white shadow-md rounded-full p-2 hover:scale-105 transition"
  >
    <ChevronLeft />
  </button>
);

export default LeftArrowButton;
