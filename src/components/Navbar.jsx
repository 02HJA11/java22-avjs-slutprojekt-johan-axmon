import "../css/Navbar.css";

export default function Navbar({ showProducts, showCart, cartItemCount }) {
  // Two clickable element to that shows either ProductPage or ShoppingCart, "Varukorg" also displays the number of items
  return (
    <>
      <nav className="navbar">
        <p className="navbar-p" onClick={showProducts}>
          Produkter
        </p>
        <p className="navbar-p" onClick={showCart}>
          Varukorg ({cartItemCount})
        </p>
      </nav>
    </>
  );
}
