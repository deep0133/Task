import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundBack, IoLogoYoutube } from "react-icons/io";
import HomeImage from "../assets/jpg/home.png";
import WhatsappImage from "../assets/jpg/wa.png";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='max-h-[1153px] overflow-hidden'>
      <nav className='bg-[#365272] h-[110px] flex items-center'>
        <div className='inner_responsiveWidth h-11 flex items-center justify-between'>
          {/* <Title
            title={"YOUR LOGO"}
            classNames='text-white flex-shrink-0 font-bold'
          /> */}
          <h2 className='text-2xl lg:text-[2rem] text-white flex-shrink-0 font-bold'>
            YOUR LOGO
          </h2>
          <div className='flex shrink items-center relative'>
            <ul
              className={`absolute xl:relative xl:flex top-20 xl:top-0 pr-4 rounded-md right-0 xl:bg-transparent bg-white text-black xl:text-white z-[99] ${
                menu ? "block" : "hidden"
              }`}
            >
              {navList?.map((val) => {
                return (
                  <li className='justify-center cursor-pointer hover:scale-105 duration-200 ease-in p-[1rem] 2xl:p-[1.2rem] text-xl 2xl:text-[1.63rem] text-nowrap font-medium font-Rethink_Sans'>
                    {val?.title}
                  </li>
                );
              })}
            </ul>
            <div className='social-icons gap-3 flex'>
              <FaFacebook className='fill-white size-[1.88rem]' />
              <FaInstagram className='fill-white size-[1.88rem]' />
              <IoLogoYoutube className='fill-white size-[1.88rem]' />
            </div>
            <GiHamburgerMenu
              onClick={() => {
                setMenu(!menu);
              }}
              className='text-white size-[1.88rem] xl:hidden ml-4'
            />
          </div>
        </div>
      </nav>
      <HeroSection />
    </div>
  );
}

const navList = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 1,
    title: "Aboutn Us",
    link: "/about",
  },
  {
    id: 1,
    title: "Properties",
    link: "/properties",
  },
  {
    id: 1,
    title: "Location",
    link: "/location",
  },
  {
    id: 1,
    title: "Services",
    link: "/services",
  },
  {
    id: 1,
    title: "Events/News",
    link: "/events",
  },
  {
    id: 1,
    title: "Contact Us",
    link: "/contact",
  },
];

const HeroSection = () => {
  return (
    <div className='relative lg:h-[767px] flex justify-center items-center'>
      <img
        src={HomeImage}
        alt='Luxury Villa'
        className='object-cover absolute h-full w-full -z-10 inset-0'
      />
      <div className='absolute inset-0  h-full w-full z-10 bg-black/40'></div>
      <div className='z-50 lg:py-0 py-16 text-black inner_responsiveWidth inset-y-0 flex flex-col justify-center'>
        <div className='max-w-[1126.94px] xl:ml-[184px]'>
          <h1 className='justify-start text-white text-5xl sm:text-7xl md:text-8xl xl:text-[7.13rem] font-normal font-Rethink_Sans leading-[3.31rem] sm:leading-[4.5rem] md:leading-[5.5rem]  xl:leading-[7.13rem]'>
            Your Dream Villa Awaits – Relax, Unwind, and Enjoy
          </h1>
          <div className='mt-12 flex xl:justify-end pr-16'>
            <div className='gap-5 flex h-[49px]'>
              <IoIosArrowRoundBack className='w-[45.84px] p-1 rotate-[135deg] text-[#365272] bg-white h-[45.84px] rounded-full' />
              <div className='justify-start text-white text-[1.44rem] lg:text-[2rem] font-normal font-Rethink_Sans leading-10 lg:leading-[49px]'>
                Buy your dream home today
              </div>
            </div>
          </div>

          <div className='max-w-[481.25px] mt-16 justify-start text-white text-[1.13rem] lg:text-[1.56rem] font-normal font-Rethink_Sans leading-6 lg:leading-[31px]'>
            Escape to luxury and comfort in our stunning villas equipped with
            modern amenities and surrounded by serene nature.
          </div>
        </div>
      </div>
      {/* WhatsApp Button */}
      <div className='absolute inset-y-0 right-1 z-50 flex justify-center items-center'>
        <a
          href='https://wa.me/1234567890'
          target='_blank'
          className='  text-white p-4 rounded-full shadow-lg transition-colors'
          aria-label='Contact us on WhatsApp'
        >
          <img src={WhatsappImage} className='' />
        </a>
      </div>
    </div>
  );
};
