import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import houseImage from "../assets/jpg/pool.png";
import Title from "./Title";

const testimonials = [
  {
    name: "WENDY LANE",
    feedback:
      "Rvi made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    stars: 5,
    image: houseImage,
  },
  {
    name: "JASON PARK",
    feedback:
      "We found our dream home with dvgs help. Their agents were incredibly knowledgeable and guided us",
    stars: 5,
    image: houseImage,
  },
  {
    name: "ADELINE CHEN",
    feedback:
      "I’ve been renting my apartment through dgb for years. They’re responsive and always make sure my property is taken care of.",
    stars: 5,
    image: houseImage,
  },
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <div className='bg-[#f9fafb] py-10 inner_responsiveWidth'>
      <div className='flex justify-between items-center mb-6'>
        <Title title={"Words from Our Clients"} />
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            className='bg-white border rounded-full p-2 text-[#2e3a59] hover:bg-gray-200'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className='bg-[#2e3a59] text-white rounded-full p-2 hover:bg-[#1d2a45]'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div
        key={startIndex} // triggers remount
        className={`flex gap-4 transition-all overflow-hidden duration-500 ease-in-out ${
          direction === "right" ? "animate-slide-left" : "animate-slide-right"
        }`}
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-[2.19rem] shrink-0 shadow-md px-[0.56rem] lg:py-[1.25rem] flex justify-start transition-all duration-700 ease-in-out transform 
        ${index === 0 ? "w-full md:w-1/2" : "w-full md:w-[50%] lg:w-[25%]"}`}
          >
            <div
              className={` flex flex-col justify-between max-w-[23.5rem] m-[1.25rem]`}
            >
              <p className='text-gray-700 text-[1.5rem] inline-block'>
                “{testimonial.feedback}”
              </p>

              <div className='mt-[0.56rem] lg:mt-auto'>
                <h4 className='font-bold text-[#2e3a59] uppercase text-[1.5rem]'>
                  {testimonial.name}
                </h4>
                <div className='flex text-yellow-500 mt-[1.25rem]'>
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <FaStar key={i} className='text-[1.5rem] leading-8' />
                  ))}
                </div>
              </div>
            </div>

            {index === 0 && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-1/2 h-[24rem] lg:inline-block  mr-[0.8rem] hidden object-cover rounded-[2.19rem] '
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
