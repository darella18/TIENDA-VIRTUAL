import { Link } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import "../styles/productCard.css";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {

    addToCart(product);

    toast.success("Producto agregado");
  };

  return (

    <motion.div
      className="product-card"

      whileHover={{
        y: -10
      }}
    >

      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

      </div>

      <div className="product-info">

        <span className="product-category">
          Tecnología
        </span>

        <h3>{product.name}</h3>

        <p className="product-price">
          S/ {product.price}
        </p>

        <div className="product-buttons">

          <Link to={`/product/${product.id}`}>

            <button className="detail-btn">
              Ver detalle
            </button>

          </Link>

          <button
            className="cart-btn"
            onClick={handleAdd}
          >
            Agregar
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default ProductCard;