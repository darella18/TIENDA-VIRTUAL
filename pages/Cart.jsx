import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import "../styles/cart.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>
        Carrito de compras
      </h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>
            Tu carrito está vacío
          </h2>
        </div>

      ) : (

        <>
          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>

                  <p>
                    S/ {item.price}
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <h4>
                    Subtotal:
                    {" "}
                    S/
                    {" "}
                    {item.price * item.quantity}
                  </h4>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Eliminar
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>
              Total:
              {" "}
              S/
              {" "}
              {total}
            </h2>

            <button className="buy-btn">
              Finalizar compra
            </button>

            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;