import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import OpeningTimes from "./components/OpeningTimes/OpeningTimes.jsx";
import SearchSection from "./components/SearchSection.jsx";
import ProductList from "./components/ProductList.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import BarcodeScanner from "./components/Barcode.jsx";
import { discount_offers } from "./data/Discounts&Offers.js";
import { best_sellers } from "./data/bestsellers.js";
// import { testimonials } from "./Testimonials.js";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Carousel />
      <OpeningTimes />
      <SearchSection />
      {/* <Testimonial testimonials={testimonials} /> */}
      <Testimonial />
      <ProductList
        title="Discounts and Offers"
        description="Check them out"
        products={discount_offers}
      />
      <ProductList
        title="Best Sellers of the Week"
        description="Check them out"
        products={best_sellers}
      />
      <Contact />
      <BarcodeScanner />
      <Footer />
    </>
  );
}

export default App;
