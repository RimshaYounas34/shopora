import headphone from "../assets/images/headphones.jpg";
import watch from "../assets/images/watch.jpg";
import bag from "../assets/images/bag.png";
import shoes from "../assets/images/shoes.jpg";
import perfume from "../assets/images/perfume.jpg";
import lamp from "../assets/images/lamp.jpg";

const products = [
  {
    id: 1,
    image: headphone,
    title: " Headphones",
    description:
      "Premium wireless headphones with clear sound and comfortable design.",
    price: 59.99,
    oldPrice: 89.99,
    rating: 5,
    reviews: 120,
    discount: "-35%",
  },

  {
    id: 2,
    image: watch,
    title: "Smart Watch Series 8",
    description:
      "Smart watch with modern features and stylish design for everyday use.",
    price: 149.99,
    oldPrice: 199.99,
    rating: 5,
    reviews: 80,
    discount: "-25%",
  },

  {
    id: 3,
    image: bag,
    title: "Travel Backpack",
    description:
      "Durable and stylish travel backpack perfect for daily use and trips.",
    price: 39.99,
    oldPrice: 59.99,
    rating: 4,
    reviews: 64,
    discount: "-30%",
  },

  {
    id: 4,
    image: shoes,
    title: "Running Shoes",
    description:
      "Comfortable and lightweight running shoes designed for active lifestyles.",
    price: 89.99,
    oldPrice: 120.99,
    rating: 5,
    reviews: 50,
    discount: "-20%",
  },

  {
    id: 5,
    image: perfume,
    title: "Luxury Perfume",
    description:
      "A premium fragrance with a long-lasting and elegant scent.",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 34,
    discount: "-15%",
  },

  {
    id: 6,
    image: lamp,
    title: "Modern Table Lamp",
    description:
      "Elegant modern table lamp that adds a warm and stylish touch to your room.",
    price: 24.99,
    oldPrice: 39.99,
    rating: 5,
    reviews: 28,
    discount: "-40%",
  },
];

export default products;