import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <h3 className="product-title">{product.title}</h3>
        <img
          className="product-image-card"
          src={product.image}
          alt={product.title}
        />
        <Rating rating={product.rating.rate} />
      </div>
    </Link>
  );
};

export default ProductCard;
