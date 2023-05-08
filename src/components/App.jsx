import "../css/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import { useState } from "react";

export default function App() {
  // State variables to determine which component to show
  const [showProductPage, setShowProductPage] = useState(true);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  // Function to show product page and hide shopping cart
  function showProducts() {
    setShowProductPage(true);
    setShowShoppingCart(false);
  }

  // Function to show shopping cart and hide product page
  function showCart() {
    setShowProductPage(false);
    setShowShoppingCart(true);
  }

  // Function to clear cart and show product page
  function clearCartAndShowProducts() {
    setShowProductPage(true);
    setShowShoppingCart(false);
    setCartItems([]);
  }

  return (
    <>
      <Navbar
        showProducts={showProducts}
        showCart={showCart}
        cartItemCount={cartItems.length}
      />
      <MainContent
        showProductPage={showProductPage}
        showShoppingCart={showShoppingCart}
        setCartItems={setCartItems}
        cartItems={cartItems}
        clearCartAndShowProducts={clearCartAndShowProducts}
      />
      <Footer />
    </>
  );
}
