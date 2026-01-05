import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import  useCartStore  from "../store/useCartStore";

export default function Store() {
  const { slug } = useParams();
  const [store, setStore] = useState(null);

  const addItem = useCartStore(state => state.addItem);
const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/restaurants/store/${slug}`)
      .then(res => res.json())
      .then(setStore);
  }, [slug]);

  if (!slug) return null;
  if (!store) return <div className="p-10">Store not found.</div>;

  return (
    <>
      <Navbar />

      <div className="px-10 pt-20">
        <div className="relative h-64 rounded-xl overflow-hidden">
          <img
            src={`http://localhost:5000${store.cover_image}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end p-6">
            <div className="text-white">
              <h1 className="text-3xl font-bold">{store.name}</h1>
              <p>{store.address}</p>
              <p className="text-sm mt-1">
                ⭐ {store.rating} • ⏱ {store.delivery_time} mins • {store.price_range}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Menu</h2>

        <div className="grid grid-cols-3 gap-6">
          {store.menu.map(item => (
            <div key={item._id} className="border rounded-xl overflow-hidden bg-white">
              <img
                src={`http://localhost:5000${item.image}`}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>

                <div className="flex items-center justify-between mt-3">
                  <p className="font-semibold">₹{item.price}</p>
                  <button
  onClick={() => {
    addItem(item, store.slug);
    setToast(`${item.name} added`);
    setTimeout(() => setToast(null), 1500);
  }}
  className="bg-black text-white px-3 py-1 rounded hover:scale-105 transition"
>
  + Add
</button>

{toast && (
  <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-xl animate-bounce">
    {toast}
  </div>
)}


                </div>

                <div className="mt-2 text-xs text-gray-500">
                  {item.veg && "🌱 Veg"} {item.spicy && "🌶 Spicy"}
                  {item.bestseller && (
                    <span className="ml-2 text-orange-500">⭐ Bestseller</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
