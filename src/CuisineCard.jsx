const CuisineCard = ({ name, img }) => {
  return (
    <div className="flex flex-1 items-center cursor-pointer overflow-hidden px-2 flex-col">
      <img src={img} alt={name} className="w-12 h-12 object-contain" />
      <p className=" text-xs text-center whitespace-nowrap">{name}</p>
    </div>
  );
};

export default CuisineCard;
