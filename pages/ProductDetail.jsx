import { useParams } from "react-router-dom";

import { useContext } from "react";

import products from "../data/products";

import { CartContext } from "../context/CartContext";

import "../styles/productDetail.css";

function ProductDetail() {

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  return (
    <div className="detail-page">

      <div className="detail-card">

        <div className="detail-image-container">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="detail-info">

          <h1>{product.name}</h1>

          <p className="detail-description">
            {product.description}
          </p>

          <h2>
            S/ {product.price}
          </h2>

          <button
            className="detail-cart-btn"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;