import { client } from "@/sanity/lib/client";
import PizzaPage from "../../components/PizzaPage";

const getData = async (slug) => {
  const query = `*[_type == 'pizza' && slug.current == '${slug}'][0]`;
  const data = await client.fetch(query);

  return data;
};

export default async function Home({ params: { slug } }) {
  const data = await getData(slug);

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <PizzaPage pizza={data} />
    </div>
  );
}
