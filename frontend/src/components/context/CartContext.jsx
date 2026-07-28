import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // ================= CART ITEMS =================

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  // ================= SAVE CART =================

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // ================= ADD TO CART =================

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      // If product exists, increase quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // Add new product
      return [
        ...prevItems,
        {
          id: product.id,

          // Support both name and title
          title: product.title || product.name,
          name: product.name || product.title,

          // Product image
          image: product.image,

          // Product price
          price: product.price,

          // Old price
          oldPrice: product.oldPrice || "",

          // Default quantity
          quantity: 1,
        },
      ];
    });
  };

  // ================= INCREASE QUANTITY =================

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE QUANTITY =================

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // ================= REMOVE ITEM =================

  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== id
      )
    );
  };

  // ================= CLEAR CART =================

  const clearCart = () => {
    setCartItems([]);
  };

  // ================= CART COUNT =================

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= SUBTOTAL =================

  const subtotal = cartItems.reduce(
    (total, item) => {
      const price = Number(
        String(item.price).replace("$", "")
      );

      return total + price * item.quantity;
    },
    0
  );

  // ================= PROVIDER =================

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ================= CUSTOM HOOK =================

export function useCart() {
  return useContext(CartContext);
}