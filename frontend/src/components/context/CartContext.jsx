import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {


  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });



  // Save cart in localStorage

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);





  // ================= ADD TO CART =================

  const addToCart = (product) => {


    setCartItems((prevItems) => {


      const existingItem = prevItems.find(
        item => item.id === product.id
      );



      // If already exists increase quantity

      if(existingItem){


        return prevItems.map(item =>

          item.id === product.id

          ? {

              ...item,

              quantity: item.quantity + 1

            }

          :

          item

        );


      }




      // New Product Add

      return [

        ...prevItems,


        {

          id: product.id,


          // support both name/title

          title: product.title || product.name,

          name: product.name || product.title,


          // Image save

          image: product.image,


          price: product.price,


          oldPrice: product.oldPrice || "",


          quantity: 1

        }


      ];



    });



  };








  // ================= INCREASE =================


  const increaseQty = (id) => {


    setCartItems(prev =>

      prev.map(item =>


        item.id === id

        ?

        {

          ...item,

          quantity: item.quantity + 1

        }

        :

        item


      )


    );


  };







  // ================= DECREASE =================


  const decreaseQty = (id) => {


    setCartItems(prev =>

      prev.map(item =>


        item.id === id && item.quantity > 1


        ?

        {

          ...item,

          quantity: item.quantity - 1

        }


        :

        item


      )


    );


  };







  // ================= REMOVE =================


  const removeItem = (id) => {


    setCartItems(prev =>

      prev.filter(
        item => item.id !== id
      )

    );


  };








  // ================= CLEAR CART =================


  const clearCart = () => {


    setCartItems([]);


  };








  // ================= CART COUNT =================


  const cartCount = cartItems.reduce(

    (total,item) =>

      total + item.quantity,


    0

  );









  // ================= SUBTOTAL =================


  const subtotal = cartItems.reduce(

    (total,item)=>{


      const price = Number(

        String(item.price)
        .replace("$","")

      );


      return total + price * item.quantity;


    },


    0


  );









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

        subtotal

      }}


    >


      {children}


    </CartContext.Provider>


  );


}







export function useCart(){

  return useContext(CartContext);

}