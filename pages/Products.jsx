import { useState } from "react";

import products from "../data/products";

import ProductCard from "../components/ProductCard";

import "../styles/products.css";

function Products() {

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      <div className="products-header">

        <h1>Productos tecnológicos</h1>

        <p>
          Explora laptops, smartphones, accesorios y más.
        </p>

      </div>

      <div className="search-container">

        <input
          type="text"
          placeholder="Buscar producto..."
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="products-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            />
          ))
        ) : (
          <div className="no-products">
            <h2>
              No se encontraron productos
            </h2>
          </div>
        )}
      </div>

    </div>
  );
}

export default Products;