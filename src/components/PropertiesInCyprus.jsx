import CyprusImage1 from "../assets/jpg/c1.png";
import CyprusImage2 from "../assets/jpg/c2.png";
import CyprusImage3 from "../assets/jpg/c3.png";
import CyprusImage4 from "../assets/jpg/c4.png";
import BtnImage from "../assets/jpg/btnImage.png";
import Title from "./Title";

const properties = [
  {
    id: 1,
    img: CyprusImage1,
  },
  {
    id: 2,
    img: CyprusImage2,
  },
  {
    id: 3,
    img: CyprusImage3,
  },
  {
    id: 4,
    img: CyprusImage4,
  },
];

const PropertiesInCyprus = () => {
  return (
    <section className='inner_responsiveWidth py-12 bg-white'>
      <div className='flex justify-between flex-wrap gap-3 sm:items-center mb-5 md:mb-12'>
        <Title title={"Properties in Cyprus"} />

        <button className='px-[26px] py-3 bg-[#365272] rounded-[35px] inline-flex justify-center items-center text-[#f8f9fa] text-[0.69rem] lg:text-lg font-semibold font-font-plus-jakarta-sans lg:leading-[25.20px]'>
          See All
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-7 gap-6'>
        {properties.map((property, i) => (
          <div
            key={property.id}
            className={`relative rounded-xl h-[193px] lg:h-[451px] overflow-hidden shadow-lg group ${
              i === 0 || i === 3
                ? "col-span-1 lg:col-span-4"
                : "col-span-1 lg:col-span-3"
            } `}
          >
            <img
              src={property.img}
              alt='property'
              className='w-full h-full object-cover'
            />
            <div className='absolute gap-3 flex justify-center inset-x-0 top-5 px-3 py-1 text-xs rounded-full'>
              <button className='px-[25px] lg:py-2.5 text-[#f8f9fa] line-clamp-1 text-nowrap rounded-[35px] outline-2 text-xs xl:text-lg font-semibold font-plus-jakarta-sans leading-[25.20px] outline-offset-[-2px] outline-[#f8f9fa] inline-flex justify-center items-center'>
                HANDLED BY OUR AGENTS
              </button>
              <div className='px-[25px] lg:py-2.5 rounded-[35px] outline-2 outline-offset-[-2px] outline-[#f8f9fa] inline-flex justify-center items-center'>
                <button className='justify-start text-[#f8f9fa] line-clamp-1 text-nowrap text-xs xl:text-lg font-semibold font-plus-jakarta-sans  leading-[25.20px]'>
                  FAST PROCESS
                </button>
              </div>
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4'>
              <h2 className='text-center justify-start lg:mb-3 text-[#f8f9fa] text-2xl lg:text-5xl font-semibold font-plus-jakarta-sans leading-[57.60px]'>
                Property in Cyprus
              </h2>
              <button className='lg:px-[26px] px-4 cursor-pointer py-1 max-w-[165px] lg:py-5 text-[#365272] text-sm lg:text-lg font-semibold font-plus-jakarta-sans lg:leading-[25.20px] bg-gradient-to-br from-[#dfecf5] to-[#fff1e2] rounded-[35px] inline-flex justify-center items-center'>
                View Listings
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='py-12 flex lg:flex-row flex-col justify-between lg:items-center'>
        <div className=''>
          {/* <div class="justify-start text-[#365272] text-[64px] font-semibold font-plus-jakarta-sans leading-[76.80px]"></div> */}
          <Title title={"Don’t waste time searching."} />
          <div class='justify-start text-[#365272] mt-5  sm:text-[32px] text-[1.56rem]  md:text-[40x] lg:text-[48px] xl:text-[55px] font-semibold font-plus-jakarta-sans  xl:leading-[66px]'>
            Trust the Professionals
          </div>
        </div>
        <div className='w-fit mt-8 lg:mt-0 place-items-center'>
          <div className='lg:w-[29rem] w-auto p-5 gap-3 overflow-hidden h-[100px] lg:h-[124.17px] flex justify-center items-center rounded-[62.08px] relative bg-[#365272] text-[#f8f9fa] text-3xl font-semibold font-plus-jakarta-sans uppercase xl:leading-[42px]'>
            <img src={BtnImage} alt='' className='pt-[0.81rem]' />
            <div className=''>Request a Call</div>
          </div>

          <p className='text-[1.56rem] leading-[4rem] italic text-[#252525]'>
            *We Will Call You Back!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertiesInCyprus;
