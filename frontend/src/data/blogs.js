import electronics from "../assets/images/electronics.jpg";
import fashion from "../assets/images/fashion.jpg";
import grocery from "../assets/images/grocery.jpg";
import beauty from "../assets/images/beauty.jpg";
import furniture from "../assets/images/furniture.jpg";
import watch from "../assets/images/watch.jpg";
import sports from "../assets/images/sports.jpg";
import shoes from "../assets/images/shoes.jpg";
import speaker from "../assets/images/speaker.jpg";

import mobile from "../assets/images/mobiles/iphone.png";
import gaming from "../assets/images/gaming/gaming-chair.jpg";
import bags from "../assets/images/bags/backpack.jpg";
import jewellery from "../assets/images/jewellery/bracelet.jpg";

const blogs = [
  // ================= BLOG 1 =================

  {
    id: 1,
    image: electronics,
    category: "Technology",
    author: "Admin",
    date: "20 July 2026",
    title: "Best Electronics to Buy in 2026",
    description:
      "Explore the latest electronic gadgets with amazing features and affordable prices.",
    content: `
      Technology is changing rapidly, and 2026 brings many exciting electronic products.
      From smart devices to powerful gadgets, customers now have more options than ever.

      Before buying any electronic product, it is important to compare features, quality,
      performance and price. Always choose a product that matches your needs and budget.

      Whether you are looking for a laptop, smartphone, headphones or smart home device,
      researching the product before purchasing can help you make a better decision.
    `,
  },

  // ================= BLOG 2 =================

  {
    id: 2,
    image: fashion,
    category: "Fashion",
    author: "Admin",
    date: "18 July 2026",
    title: "Latest Fashion Trends",
    description:
      "Discover trending fashion collections and styling ideas for every season.",
    content: `
      Fashion trends continue to change with every season. In 2026, comfortable,
      stylish and versatile clothing is becoming increasingly popular.

      When choosing your wardrobe, focus on pieces that can be combined with different
      outfits. Neutral colors, comfortable fabrics and timeless designs are always
      great choices.

      The best fashion style is the one that makes you feel comfortable and confident.
    `,
  },

  // ================= BLOG 3 =================

  {
    id: 3,
    image: grocery,
    category: "Shopping",
    author: "Admin",
    date: "15 July 2026",
    title: "Smart Grocery Shopping Tips",
    description:
      "Save money and time with these practical grocery shopping tips.",
    content: `
      Grocery shopping can become expensive if you do not plan properly. Creating a
      shopping list before visiting the store can help you avoid unnecessary purchases.

      Compare prices, check product quality and look for useful offers. Buying only
      what you actually need is one of the easiest ways to save money.

      Smart shopping is all about planning, comparing and making informed decisions.
    `,
  },

  // ================= BLOG 4 =================

  {
    id: 4,
    image: beauty,
    category: "Beauty",
    author: "Admin",
    date: "12 July 2026",
    title: "Top Beauty Products",
    description:
      "Our experts picked the best beauty products for healthy skin.",
    content: `
      Choosing the right beauty products is important for maintaining healthy-looking
      skin. Every person's skin is different, so products should be selected according
      to individual needs.

      Always check the ingredients and choose products that suit your skin type.
      A simple and consistent skincare routine can often be more effective than using
      too many products at once.
    `,
  },

  // ================= BLOG 5 =================

  {
    id: 5,
    image: furniture,
    category: "Furniture",
    author: "Admin",
    date: "10 July 2026",
    title: "Modern Home Furniture",
    description:
      "Upgrade your home with stylish and comfortable furniture.",
    content: `
      Modern furniture combines style, comfort and functionality. When decorating your
      home, choose furniture that matches your available space and lifestyle.

      Before purchasing large furniture items, measure your room carefully. This will
      help you select pieces that fit perfectly and keep your home comfortable.

      A well-designed home does not need to be expensive. The right furniture choices
      can completely transform your living space.
    `,
  },

  // ================= BLOG 6 =================

  {
    id: 6,
    image: watch,
    category: "Accessories",
    author: "Admin",
    date: "08 July 2026",
    title: "Best Smart Watches",
    description:
      "Compare the latest smart watches before making your purchase.",
    content: `
      Smart watches have become useful accessories for everyday life. Modern watches
      can track fitness activities, display notifications and provide useful health
      and lifestyle features.

      Before buying a smart watch, consider battery life, compatibility, display quality
      and available features. Choose a model that works well with your smartphone and
      meets your daily requirements.
    `,
  },

  // ================= BLOG 7 =================

  {
    id: 7,
    image: sports,
    category: "Sports",
    author: "Admin",
    date: "05 July 2026",
    title: "Fitness Essentials",
    description:
      "Everything you need for an active and healthy lifestyle.",
    content: `
      Staying active is an important part of a healthy lifestyle. Having the right
      fitness essentials can make workouts more comfortable and enjoyable.

      Depending on your routine, useful products may include sports shoes, comfortable
      clothing, water bottles and basic workout equipment.

      Start with simple equipment and focus on consistency. The best fitness routine
      is one that you can follow regularly.
    `,
  },

  // ================= BLOG 8 =================

  {
    id: 8,
    image: shoes,
    category: "Fashion",
    author: "Admin",
    date: "02 July 2026",
    title: "Comfortable Running Shoes",
    description:
      "Find the best running shoes for daily workouts and sports.",
    content: `
      Choosing comfortable running shoes is essential for an enjoyable workout.
      The right pair should provide proper support, comfort and stability.

      Consider the type of surface where you normally run and choose shoes designed
      for your activity. Proper sizing is also important because uncomfortable shoes
      can affect your overall running experience.

      Always prioritize comfort and fit when choosing running shoes.
    `,
  },

  // ================= BLOG 9 =================

  {
    id: 9,
    image: speaker,
    category: "Technology",
    author: "Admin",
    date: "01 July 2026",
    title: "Bluetooth Speakers Guide",
    description:
      "Choose the perfect portable speaker for music lovers.",
    content: `
      Bluetooth speakers are a convenient way to enjoy music at home or outdoors.
      They are available in many sizes and price ranges.

      When selecting a speaker, consider sound quality, battery life, portability
      and water resistance. A good speaker should match the environment where you
      plan to use it.

      Comparing features before purchasing can help you find the best speaker
      for your needs.
    `,
  },

  // ================= NEW BLOG 10 =================

  {
    id: 10,
    image: mobile,
    category: "Technology",
    author: "Admin",
    date: "28 June 2026",
    title: "Best Mobile Phones to Buy in 2026",
    description:
      "Discover the latest smartphones with powerful cameras, fast performance and long-lasting batteries.",
    content: `
      Smartphones have become an essential part of our daily lives. In 2026, modern
      smartphones offer powerful processors, advanced cameras and improved battery life.

      Before buying a new phone, consider important features such as display quality,
      camera performance, storage capacity and battery life.

      It is also important to choose a smartphone that matches your daily needs and
      budget. Comparing different models before purchasing can help you make a smarter
      buying decision.
    `,
  },

  // ================= NEW BLOG 11 =================

  {
    id: 11,
    image: gaming,
    category: "Gaming",
    author: "Admin",
    date: "25 June 2026",
    title: "Essential Gaming Accessories for Gamers",
    description:
      "Explore the must-have gaming accessories that can improve your gaming experience.",
    content: `
      The right gaming accessories can make your gaming experience more comfortable
      and enjoyable. A good gaming setup may include a quality headset, keyboard,
      mouse and comfortable gaming chair.

      When choosing gaming accessories, focus on comfort, performance and durability.
      Wireless devices can provide a cleaner setup, while wired accessories can offer
      reliable performance.

      Whether you are a casual gamer or a serious player, choosing the right equipment
      can help you enjoy your favorite games even more.
    `,
  },

  // ================= NEW BLOG 12 =================

  {
    id: 12,
    image: bags,
    category: "Fashion",
    author: "Admin",
    date: "22 June 2026",
    title: "How to Choose the Perfect Bag",
    description:
      "Learn how to choose a stylish and practical bag for work, travel and everyday use.",
    content: `
      A good bag should combine style, comfort and functionality. With so many designs
      available, it is important to choose a bag according to your lifestyle and needs.

      For everyday use, look for a bag with enough storage space and comfortable
      handles or straps. For travel, durability and organization are especially important.

      Choosing the right size, material and design can help you find a bag that looks
      great while remaining practical for daily activities.
    `,
  },

  // ================= NEW BLOG 13 =================

  {
    id: 13,
    image: jewellery,
    category: "Jewellery",
    author: "Admin",
    date: "19 June 2026",
    title: "Jewellery Buying Guide for Beginners",
    description:
      "Everything you need to know before buying jewellery online or in stores.",
    content: `
      Buying jewellery can be an exciting experience, but choosing the right piece
      requires careful consideration. Start by deciding what type of jewellery you
      are looking for and how often you plan to wear it.

      Consider the material, design, quality and overall craftsmanship before making
      your purchase. When shopping online, always check product details and customer
      reviews.

      A beautiful piece of jewellery should match your personal style and provide
      lasting value for your collection.
    `,
  },

  // ================= NEW BLOG 14 =================

  {
    id: 14,
    image: shoes,
    category: "Fashion",
    author: "Admin",
    date: "16 June 2026",
    title: "How to Find Comfortable Shoes",
    description:
      "Learn useful tips for choosing comfortable and stylish shoes for everyday life.",
    content: `
      Comfortable shoes can make a big difference in your daily activities. The right
      pair should provide enough support while fitting comfortably around your feet.

      Before purchasing shoes, make sure you choose the correct size and consider
      where you will be wearing them. Different activities may require different
      types of footwear.

      Comfort should always be a priority, but you can also choose a design that
      matches your personal style and wardrobe.
    `,
  },

  // ================= NEW BLOG 15 =================

  {
    id: 15,
    image: beauty,
    category: "Beauty",
    author: "Admin",
    date: "13 June 2026",
    title: "Simple Skincare Routine for Beginners",
    description:
      "Build a simple daily skincare routine with practical tips for healthy-looking skin.",
    content: `
      A simple skincare routine can help you maintain healthy-looking skin. Beginners
      should focus on a few basic steps instead of using too many products at once.

      Start with a gentle cleanser and choose products that suit your individual skin
      type. Moisturizing is also an important part of a daily routine.

      Remember that consistency is more important than using a large number of products.
      Give your skincare routine enough time and always choose products carefully.
    `,
  },
];

export default blogs;