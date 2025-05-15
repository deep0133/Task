import About from "../components/About";
import ContactForm from "../components/ContactForm";
import FilterBar from "../components/FilterBar";
import GallerySection from "../components/GallerySection";
import Navbar from "../components/Navbar";
import NewsAndInsights from "../components/NewsAndInsights";
import PromoCard from "../components/PromoCard";
import PropertiesInCyprus from "../components/PropertiesInCyprus";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-12'></div>
      <Navbar />
      <FilterBar />
      <About />
      <PromoCard />
      <GallerySection />
      <PropertiesInCyprus />
      <ContactForm />
      <div className='bg-[#f8f9fa]'>
        <TestimonialSlider />
        <NewsAndInsights />
      </div>
    </>
  );
}
