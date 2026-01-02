import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



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

  const navigate = useNavigate();

  return (
    <div className="px-10 mt-10">
      <h2 className="text-2xl font-bold mb-6">Restaurants Near You</h2>

      <div className="grid grid-cols-4 gap-6">
        {restaurants.map(r => (
          <div key={r._id} onClick={() => { console.log('navigate to store', r.slug); navigate(`/store/${r.slug}`); }} 
          role="button" tabIndex={0}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={`http://localhost:5000${r.cover_image}`}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{r.name}</h3>
              <p className="text-sm text-gray-500">{(r.cuisine || []).join(", ")}</p>
              <p className="mt-1 text-sm">
                ⭐ {r.rating} • ⏱ {r.delivery_time} mins{r.price_range ? ` • ${r.price_range}` : ''}
              </p>

              {/* Menu preview */}
              <div className="mt-3">
                <p className="text-sm font-medium">Menu:</p>
                <div className="flex gap-3 mt-2">
                  {(r.menu || []).slice(0,2).map(item => (
                    <div key={item._id || item.name} className="w-28">
                      <img src={`http://localhost:5000${item.image}`} className="h-16 w-full object-cover rounded" alt={item.name} />
                      <p className="text-xs truncate">{item.name}</p>
                      <p className="text-xs font-semibold">₹{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews preview */}
              <div className="mt-3 text-sm text-gray-600">
                <p>{r.total_reviews || (r.reviews && r.reviews.length) ? `${r.total_reviews || r.reviews.length} reviews` : ''}</p>
                {r.reviews && r.reviews[0] && (
                  <blockquote className="mt-2 text-xs italic text-gray-500">“{r.reviews[0].comment}” — {r.reviews[0].rating}★</blockquote>
                )}
              </div>

              <div className="mt-3 flex gap-2">
                <button onClick={(e) => { e.stopPropagation(); navigate(`/store/${r.slug}`); }} className="text-sm underline">View Store</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsNearYou;
