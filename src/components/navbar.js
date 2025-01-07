import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={require('../assets/logo-ytss.png')} alt="YouthTigerSoccerSchool" className="h-12 w-12" />
              <span className="text-[#f88f4d] text-xl font-bold">YouthTigerSoccerSchool</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 mt-3">
            <Link to="/" className="hover:text-[#ffb784] text-[#f88f4d] px-3 py-2 relative group">
              <span>Beranda</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffb784] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/about" className="hover:text-[#ffb784] text-[#f88f4d] px-3 py-2 relative group">
              <span>Tentang</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffb784] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/contact" className="hover:text-[#ffb784] text-[#f88f4d] px-3 py-2 relative group">
              <span>Kontak</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffb784] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f88f4d] hover:text-[#ffb784] focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Beranda</Link>
              <Link to="/about" className="block hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Tentang</Link>
              <Link to="/contact" className="block hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Kontak</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
