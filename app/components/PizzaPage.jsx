"use client";

import { urlForImage } from "@/sanity/lib/image";
import { useStore } from "@/store/store";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function PizzaPage({ pizza }) {
  const [price, setPrice] = useState(pizza?.price[1]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("medium");

  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({ ...pizza, price: price, quantity: qty, size: size });
    toast.success("Added to cart!");
  };

  return (
    <div className="flex gap-3 items-start sm:flex-row flex-col">
      <div className="flex-1 sm:h-[23rem] h-[330px]">
        <img
          src={urlForImage(pizza?.image)}
          alt=""
          className="w-max h-full object-cover block mx-auto rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{pizza?.name}</h1>
        <p className="text-gray-500 text-sm">{pizza?.details}</p>
        <span className="text-xl font-semibold">
          <span className="text-[#f54748]">$</span> {price.toFixed(2)}
        </span>
        <div className="flex gap-3 items-center text-sm">
          <button
            className={`${
              price === pizza?.price[0]
                ? "bg-[#f54748] text-white"
                : "bg-transparent text-[#f54748]"
            } border-2 border-[#f54748] py-1 px-3.5 rounded-full`}
            onClick={() => {
              setPrice(pizza?.price[0]);
              setSize("small");
            }}
          >
            Small
          </button>
          <button
            className={`${
              price === pizza?.price[1]
                ? "bg-[#f54748] text-white"
                : "bg-transparent text-[#f54748]"
            } border-2 border-[#f54748] py-1 px-3.5 rounded-full`}
            onClick={() => {
              setPrice(pizza?.price[1]);
              setSize("medium");
            }}
          >
            Medium
          </button>
          <button
            className={`${
              price === pizza?.price[2]
                ? "bg-[#f54748] text-white"
                : "bg-transparent text-[#f54748]"
            } border-2 border-[#f54748] py-1 px-3.5 rounded-full`}
            onClick={() => {
              setPrice(pizza?.price[2]);
              setSize("large");
            }}
          >
            Large
          </button>
        </div>
        <div className="flex w-[150px] item-center border divide-x h-10 rounded-md mt-2">
          <span
            className="flex-1 flex h-full w-full items-center justify-center cursor-pointer bg-gray-200"
            onClick={() => setQty((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            <FaMinus size={15} />
          </span>
          <span className="flex-2 flex h-full w-full items-center justify-center">
            {qty}
          </span>
          <span
            className="flex-1 flex h-full w-full items-center justify-center cursor-pointer bg-gray-200"
            onClick={() => setQty((prev) => prev + 1)}
          >
            <FaPlus size={15} />
          </span>
        </div>

        <button
          className="mt-3 bg-[#f54748] border border-[#f54748] text-white py-2 rounded-full"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
