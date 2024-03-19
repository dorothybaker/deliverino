import { MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-[#161718]/90 text-white">
      <div className="max-w-7xl mx-auto w-full p-4 ">
        <div className="flex justify-between items-start flex-wrap whitespace-nowrap gap-4 border-b pb-2 border-gray-600">
          <div className="flex-1 flex flex-col gap-1">
            <h1>Discover More</h1>
            <ul className="text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-[#e4c590]">Investors</li>
              <li className="cursor-pointer hover:text-[#e4c590]">About Us</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Takeaway</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Newsroom</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Careers</li>
              <li className="cursor-pointer hover:text-[#e4c590]">
                Become a rider
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <h1>Useful Links</h1>
            <ul className="text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-[#e4c590]">Home</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Menu</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Payment</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Riders</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Location</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Pricing</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <h1>Legal</h1>
            <ul className="text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-[#e4c590]">
                Terms and Conditions
              </li>
              <li className="cursor-pointer hover:text-[#e4c590]">Privacy</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Cookies</li>
              <li className="cursor-pointer hover:text-[#e4c590]">
                Tax Strategy
              </li>
              <li className="cursor-pointer hover:text-[#e4c590]">
                Refund Policy
              </li>
              <li className="cursor-pointer hover:text-[#e4c590]">
                Advertisement
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <h1>Help</h1>
            <ul className="text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-[#e4c590]">
                Contact us
              </li>
              <li className="cursor-pointer hover:text-[#e4c590]">Cuisines</li>
              <li className="cursor-pointer hover:text-[#e4c590]">FAQs</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Brands</li>
              <li className="cursor-pointer hover:text-[#e4c590]">Delivery</li>
              <li className="cursor-pointer hover:text-[#e4c590]">
                Payment Methods
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-2 text-sm">
          <div className="flex items-center gap-1 my-0.5 text-gray-300">
            <MdLocationPin size={20} />
            <span>Restaurant St, Delicious City, London 9578, UK</span>
          </div>
          Copyright &copy; 2024 Deliverino All rights reserved.
        </div>
      </div>
    </div>
  );
}
