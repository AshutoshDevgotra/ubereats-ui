import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Store = () => {
  const { slug } = useParams();
  const [store, setStore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (!slug) {
      return;
    }

    isMountedRef.current = true;

    fetch(`http://localhost:5000/api/restaurants/store/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMountedRef.current) {
          setStore(data);
          setIsLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMountedRef.current) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMountedRef.current = false;
    };
  }, [slug]);

  if (isLoading) return <div className="p-10">Loading store...</div>;
  if (error) return <div className="p-10 text-red-500">Error: {error}</div>;
  if (!store) return <div className="p-10">Store not found.</div>;

  return (
    <div className="px-10 py-8">
      <img
        src={`http://localhost:5000${store.cover_image}`}
        className="h-64 w-full object-cover rounded-xl"
        alt={`${store.name} cover`}
      />

      <h1 className="text-3xl font-bold mt-4">{store.name}</h1>
      <p className="text-gray-500">{store.address}</p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {(store.menu || []).length === 0 && (
          <p className="col-span-3 text-gray-500">No items available.</p>
        )}

        {(store.menu || []).map((item) => (
          <div key={item._id} className="border rounded-xl p-4">
            <img
              src={`http://localhost:5000${item.image}`}
              className="h-32 w-full object-cover rounded"
              alt={item.name}
            />
            <h3 className="font-bold mt-2">{item.name}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="font-semibold mt-2">₹{item.price}</p>
            <button className="mt-2 w-full bg-black text-white py-2 rounded">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
