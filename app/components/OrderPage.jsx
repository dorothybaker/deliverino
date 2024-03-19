"use client";
import { useEffect } from "react";
import moment from "moment";

export default function OrderPage({ order }) {
  useEffect(() => {
    if (order?.status > 3) {
      localStorage.clear();
    }
  }, [order]);
  return (
    <div className="flex flex-col gap-3 p-4 max-w-7xl mx-auto w-full">
      <h1 className="text-xl font-semibold border-b-2 border-dashed pb-2">
        Your Pizza Order
      </h1>
      <div className="text-gray-600 flex flex-col gap-2 text-[15px]">
        <span>Dear {order?.name},</span>
        <p>
          We are delighted to inform you that your order has been successfully
          placed and is being processed, which means you can't place another
          order until this order has been delivered.
        </p>
        <span>
          Thank you for choosing{" "}
          <span className="text-[#f54748] font-semibold">Deliverino</span>. Top
          quality Pizzas topped with a fast delivery!
        </span>
      </div>
      <div className="flex items-start gap-3 sm:flex-row flex-col">
        <div className="flex flex-1 flex-col gap-2 w-full">
          <h2 className="font-semibold border-b border-dashed pb-2 w-[90%]">
            Order details
          </h2>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Order ID</span>
            <span className="font-semibold">{order?._id}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Order Date</span>
            <span className="font-semibold">
              {moment(order?._createdAt).format("MMMM Do, YYYY")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Total Amount</span>
            <span className="font-semibold">${order?.total.toFixed(2)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Order Status</span>
            <span className="font-semibold">
              {order?.status === 1
                ? "Cooking"
                : order?.status === 2
                ? "On the way"
                : "Delivered"}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 w-full">
          <h2 className="font-semibold border-b border-dashed pb-2 w-[90%]">
            Delivery Information
          </h2>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Customer Name</span>
            <span className="font-semibold">{order?.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Phone Number</span>
            <span className="font-semibold">
              {order?.phone.replaceAll(" ", "")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Delivery Address</span>
            <span className="font-semibold">{order?.address}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Payment</span>
            <span className="font-semibold">
              {order?.method === 0 ? (
                <span className="text-orange-500">On Delivery</span>
              ) : (
                <span className="text-green-500">Completed</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
