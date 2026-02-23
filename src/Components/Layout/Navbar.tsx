import  { useState } from 'react';
import logo from '../../assets/Group.png';
import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearchOutline } from 'react-icons/io5';
import { FaUserLarge } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = useSelector((state:any) => state?.cart.items.length);

  const navLinks = [
    { name: 'New Drops 🔥', href: '#' },
    { name: 'Men', href: '#', hasDropdown: true },
    { name: 'Women', href: '#', hasDropdown: true },
  ];

  return (
    <nav className="md:rounded-3xl rounded-xl md:px-8  px-4 md:py-8 py-4   shadow-sm bg-[#FAFAFA]">
      {/* Main Div Starts */}
      <div className=" flex items-center justify-between">
        
        {/* Mobile: Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none transition-transform duration-300 active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop: Left Links */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <div className='flex  items-center cursor-pointer hover:scale-110 transition-transform ease-in-out-duration-500' key={link.name}>
               <p className='rubik-600 text-lg'> {link.name}</p>
              {link.hasDropdown && (
                <span><RiArrowDownSFill/></span>
              )}
            </div>
            
           
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
        
          <Link to="/">
          <img src={logo} alt="Logo" className="md:w-32 w-20 md:h-8 h-5" /></Link>
        </div>

        {/* Right: Search, User, Cart */}
        <div className="flex items-center md:gap-10 gap-2">
          <button className="hidden md:block hover:scale-110 transition-transform">
            <span className='cursor-pointer'><IoSearchOutline className='h-6 w-6 text-black ' /></span>
          </button>
          
          <button className="hover:scale-110 transition-transform">
            <span className='cursor-pointer'><FaUserLarge className='h-6 w-6 text-black ' /></span>
          </button>

          <div className="relative cursor-pointer group">
            <Link to="/cart"><div className="bg-orange-400 text-black text-sm opens-600 font-semibold rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
              
              {count}
            </div></Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated Dropdown) */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-3 pb-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;