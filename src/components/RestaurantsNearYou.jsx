import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { useSearchStore } from "../store/useSearchStore.js";
import { API_BASE_URL } from "../config.js";

const RestaurantsNearYou = () => {
  const [restaurants, setRestaurants] = useState([]);
  const query = useSearchStore((state) => state.query);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/restaurants`)
      .then(res => res.json())
      .then(data => {
        // sort by fastest delivery
        data.sort((a, b) => a.delivery_time - b.delivery_time);
        setRestaurants(data);
      });
  }, []);

  const navigate = useNavigate();

  const fuse = useMemo(() => {
    return new Fuse(restaurants, {
      keys: [
        { name: "name", weight: 1.0 },
        { name: "cuisine", weight: 0.7 },
        { name: "mood_tags", weight: 0.5 },
        { name: "menu.name", weight: 0.4 },
        { name: "menu.description", weight: 0.2 }
      ],
      threshold: 0.4,
    });
  }, [restaurants]);

  const displayedRestaurants = useMemo(() => {
    if (!query.trim()) return restaurants;
    return fuse.search(query).map(result => result.item);
  }, [query, restaurants, fuse]);

  return (
    <div className="px-10 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        {query ? `Search results for "${query}"` : "Restaurants Near You"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedRestaurants.map(r => (
          <div key={r._id} onClick={() => { console.log('navigate to store', r.slug); navigate(`/store/${r.slug}`); }} 
          role="button" tabIndex={0}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={`${API_BASE_URL}${r.cover_image}`}
              className="h-40 w-full object-cover"
              alt={r.name}
            />
            <div className="p-4">
              <h3 className="font-bold">{r.name}</h3>
              <p className="text-sm text-gray-500">{(r.cuisine || []).join(", ")}</p>
              <p className="mt-1 text-sm">
                ⭐ {r.rating} • ⏱ {r.delivery_time} mins{r.price_range ? ` • ${r.price_range}` : ''}
              </p>

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

        {displayedRestaurants.length === 0 && (
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center justify-center py-16 text-center">
            <span className="text-4xl mb-3" role="img" aria-label="search">🔍</span>
            <h3 className="text-lg font-bold text-gray-800">No restaurants found</h3>
            <p className="text-sm text-gray-500 max-w-xs mt-1">
              We couldn't find any results for "{query}". Try checking the spelling or searching for a different item.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantsNearYou;
