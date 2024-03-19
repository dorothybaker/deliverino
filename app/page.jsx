import Featured from "./components/Featured";
import FeaturedPizzas from "./components/FeaturedPizzas";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedPizzas />
      <Featured />
    </>
  );
}
