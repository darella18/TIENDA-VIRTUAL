import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import "../styles/navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { logout } = useContext(AuthContext);

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <h2>
          TechZone
        </h2>
      </div>

      <div className="navbar-links">

        <Link to="/">
          Inicio
        </Link>

        <Link to="/products">
          Productos
        </Link>

        <Link to="/cart" className="cart-link">
          🛒
          <span className="cart-count">
            {cart.length}
          </span>
        </Link>

        <button
          onClick={logout}
          className="logout-btn"
        >
          Cerrar sesión
        </button>

      </div>

    </nav>
  );
}

export default Navbar;