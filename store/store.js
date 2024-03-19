import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      cart: { pizzas: [] },
      addPizza: (data) =>
        set((state) => {
          const existingPizza = state.cart.pizzas.find(
            (pizza) => pizza._id === data._id && pizza.size === data.size
          );
          if (existingPizza) {
            const updatedPizzas = state.cart.pizzas.map((pizza) =>
              pizza._id === data._id && pizza.size === data.size
                ? { ...pizza, quantity: pizza.quantity + data.quantity }
                : pizza
            );
            return { cart: { pizzas: updatedPizzas } };
          } else {
            return { cart: { pizzas: [...state.cart.pizzas, { ...data }] } };
          }
        }),
      removePizza: (id, size) =>
        set((state) => ({
          cart: {
            pizzas: state.cart.pizzas.filter(
              (pizza) => !(pizza._id === id && pizza.size === size)
            ),
          },
        })),
      getPizzas: () => get().cart.pizzas,
      resetCart: () => set(() => ({ cart: { pizzas: [] } })),
    }),
    { name: "cart-storage" }
  )
);
