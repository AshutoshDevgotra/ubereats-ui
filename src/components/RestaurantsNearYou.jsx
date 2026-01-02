import { useEffect, useState } from "react";

const RestaurantsNearYou = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then(res => res.json())
      .then(data => {
        // sort by fastest delivery
        data.sort((a, b) => a.delivery_time - b.delivery_time);
        setRestaurants(data);
      });
  }, []);

  return (
    <div className="px-10 mt-10">
      <h2 className="text-2xl font-bold mb-6">Restaurants Near You</h2>

      <div className="grid grid-cols-4 gap-6">
        {restaurants.map(r => (
          <div key={r._id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={`http://localhost:5000${r.cover_image}`}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{r.name}</h3>
              <p className="text-sm text-gray-500">{r.cuisine.join(", ")}</p>
              <p className="mt-1 text-sm">
                ⭐ {r.rating} • ⏱ {r.delivery_time} mins
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsNearYou;
