import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#344966] font-Rethink_Sans text-white py-10 '>
      <div className='inner_responsiveWidth relative'>
        <div className='xl:ml-[184px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-10 border-b border-gray-400 pb-8'>
          {/* Logo and Description */}
          <div className=''>
            <h2 className='text-lg md:text-[2.06rem] font-semibold mb-3'>
              YOUR LOGO
            </h2>
            <p className='text-sm md:text-[1.06rem] text-gray-300'>
              We believe in creating experiences that blend luxury, nature, and
              sustainability. Partner with us for a villa stay that feels like
              home, yet extraordinary.
            </p>
          </div>

          {/* Address */}
          <div className='text-sm md:text-[1.06rem]'>
            <h3 className=' font-medium mb-2'>Visit Us</h3>
            <p className='text-gray-300'>
              8, Thomas Edison Street,
              <br />
              3013, Limassol
            </p>
            <p className='mt-2 text-gray-300'>T: +357 25 873233</p>
          </div>

          {/* Working Hours */}
          <div className='text-sm md:text-[1.06rem]'>
            <h3 className='font-medium mb-2'>Working Hours</h3>
            <p className=' text-gray-300'>Monday – Friday</p>
            <p className=' text-gray-300'>9:00 AM – 9:00 PM</p>
            <p className=' text-gray-300 mt-1'>Saturday – Sunday – Closed</p>
          </div>

          {/* Quick Links */}
          <div className='text-sm md:text-[1.06rem]'>
            <h3 className='font-medium mb-2'>Quick Links</h3>
            <ul className='text-gray-300 space-y-1'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Property</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className='flex xl:ml-[184px] flex-col md:flex-row justify-between items-center mt-6 text-gray-300'>
          <p className='mb-2 text-[1rem] md:mb-0'>
            © 2025 Your Brand. All rights reserved.
          </p>
          <div className='flex gap-6 mb-2 md:mb-0 text-[1.06rem]'>
            <a href='#' className='hover:text-white'>
              Terms of use
            </a>
            <a href='#' className='hover:text-white'>
              Privacy Policy
            </a>
          </div>
          <div className='flex gap-4'>
            <a href='#' aria-label='Instagram'>
              <FaInstagram className='hover:text-white' />
            </a>
            <a href='#' aria-label='Twitter'>
              <FaTwitter className='hover:text-white' />
            </a>
            <a href='#' aria-label='Facebook'>
              <FaFacebookF className='hover:text-white' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
