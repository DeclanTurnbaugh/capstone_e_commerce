import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h2>Welcome to E-Commerce</h2>
        <p>
          Discover amazing products and enjoy a seamless shopping experience.
        </p>
      </section>
      <section className="featured-products">
        <h3>Featured Products</h3>
        <FeaturedProducts />
      </section>
    </div>
  );
};

export default Home;
