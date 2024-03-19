import OrderModal from "../components/OrderModal";

export default function Home() {
  return (
    <div className="min-h-[70vh]">
      <OrderModal opened={true} paymentMethod={1} />
    </div>
  );
}
