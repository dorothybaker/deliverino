import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const getData = async () => {
  const query = '*[_type == "pizza"][0...4] | order(_createdAt desc)';
  const data = await client.fetch(query);

  return data;
};

export default async function FeaturedPizzas() {
  const pizzas = await getData();

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <div className="flex sm:gap-1 justify-between items-end sm:flex-row flex-col gap-0">
        <div className="flex flex-col font-semibold">
          <span className="text-sm text-[#f54748] uppercase">our menu</span>
          <h1 className="text-2xl">Featured Menu Items</h1>
          <span className="text-gray-500 font-normal text-sm">
            Try one of our top pizzas and taste heaven on earth!
          </span>
        </div>
        <Link
          href={"/allPizzas"}
          className="flex items-center gap-1 w-max text-sm text-[#f54748] font-semibold"
        >
          <span>See All</span>
          <FaArrowRight size={11} />
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-2">
        {pizzas?.map((pizza) => (
          <div key={pizza?._id} className="shadow-sm rounded-lg">
            <Link href={`/pizza/${pizza?.slug?.current}`}>
              <div className="h-[16rem]">
                <img
                  src={urlForImage(pizza?.image)}
                  alt="pizzaImage"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col p-1 font-semibold">
                <h1 className="text-[17px] line-clamp-1">{pizza?.name}</h1>
                <span className="text-sm">
                  <span className="text-[#f54748]">$</span>{" "}
                  {pizza?.price[1]?.toFixed(2)}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
