import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  store: null,

  addItem: (item, store) => {
    const { cart, store: activeStore } = get();

    // Switching restaurant resets cart
    if (activeStore && activeStore !== store) {
      set({ cart: [], store });
    }

    const exists = cart.find(i => i._id === item._id);

    if (exists) {
      set({
        cart: cart.map(i =>
          i._id === item._id ? { ...i, qty: i.qty + 1 } : i
        )
      });
    } else {
      set({ cart: [...cart, { ...item, qty: 1 }], store });
    }
  },

  removeItem: id => set({ cart: get().cart.filter(i => i._id !== id) }),
  clearCart: () => set({ cart: [], store: null })
}));
