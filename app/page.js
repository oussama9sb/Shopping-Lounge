import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StoreList from "@/components/StoreList";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryList />
      <StoreList />
      <Footer />
    </div>
  );
};

export default Home;
