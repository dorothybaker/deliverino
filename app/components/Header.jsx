"use client";

import { useStore } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MdLocationPin,
  MdOutlineCall,
  MdOutlineMail,
  MdOutlineShoppingBag,
  MdReceiptLong,
} from "react-icons/md";

import { useState, useEffect } from "react";

export default function Header() {
  const pizzas = useStore((state) => state.cart.pizzas);
  const items = pizzas.length;

  const router = useRouter();
  const [order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, [router]);

  return (
    <div>
      <div className="border-b border-gray-100">
        <div className="p-2 md:flex justify-between text-xs gap-1 max-w-7xl w-full mx-auto hidden">
          <div className="flex items-center justify-center gap-1">
            <MdLocationPin size={18} />
            <span>Restaurant St, Delicious City, London 9578, UK</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <MdOutlineCall size={18} />
              +123&ndash;456&ndash;7890
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineMail size={18} />
              <span>deliverino@contact.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex justify-between items-center p-4">
          <h1 className="text-2xl flex-1 font-semibold w-max">
            <Link href="/">Deliverino</Link>
          </h1>
          <ul className="sm:flex hidden justify-center items-center gap-3 flex-2">
            <li className="cursor-pointer hover:text-[#f54748]">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#f54748]">Services</li>
            <li className="cursor-pointer hover:text-[#f54748] w-max">
              <Link href="/allPizzas">Menu</Link>
            </li>
            <li className="cursor-pointer hover:text-[#f54748]">Contact</li>
          </ul>
          <div className="flex-1 flex justify-end gap-2 items-center">
            <div
              className="cursor-pointer relative"
              onClick={() => router.push("/cart")}
            >
              <MdOutlineShoppingBag size={29} />
              <div className="h-5 w-5 text-xs flex justify-center items-center bg-[#f54748] text-white font-semibold rounded-full absolute -top-1.5 -right-1.5">
                {items}
              </div>
            </div>
            {order && (
              <div
                className="cursor-pointer relative"
                onClick={() => router.push(`/order/${order}`)}
              >
                <MdReceiptLong size={29} />
                <div className="h-5 w-5 text-xs flex justify-center items-center bg-[#f54748] text-white font-semibold rounded-full absolute -top-1.5 -right-1.5">
                  {order !== "" && 1}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
