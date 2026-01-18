import { Link } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import edd from "../../assets/logonew.jpg";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/wallet" className="flex items-center">
            <img
              src={edd}
              alt="Logo"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            {["About", "Edge-ucation", "Support", "Events", "Get Started"].map(
              (item) => (
                <Link
                  key={item}
                  to="/wallet"
                  className="hover:text-emerald-500 transition"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-700 hover:text-emerald-500 transition"
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>

              <Link
            
                  to="/wallet"
               
                >
              <button className="border-2  rounded bg-green-300 px-2 py-1 ">Connect Wallet</button>
    
                </Link>
           
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="w-5 h-0.5 bg-gray-800"></span>
              <span className="w-5 h-0.5 bg-gray-800"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm">
            {["About", "Edge-ucation", "Support", "Events", "Get Started"].map(
              (item) => (
                <Link
                  key={item}
                  to="/wallet"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-emerald-500 transition"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Hero;
