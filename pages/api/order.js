import { client } from "@/sanity/lib/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const newOrder = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "order",
            name: newOrder.name,
            phone: newOrder.phone,
            address: newOrder.address,
            total: newOrder.total,
            method: newOrder.method,
            status: 1,
          })
          .then((data) => res.status(200).json(data._id));
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Something went wrong in the server" });
      }
      break;

    default:
      break;
  }
}
