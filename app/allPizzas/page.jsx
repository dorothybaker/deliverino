import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const getData = async () => {
  const query = '*[_type == "pizza"] | order(_createdAt desc)';
  const data = await client.fetch(query);

  return data;
};

export default async function Home() {
  const pizzas = await getData();

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <h1 className="text-2xl my-2 font-semibold">All our pizzas</h1>
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
