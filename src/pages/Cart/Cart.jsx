import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Auth/AuthContext";
import { useCart } from "../../components/CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart, clearCart, updateQuantity, setCart } = useCart();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user, navigate]);

  const calculateTotalCost = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout");
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncrement = (index) => {
    updateQuantity(cart[index].id, cart[index].quantity + 1);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    const updatedItem = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity - 1,
    };

    if (updatedItem.quantity === 0) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index] = updatedItem;
    }
    setCart(updatedCart);
    updateQuantity(updatedItem.id, updatedItem.quantity);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 || cart.every((item) => item.quantity === 0) ? (
        <div>Your cart is empty.</div>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-container">
            {cart.map((item, index) => {
              if (item.quantity > 0) {
                return (
                  <div key={index} className="cart-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-product-image"
                    />
                    <div className="product-details">
                      <h3 className="cart-product-title">{item.title}</h3>
                      <p className="product-price">Price: ${item.price}</p>
                      <div className="quantity-controls">
                        <button
                          className="decrement-button"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity || 1}</span>
                        <button
                          className="increment-button"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Cost: ${calculateTotalCost()}</p>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}

      <button className="clear-cart-button" onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
