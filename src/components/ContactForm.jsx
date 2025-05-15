import React, { useState } from "react";
import Title from "./Title";

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className=' py-12 bg-white  inner_responsiveWidth p-4 md:p-8 lg:px-0'>
      <div className='flex justify-center pb-12'>
        <Title title={"Get in Touch"} />
      </div>

      <form className='space-y-6'>
        {/* Name */}
        <div>
          <label className='block text-gray-600 mb-1'>
            Name<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            className='w-full border-b border-gray-400 outline-none py-2 focus:border-blue-500 transition'
          />
        </div>

        {/* Email  * Phone*/}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='email'>
            <label className='block text-gray-600 mb-1'>Email</label>
            <div className='flex items-center'>
              <input
                type='text'
                className='w-full border-b border-gray-400 outline-none py-2 focus:border-blue-500 transition'
              />
            </div>
          </div>
          <div className='phone'>
            <label className='block text-gray-600 mb-1'>+44 7400 123456</label>
            <div className='flex items-center'>
              <input
                type='tel'
                className='w-full border-b border-gray-400 outline-none py-2 focus:border-blue-500 transition'
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className='block text-gray-600 mb-1'>Message</label>
          <textarea
            rows='2'
            className='w-full border-b border-gray-400 outline-none py-2 focus:border-blue-500 transition resize-none'
          ></textarea>
        </div>

        {/* Privacy Info */}
        <div className='max-w-[1068px] justify-start text-[#4f4f4f] text-xl lg:text-2xl font-normal font-Rethink_Sans leading-5 md:leading-[28px] lg:leading-[35px]'>
          This information that you have provided will only be used for this
          particular communication and will not be used for any other purpose.
        </div>

        {/* Terms Checkbox */}
        <div className='flex justify-between lg:items-center lg:flex-row flex-col '>
          <div className='flex lg:items-baseline gap-3'>
            <input
              type='checkbox'
              id='terms'
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className='mt-1 size-7'
            />
            <label
              htmlFor='terms'
              className=' justify-start text-sm sm:text-lg lg:text-[32px] font-normal font-Rethink_Sans leading-[39px]'
            >
              <span className='text-[#4f4f4f] '>I accept the </span>
              <span className='text-[#365272] '>terms of use</span>
              <span className='text-[#4f4f4f]'>
                {" "}
                of processing my personal data
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button className='flex mt-5 lg:mt-0 lg:justify-center items-center  relative '>
            <div className='bg-[#365272] p-3 lg:p-5 w-[200px] lg:w-[325.88px] flex justify-center items-center lg:h-[99px] text-[#f8f9fa] text-[1.25rem] lg:text-3xl font-semibold rounded-[49.50px] font-plus-jakarta-sans lg:leading-[41.23px]'>
              Send Request
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
