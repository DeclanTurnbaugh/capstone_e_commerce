import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Auth/AuthContext";
import { useCart } from "../../components/CartContext/CartContext";
import Rating from "../../components/Rating/Rating";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useAuth();
  const { updateCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  const handleAddToCart = () => {
    if (!user) {
      console.log("User not logged in. Redirecting to login page.");
      navigate("/login");
      return;
    }
    updateCart(product);
    console.log("Added to cart:", product);
    navigate("/cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>
          Rating: {<Rating rating={product.rating.rate} />}
          {product.rating.rate} stars ({product.rating.count} reviews)
        </p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
      </div>
      <div className="add-to-cart-container">
        <div className="product-price">
          <p>Price: ${product.price}</p>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
