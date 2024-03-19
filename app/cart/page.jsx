"use client";

import { urlForImage } from "@/sanity/lib/image";
import { useStore } from "@/store/store";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  const pizzaData = useStore((state) => state.cart.pizzas);

  const removePizza = useStore((state) => state.removePizza);

  const total = () => {
    return pizzaData.reduce((a, b) => a + b.quantity * b.price, 0);
  };

  const [paymentMethod, setPaymentMethod] = useState(null);
  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" &&
      localStorage.setItem("total", total().toFixed(2));
  };

  const handleCheckout = async () => {
    typeof window !== "undefined" &&
      localStorage.setItem("total", total().toFixed(2));
    setPaymentMethod(1);

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pizzaData),
    });
    if (response.status === 500) return;

    const data = await response.json();
    toast.loading("Redirecting to checkout!");
    router.push(data.url);
  };

  const [order, setOrder] = useState("");
  useEffect(() => {
    typeof window !== "undefined" && setOrder(localStorage.getItem("order"));
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <div className="flex items-start gap-3 sm:flex-row flex-col">
        <div className="flex flex-col gap-3 divide-y lg:flex-3 flex-2 w-full">
          {pizzaData.length > 0 ? (
            pizzaData.map((pizza) => (
              <div
                key={pizza?._id}
                className="flex items-start gap-2 pt-3 sm:flex-row flex-col"
              >
                <div>
                  <div className="h-[140px] w-[150px]">
                    <img
                      src={urlForImage(pizza?.image)}
                      alt="pizzaImage"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h1 className="font-semibold text-lg sm:line-clamp-none line-clamp-1">
                    {pizza?.name}
                  </h1>
                  <span className="text-sm text-gray-500 line-clamp-2">
                    {pizza?.details}
                  </span>
                  <div className="flex gap-3 items-center text-sm">
                    <span className="capitalize">
                      Size: <span className="font-semibold">{pizza?.size}</span>
                    </span>
                    <span>
                      Qty:{" "}
                      <span className="font-semibold">{pizza?.quantity}</span>
                    </span>
                  </div>
                  <span className="text-sm">
                    Unit Price:{" "}
                    <span className="font-semibold">
                      $ {pizza?.price.toFixed(2)}
                    </span>
                  </span>
                  <div className="flex gap-3 items-center justify-between">
                    <span className="font-semibold">
                      <span className="text-[#f54748]">$</span>{" "}
                      {(pizza?.price * pizza?.quantity).toFixed(2)}
                    </span>
                    <div
                      className="text-white bg-[#f54748] rounded-full p-1 cursor-pointer"
                      onClick={() => removePizza(pizza?._id, pizza?.size)}
                    >
                      <MdDelete size={17} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="min-h-[400px] flex justify-center items-center text-xl text-gray-500 h-full">
              <span>No pizzas in your cart.</span>
            </div>
          )}
        </div>
        <div className="flex-1 w-full">
          <span className="text-xl font-semibold">Payment Details</span>
          <div className="p-2 border rounded-lg flex flex-col gap-3">
            <h1>
              Items <span className="text-[#f54748]">({pizzaData.length})</span>
            </h1>
            <div className="flex justify-between items-center gap-3">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between items-center gap-3 text-lg font-semibold">
              <span>Total</span>
              <span>
                <span className="text-[#f54748]">$</span>
                {total().toFixed(2)}
              </span>
            </div>
            {order === null && (
              <div className="flex justify-between gap-3 items-center mt-3">
                <button
                  className="bg-transparent rounded-xl text-[#f54748] border border-[#f54748] flex-1 p-2 text-sm font-semibold"
                  onClick={handleOnDelivery}
                  disabled={pizzaData.length < 1}
                >
                  Pay on Delivery
                </button>
                <button
                  disabled={pizzaData.length < 1}
                  className="bg-[#f54748] rounded-xl text-white border border-[#f54748] flex-1 p-2 text-sm"
                  onClick={handleCheckout}
                >
                  Pay Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <OrderModal
        opened={paymentMethod === 0}
        setOpened={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
    </div>
  );
}
