import {useCartStore} from "../store/useCartStore";

 function Checkout() {
  const { cart } = useCartStore();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.map(i => (
        <div key={i.id} className="flex justify-between mb-2">
          <span>{i.name} × {i.qty}</span>
          <span>₹{i.price * i.qty}</span>
        </div>
      ))}
      <hr className="my-4"/>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <button className="mt-6 w-full bg-green-600 text-white py-3 rounded">
        Pay Now
      </button>
    </div>
  );
}
export default Checkout;