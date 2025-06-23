import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-600">FlyGlobe</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/multi-destination" className="hover:text-blue-600">Business</Link></li>
          <li><Link to="/holiday-packages" className="hover:text-blue-600">About Us</Link></li>
          <li><Link to="/itinerary" className="hover:text-blue-600">Contact Us</Link></li>
          <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
          <li><Link to="/signup" className="hover:text-blue-600">Signup</Link></li>
        </ul>

        {/* Country Selector */}
        <div className="hidden md:flex items-center space-x-2">
          <FaGlobe />
          <select className="border rounded p-1">
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-blue-600" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-gray-700 font-medium">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/multi-destination" onClick={toggleMenu}>Business</Link></li>
          <li><Link to="/holiday-packages" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          <li><Link to="/itinerary" className="hover:text-blue-600">Trip Itinerary</Link></li> 
          <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          <li><Link to="/signup" onClick={toggleMenu}>Signup</Link></li>
        </ul>
      )}
    </nav>
  );
}













          
