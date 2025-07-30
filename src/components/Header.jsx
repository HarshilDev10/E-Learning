import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-16 px-4 sm:px-8 md:px-20 border-b-2 relative">
      {/* Logo */}
      <div className="text-xl font-bold">ABC College</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
      </div>

      {/* Hamburger (only on mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 gap-2 md:hidden z-50">
          <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
