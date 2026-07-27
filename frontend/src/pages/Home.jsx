import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FlashSale from "../components/FlashSale";
import Products from "../components/Products";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
{/*import Brands from "../components/Brands";
import Reviews from "../components/Reviews";*/}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FlashSale />
      <Products />
      <Services />
      <Banner />
      <Testimonials />
      <BlogCard />
      <Newsletter />
       <Footer />

      {/*<Brands />
      <Reviews />
      <Footer />*/}
    </>
  );
}

export default Home;