"use client";

import { Modal } from "@mantine/core";
import { useState } from "react";
import { useOrder } from "../hooks/useOrder";
import toast from "react-hot-toast";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function OrderModal({ opened, setOpened, paymentMethod }) {
  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const resetCart = useStore((state) => state.resetCart);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const id = await useOrder({ name, phone, address, total, paymentMethod });
      if (id) {
        toast.success("Order successfully placed!");

        setName("");
        setPhone("");
        setAddress("");
        setLoading(false);

        resetCart();
        typeof window !== "undefined" && localStorage.setItem("order", id);
        router.push(`/order/${id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        centered
        title="Place Your Order"
        opened={opened}
        onClose={() => setOpened(null)}
      >
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Your full name"
            required
            className="border h-12 outline-none flex items-center justify-center w-full rounded-lg p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your phone number"
            required
            className="border h-12 outline-none flex items-center justify-center w-full rounded-lg p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Your delivery address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="h-[100px] outline-none flex items-center justify-center w-full rounded-lg p-2 border"
          ></textarea>

          {paymentMethod === 1 ? (
            <span>
              You have paid{" "}
              <span className="text-[#f54748] text-lg font-semibold">
                ${total}
              </span>
              .{" "}
            </span>
          ) : (
            <span>
              You will pay{" "}
              <span className="text-[#f54748] text-lg font-semibold">
                ${total}
              </span>{" "}
              on delivery!
            </span>
          )}
          <button
            className="bg-[rgb(59,208,59)] text-white py-2 rounded-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting" : "Place Order"}
          </button>
        </form>
      </Modal>
    </>
  );
}
