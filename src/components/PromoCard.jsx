import { FaThumbsUp } from "react-icons/fa";
import PoolImage from "../assets/jpg/pool.png";
import OrnamentImage from "../assets/jpg/Ornament.png";
import Title from "./Title";
const PromoCard = () => {
  return (
    <div className='inner_responsiveWidth mx-auto bg-gradient-to-br from-[#dfecf5] to-[#fff1e2] rounded-[10px] overflow shadow-md grid grid-cols-1 lg:grid-cols-5 items-center w-fulll justify-between p-4 md:p-8 space-y-6 md:space-y-0'>
      {/* Left Side - Image */}
      <div className='relative rounded-xl w-full lg:col-span-2'>
        <img
          src={PoolImage}
          alt='Property'
          className='w-full h-full object-cover rounded-lg'
        />

        {/* Badge */}
        <img
          src={OrnamentImage}
          className='max-w-[211px] max-h-[211px] size-24  lg:size-32 absolute inset-[50%_calc(100%_-_70px)] md:inset-[50%_calc(94%_-_30px)] lg:inset-[40%_100%] translate-[-50%] z-50 bg-[#f8f9fa] rounded-full'
        />
      </div>

      {/* Right Side - Text */}
      <div className='w-full flex flex-col items-start lg:col-span-3 text-left lg:py-0 lg:pt-8 px-0 lg:pl-24 lg:pr-12'>
        {/* <h2 className='self-stretch justify-start  text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[55px] 2xl:text-[64px] font-semibold font-font-plus-jakarta-sans leading-10 md:leading-[48px] lg:leading-[54px] xl:leading-[64px] 2xl:leading-[76.80px]'>
          Looking for Your Next Home? We Can Help!
        </h2> */}
        <Title
          title='Looking for Your Next Home? We Can Help!'
          classNames='text-[#365272] font-semibold'
        />

        <div className='max-w-[635px] sm:my-6 mb-6 justify-start text-[#365272] text-[0.88rem] sm:text-lg lg:text-[1.5rem] font-normal font-plus-jakarta-sans leading-[31.20px]'>
          Browse our latest listings and find the perfect property that fits
          your needs.
        </div>

        <div className='px-[26px] py-3  bg-[#365272] rounded-[35px] inline-flex justify-center items-center'>
          <div className='justify-start text-[#f8f9fa] text-[0.75rem] lg:text-lg font-semibold font-plus-jakarta-sans'>
            View Listings
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
