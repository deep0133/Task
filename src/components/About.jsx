import GirlImage from "../assets/jpg/girl.png";
import { IoIosArrowRoundBack } from "react-icons/io";
export default function About() {
  return (
    <div className='grid lg:grid-cols-5 py-8 relative gap-12 flex-wrap items-center'>
      <div className='left col-span-2 justify-center w-full overflow-hidden about-bg-img flex items-center'>
        <img
          className='w-[39rem] h-full xl:max-h-[54rem] object-cover'
          src={GirlImage}
          alt='Design'
        />
      </div>
      <div className='right flex px-5 md:mx-[3%] lg:mx-0  xl:px-12 xl:mt-[3rem] gap-8 2xl:gap-0 lg:col-span-3 2xl:flex-row items-start flex-col 2xl:-ml-64 min-[1790px]:-ml-[18rem] relative w-full 2xl:max-w-[75.88rem]'>
        <h3 className='text-nowrap z-50  justify-start 2xl:mr-20 2xl:mt-5 text-[#5a5959] text-[1.44rem] font-medium font-Rethink_Sans leading-[23px]'>
          About Us
        </h3>
        <div className='text-[#252525] 2xl:pl-5 font-normal font-Rethink_Sans justify-start space-y-5 lg:space-y-6 xl:space-y-10 text-3xl xl:text-4xl 3xl:text-5xl md:leading-10 xl:leading-[3.2rem] 2xl:leading-[4rem]'>
          <p className='para-1'>
            Explore breathtaking spaces , elegant interiors, and scenic views
            that redefine luxury living.
          </p>
          <p className='para-2 '>
            Investment & Development stands as a trailblazer in crafting
            exclusive and exciting property developments in Bali and Indonesia,
            focusing on creating exceptional high-return investment
            opportunities for savvy investors.
          </p>
          <div>
            <div className='justify-start mt-8 flex gap-3 items-center text-[#252525] text-[1.63rem] lg:text-[26px] font-normal font-Rethink_Sans 2xl:leading-[45.75px]'>
              <IoIosArrowRoundBack className='w-[45.84px] p-1 rotate-[135deg] bg-[#365272] text-white h-[45.84px] rounded-full' />
              <span>Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
