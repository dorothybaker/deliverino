import { MdOutlineCall } from "react-icons/md";

export default function Hero() {
  return (
    <div className="bg-[url('https://yum.co.ke/static/img/pizza_image.jpg?5a325bf0aea3')]">
      <div className="w-full sm:min-h-[500px] min-h-[450px] bg-black/40 flex items-center justify-center">
        <div className="p-4 pt-0 max-w-7xl w-full mx-auto">
          <div className="flex flex-col gap-4 flex-1">
            <span className="text-[#e4c590] font-semibold">
              More faster than ever
            </span>
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold text-white">
              We are fastest <br /> In delivering your{" "}
              <span className="text-[#f54748]">Pizza</span>
            </h1>
            <p className="text-gray-200 lg:w-[60%]">
              Our mission is to filling your tummy with delicious food, topped
              with fast and free delivery!
            </p>
            <button className="text-white bg-[#f54748] px-3 py-2 rounded-lg w-max">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
