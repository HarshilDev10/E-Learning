import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        
        <div>
          <h2 className="text-xl font-bold mb-3">🏛️ AMTICS</h2>
          <p className="text-sm leading-6 text-gray-300">
            Asha M. Tarsadia Institute of Computer Science & Engineering<br />
            Bardoli, Surat – 396105
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">⚡ Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Admissions</a></li>
            <li><a href="#" className="hover:text-white">Departments</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">📞 Contact</h3>
          <p className="text-sm text-gray-400 leading-6">
            Phone: <span className="text-white">9913098634</span><br />
            Email: <span className="text-white">22amtics034@gmail.com</span>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">🌐 Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:scale-110 transition">🌍</a>
            <a href="#" className="hover:scale-110 transition">📘</a>
            <a href="#" className="hover:scale-110 transition">📸</a>
            <a href="#" className="hover:scale-110 transition">🔗</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Asha M. Tarsadia Institute. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
