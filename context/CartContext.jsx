import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // AGREGAR PRODUCTO
  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };

  // INCREMENTAR
  const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    setCart(updatedCart);
  };

  // DISMINUIR
  const decreaseQuantity = (id) => {

    const updatedCart = cart
      .map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // ELIMINAR
  const removeFromCart = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // VACIAR
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}