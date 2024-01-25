import { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [initMinPrice, setInitMinPrice] = useState(0);
  const [initMaxPrice, setInitMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(7);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const prices = data.map((product) => product.price);
        setInitMinPrice(Math.min(...prices));
        setInitMaxPrice(Math.max(...prices));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const clonedProducts = [...products];

    const filteredProducts =
      selectedCategory === "all"
        ? clonedProducts
        : clonedProducts.filter(
            (product) => product.category === selectedCategory
          );

    const priceFilteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= parseFloat(minPrice) &&
        product.price <= parseFloat(maxPrice)
    );

    switch (sortOrder) {
      case "lowestToHighest":
        priceFilteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "highestToLowest":
        priceFilteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "alphabetical":
        priceFilteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep default order
        break;
    }

    setSortedProducts(priceFilteredProducts);
  }, [products, sortOrder, minPrice, maxPrice, selectedCategory]);

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="shop-container">
      <section className="sidebar">
        <div className="filters">
          <label>Category:</label>
          <select onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>

          <label>Sort by:</label>
          <select onChange={(e) => handleSortChange(e.target.value)}>
            <option value="default">Default</option>
            <option value="lowestToHighest">Price: Lowest to Highest</option>
            <option value="highestToLowest">Price: Highest to Lowest</option>
            <option value="alphabetical">Alphabetical</option>
          </select>

          <label>Price Range:</label>
          <input
            type="range"
            min={Math.floor(initMinPrice)}
            max={Math.ceil(initMaxPrice)}
            step="1"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="range"
            min={Math.floor(initMinPrice)}
            max={Math.ceil(initMaxPrice)}
            step="1"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          {"Min: " + minPrice + " : " + "Max: " + maxPrice}
        </div>
      </section>

      <section className="product-list">
        <div>
          <h3>All Products</h3>
          <ProductList
            products={sortedProducts.length > 0 ? sortedProducts : products}
          />
        </div>
      </section>
    </div>
  );
};

export default Shop;
