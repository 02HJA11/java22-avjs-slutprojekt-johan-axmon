import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";

export default function MainContent({
  showProductPage,
  showShoppingCart,
  cartItems,
  setCartItems,
  clearCartAndShowProducts,
}) {
  //Function that adds an item to the cartItems array by updating the state using setCartItems
  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  // Function that clears thhe cartItems array by updating the state using setCartItems
  function clearCart() {
    setCartItems([]);
  }

  // If showProductPage is true, render the ProductPage component and pass the addToCart function as a prop.
  // If showShoppingCart is true, render the ShoppingCart component and pass the cartItems, clearCart, setCartItems, and clearCartAndShowProducts functions as props

  return (
    <>
      {showProductPage && <ProductPage addToCart={addToCart} />}
      {showShoppingCart && (
        <ShoppingCart
          cartItems={cartItems}
          clearCart={clearCart}
          setCartItems={setCartItems}
          clearCartAndShowProducts={clearCartAndShowProducts}
        />
      )}
    </>
  );
}
