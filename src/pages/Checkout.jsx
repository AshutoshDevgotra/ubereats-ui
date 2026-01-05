import useCartStore from "../store/useCartStore";

function Checkout() {
  const { cart } = useCartStore();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const payNow = async () => {
    if (total < 1) return alert("Cart is empty");

    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    });

    const order = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "UberEats Clone",
      description: "Food Order",
      order_id: order.id,
      handler: async (response) => {
        await fetch("http://localhost:5000/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        alert("Payment Successful!");
      },
      theme: { color: "#000" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-10 max-w-xl mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.map((i) => (
        <div key={i._id} className="flex justify-between mb-2">
          <span>{i.name} × {i.qty}</span>
          <span>₹{i.price * i.qty}</span>
        </div>
      ))}

      <hr className="my-4" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button
        onClick={payNow}
        className="mt-6 w-full bg-green-600 text-white py-3 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;
