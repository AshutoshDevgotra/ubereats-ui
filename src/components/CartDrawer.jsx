
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";

 export default function CartDrawer({ open, onClose }) {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="p-4 border-b flex justify-between">
        <h2 className="font-bold text-lg">Your Cart</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[75%]">
        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(i => (
          <div key={i._id} className="flex justify-between border p-2 rounded">
            <div>
              <p className="font-semibold">{i.name}</p>
              <p>₹{i.price} × {i.qty}</p>
            </div>
            <p className="font-bold">₹{i.price * i.qty}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 w-full bg-black text-white py-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

