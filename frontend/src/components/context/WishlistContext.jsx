import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  // Wishlist items
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  // Add product to wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const alreadyExists = prevItems.some(
        (item) => item.id === product.id
      );

      // Don't add duplicate product
      if (alreadyExists) {
        return prevItems;
      }

      return [
        ...prevItems,
        product,
      ];
    });
  };

  // Remove product from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== id
      )
    );
  };

  // Check if product exists in wishlist
  const isInWishlist = (id) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  // Clear all wishlist items
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  // Total wishlist items
  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook
export function useWishlist() {
  return useContext(WishlistContext);
}