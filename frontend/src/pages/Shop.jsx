import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopBanner from "../components/ShopBanner";
import ShopSidebar from "../components/ShopSidebar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";


import product1 from "../assets/images/headphones.jpg";
import product2 from "../assets/images/watch.jpg";
import product3 from "../assets/images/bag.png";
import product4 from "../assets/images/shoes.jpg";
import product5 from "../assets/images/perfume.jpg";
import product6 from "../assets/images/lamp.jpg";
import product7 from "../assets/images/speaker.jpg";
import product8 from "../assets/images/camera.jpg";
import product9 from "../assets/images/glases.jpg";


function Shop() {


const [searchParams] = useSearchParams();


const [requestData,setRequestData] = useState({

name:"",
email:"",
phone:"",
product:"",
message:"",

});


// Search

const searchQuery = searchParams.get("search") || "";



// Products

const products = [


{
id:1,
image:product1,
title:"Wireless Headphones",
price:59.99,
oldPrice:89.99,
rating:5,
reviews:120,
discount:"-35%",
description:
"Experience powerful sound and crystal-clear audio with these comfortable wireless headphones."
},


{
id:2,
image:product2,
title:"Smart Watch Series 8",
price:149.99,
oldPrice:199.99,
rating:5,
reviews:80,
discount:"-25%",
description:
"Stay connected and track your daily activities with smart features."
},


{
id:3,
image:product3,
title:"Travel Backpack",
price:39.99,
oldPrice:59.99,
rating:4,
reviews:64,
discount:"-30%",
description:
"A spacious and durable travel backpack for everyday use."
},


{
id:4,
image:product4,
title:"Running Shoes",
price:89.99,
oldPrice:120.99,
rating:5,
reviews:50,
discount:"-20%",
description:
"Comfortable running shoes with excellent support."
},


{
id:5,
image:product5,
title:"Luxury Perfume",
price:29.99,
oldPrice:39.99,
rating:4,
reviews:34,
discount:"-15%",
description:
"Premium fragrance with long lasting scent."
},


{
id:6,
image:product6,
title:"Table Lamp",
price:19.99,
oldPrice:29.99,
rating:5,
reviews:20,
discount:"-10%",
description:
"Stylish lamp for home and office."
},


{
id:7,
image:product7,
title:"Bluetooth Speaker",
price:49.99,
oldPrice:69.99,
rating:5,
reviews:55,
discount:"-28%",
description:
"Portable speaker with powerful sound."
},


{
id:8,
image:product8,
title:"Digital Camera",
price:499.99,
oldPrice:599.99,
rating:5,
reviews:19,
discount:"-18%",
description:
"Capture beautiful moments with high quality camera."
},


{
id:9,
image:product9,
title:"Sunglasses",
price:31.99,
oldPrice:49.99,
rating:4,
reviews:42,
discount:"-20%",
description:
"Stylish sunglasses for daily wear."
},


];



// Search Filter

const filteredProducts = searchQuery

? products.filter((product)=>

product.title
.toLowerCase()
.includes(searchQuery.toLowerCase())

)

:products;



return (

<>

<Navbar />


<ShopBanner />



<section className="bg-gray-50 py-14">


<div className="max-w-7xl mx-auto px-4">


<div className="grid lg:grid-cols-4 gap-8">


<div>

<ShopSidebar />

</div>



<div className="lg:col-span-3">



<div className="bg-white rounded-2xl border border-gray-200 p-5 mb-8 flex flex-col md:flex-row justify-between items-center">


<p className="text-gray-600">

Showing

{" "}

<span className="font-semibold">

{filteredProducts.length}

</span>

{" "}Products

</p>



<select className="border rounded-xl px-4 py-2 mt-4 md:mt-0">

<option>
Default Sorting
</option>

<option>
Price Low To High
</option>

<option>
Price High To Low
</option>

</select>


</div>



<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">


{
filteredProducts.map((product)=>(


<ProductCard

key={product.id}

product={product}

/>


))

}


</div>


<div className="mt-12 flex justify-center">

<Pagination />

</div>



</div>


</div>


</div>


</section>
{/* Product Request Form */}

<section className="py-20 bg-white">

  <div className="max-w-5xl mx-auto px-6">


    <div className="bg-gradient-to-r from-green-50 via-white to-orange-50 rounded-3xl shadow-xl border border-green-100 p-10">


      <div className="text-center mb-10">

        <span className="text-green-600 uppercase tracking-widest font-semibold">
          Need Help?
        </span>


        <h2 className="text-4xl font-bold text-gray-900 mt-3">
          Request Your Product
        </h2>


        <p className="text-gray-500 mt-4">
          Can't find your desired product? Send us a request and our team
          will contact you soon.
        </p>

      </div>



      <form

      onSubmit={async(e)=>{

        e.preventDefault();


        try{


          const response = await fetch(
            "http://localhost:5000/api/product-request",
            {
              method:"POST",

              headers:{
                "Content-Type":"application/json",
              },

              body:JSON.stringify(requestData)

            }
          );


          const data = await response.json();


          if(!response.ok){

            throw new Error(data.message);

          }



          toast.success(
            "Product request sent successfully 🎉"
          );


          setRequestData({

            name:"",
            email:"",
            phone:"",
            product:"",
            message:"",

          });



        }

        catch(error){

          console.log(error);

          toast.error(
            "Failed to send request"
          );

        }


      }}


      className="grid md:grid-cols-2 gap-6"

      >



        {/* Name */}

        <div>

          <label className="text-sm font-semibold text-gray-700">
            Full Name
          </label>


          <input

          type="text"

          value={requestData.name}


          onChange={(e)=>

            setRequestData({

              ...requestData,
              name:e.target.value

            })

          }


          placeholder="Enter your name"


          className="w-full mt-2 px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-green-600"

          />

        </div>




        {/* Email */}

        <div>

          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>


          <input

          type="email"


          value={requestData.email}


          onChange={(e)=>

            setRequestData({

              ...requestData,
              email:e.target.value

            })

          }


          placeholder="Enter your email"


          className="w-full mt-2 px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-green-600"

          />

        </div>




        {/* Phone */}

        <div>

          <label className="text-sm font-semibold text-gray-700">
            WhatsApp Number
          </label>


          <input

          type="text"


          value={requestData.phone}


          onChange={(e)=>

            setRequestData({

              ...requestData,
              phone:e.target.value

            })

          }


          placeholder="+92 300 0000000"


          className="w-full mt-2 px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-green-600"

          />

        </div>




        {/* Product */}

        <div>

          <label className="text-sm font-semibold text-gray-700">
            Product Name
          </label>


          <input


          type="text"


          value={requestData.product}


          onChange={(e)=>

            setRequestData({

              ...requestData,
              product:e.target.value

            })

          }


          placeholder="Which product do you need?"


          className="w-full mt-2 px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-green-600"


          />

        </div>





        {/* Message */}


        <div className="md:col-span-2">


          <label className="text-sm font-semibold text-gray-700">
            Message
          </label>


          <textarea


          rows="5"


          value={requestData.message}


          onChange={(e)=>

            setRequestData({

              ...requestData,
              message:e.target.value

            })

          }


          placeholder="Write your requirement..."


          className="w-full mt-2 px-5 py-4 rounded-xl border border-gray-200 outline-none resize-none focus:border-green-600"


          ></textarea>


        </div>





        {/* Button */}


        <div className="md:col-span-2">


          <button

          type="submit"


          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition"

          >

            Send Product Request

          </button>


        </div>




      </form>



    </div>


  </div>


</section>





<Footer />


</>

);

}


export default Shop;