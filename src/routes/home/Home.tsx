import Feature from "../../components/feature/Feature";
import Hero from "../../components/hero/Hero";
import Collection from "../../components/collection/Collection";
import TrendProducts from "../../components/trendProducts/TrendProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendProducts />
      <Feature />
      <Collection />
    </div>
  );
};

export default Home;
