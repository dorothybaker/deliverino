import OrderPage from "@/app/components/OrderPage";
import { client } from "@/sanity/lib/client";

const getData = async (id) => {
  const query = `*[_type == 'order' && _id == '${id}'][0]`;
  const order = await client.fetch(query);

  return order;
};

export default async function Home({ params: { id } }) {
  const order = await getData(id);

  return (
    <div>
      <OrderPage order={order} />
    </div>
  );
}
