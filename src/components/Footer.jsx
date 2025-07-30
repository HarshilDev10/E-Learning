import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        
        {/* College Info */}
        <div className="space-y-3 px-3">
          <h2 className="text-xl font-bold text-white">ABC College of Computer Science & Engineering</h2>
          <p className="text-sm leading-6 text-gray-300">
            Surat, Gujarat – 395007<br />
            Empowering Innovators of Tomorrow
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 px-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition">Departments</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3 px-3">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-sm text-gray-400 leading-6">
            Phone: <span className="text-white">+91 99130 98634</span><br />
            Email: <span className="text-white">info@abccollege.edu.in</span>
          </p>
        </div>

        {/* Socials */}
        <div className="space-y-3 px-3">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-gray-400">
            <a href="https://www.abccollege.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGlobe /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ABC College. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
