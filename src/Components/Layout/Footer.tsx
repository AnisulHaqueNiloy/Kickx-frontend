import logo from "../../../public/assets/logo.png";
import rightimg from "../../../public/assets/Group 1.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 md:px-10  bg-[#EAE9E5]  ">
      <footer className="w-full  ">
        {/* 1. Join Club Section (Blue Box) */}
        <div className="bg-[#4A69E2] md:rounded-tr-[48px] rounded-tr-3xl rounded-tl-3xl md:rounded-tl-[48px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center overflow-hidden relative">
          <div className="z-10 w-full md:w-1/2 md:pb-10 pb-16">
            <h2 className="text-white text-3xl md:text-5xl font-semibold rubik-600 uppercase rubik-700 leading-tight mb-4">
              Join our KicksPlus <br /> Club & get 15% off
            </h2>
            <p className="text-[#E7E7E3] text-lg mb-8 opens-600 font-semibold">
              Sign up for free! Join the community.
            </p>
            <div className="flex flex-row gap-2 lg:w-2/3 ">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border flex-grow w-0 min-w-0 border-white/40 text-[#E7E7E3] p-3 rounded-xl focus:outline-none "
              />
              <button className="bg-[#232321] whitespace-nowrap flex-shrink-0 text-[10x] md:text-[14px] cursor-pointer w-fit rubik-500 text-white px-3 md:px-8 py-3 rounded-xl  uppercase hover:bg-black transition-all">
                Submit
              </button>
            </div>
          </div>

          {/* Big KICKS Logo with Image Background */}
          <div className="flex w-full md:w-1/2 md:justify-center -mt-18 mb-10 md:mb-0 md:-mt-0">
            <img src={rightimg} alt="KicksPlus Logo" className="w-52 h-44  md:mb-24 lg:w-82 2xl:md:w-90 md:h-64  object-contain" />
          </div>
        </div>

        {/* 2. Main Footer Links Section (Dark Box) */}
        <div className="bg-[#232321] relative md:rounded-tr-[48px] rounded-tr-3xl rounded-tl-3xl md:rounded-tl-[48px] rounded-br-3xl rounded-bl-3xl -mt-20 md:rounded-br-[48px] md:rounded-bl-[48px]  z-50 pt-24 pb-10 px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-16 gap-5 text-white">
            {/* About Us */}
            <div className="md:col-span-2">
              <h4 className="text-[#FFA52F] rubik-600 font-semibold md:text-4xl text-2xl mb-4">
                About us
              </h4>
              <p className="text-[#E7E7E3] opens-600 font-semibold md:text-xl text-lg leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[#FFA52F] md:text-2xl text-lg rubik-600 font-semibold mb-4">
                Categories
              </h4>
              <ul className="space-y-2 text-[#E7E7E3] opens-600 text-lg md:text-xl font-semibold">
                <li className="hover:text-white cursor-pointer transition-all">
                  Runners
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Sneakers
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Basketball
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Outdoor
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Golf
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Hiking
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#FFA52F] md:text-2xl text-lg rubik-600 font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-[#E7E7E3] opens-600 text-lg md:text-xl font-semibold">
                <li className="hover:text-white cursor-pointer transition-all">
                  About
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Contact
                </li>
                <li className="hover:text-white cursor-pointer transition-all">
                  Blogs
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-[#FFA52F] md:text-2xl text-lg rubik-600 font-semibold mb-4">
                Follow us
              </h4>
              <div className="flex gap-4">
                <FaFacebookF
                  className="cursor-pointer hover:text-[#4A69E2] transition-all"
                  size={24}
                />
                <FaInstagram
                  className="cursor-pointer hover:text-[#4A69E2] transition-all"
                  size={24}
                />
                <FaTwitter
                  className="cursor-pointer hover:text-[#4A69E2] transition-all"
                  size={24}
                />
                <FaTiktok
                  className="cursor-pointer hover:text-[#4A69E2] transition-all"
                  size={24}
                />
              </div>
            </div>
          </div>

          {/* Bottom Big Logo */}
          <div className="md:mt-20 mt-10 flex justify-center  pt-10">
            <img
              src={logo}
              alt="KICKS"
              className="w-full h-auto object-contain z-50"
            />
          </div>
        </div>
      </footer>

      <p className="text-center py-3 open-400 text-lg">© All rights reserved</p>
    </div>
  );
};

export default Footer;
