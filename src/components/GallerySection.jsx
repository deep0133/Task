import { FaArrowRight } from "react-icons/fa";
import g1 from "../assets/jpg/g1.png";
import g2 from "../assets/jpg/g2.png";
import g3 from "../assets/jpg/g3.png";
import Title from "./Title";

const GallerySection = () => {
  return (
    <section className='bg-white grid grid-cols-1 items-center lg:grid-cols-5 inner_responsiveWidth py-12 gap-12'>
      {/* Left Content */}
      <div className='lg:col-span-2 space-y-6'>
        <div className='self-stretch justify-start text-[#365272] text-[1.3rem] font-semibold font-plus-jakarta-sans leading-[25.20px]'>
          [Gallery]
        </div>
        <Title
          title='Designed for Luxury, Comfort, and Unmatched Serenity'
          classNames='text-[#365272] font-medium'
        />
        <div className='lg:max-w-[600px] mt-8 lg:my-12 justify-start text-[#595959] text-[1.13rem] font-normal font-plus-jakarta-sans leading-[25.20px]'>
          Investment & Development stands as a trailblazer in crafting exclusive
          and exciting property developments in Bali and Indonesia, focusing on
          creating exceptional high-return investment opportunities for savvy
          investors.
          <br />
          <br />
          Investment & Development stands as a trailblazer in crafting exclusive
          and exciting property developments in Bali and Indonesia, focusing on
          creating exceptional high-return investment opportunities for savvy
          investors.
        </div>
        <div className='px-[26px] py-3 bg-[#365272] rounded-[35px] inline-flex justify-center items-center gap-2.5'>
          <div className='text-right justify-start text-[#f8f9fa] text-sm lg:text-lg font-semibold font-plus-jakarta-sans lg:leading-[25.20px]'>
            View all Gallery
          </div>
        </div>
      </div>

      {/* Right Gallery */}
      <div className='lg:col-span-3 grid grid-cols-2 grid-rows-2 gap-4'>
        <img
          src={g1}
          alt='house1'
          className='w-full h-[191.40px] lg:w-[500px] lg:h-[444px] rounded-[25px] object-cover'
        />
        <img
          src={g2}
          alt='house2'
          className='w-full h-[191.40px] lg:w-[500px] lg:h-[444px] rounded-[25px] object-cover'
        />
        <img
          src={g3}
          alt='house3'
          className='col-span-2 w-full h-[191.40px] lg:w-[994px] lg:h-[444px] rounded-[25px] object-cover'
        />
      </div>
    </section>
  );
};

export default GallerySection;
