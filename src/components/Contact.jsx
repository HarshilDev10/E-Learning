import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-16">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form and we'll get in touch shortly.
          </p>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 md:p-12 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-200">
            You can reach us via the following channels:
          </p>

          <div className="space-y-4 text-gray-100">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <span>info@abccollege.edu.in</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl" />
              <span>+91 99xxxxxxxx</span>
            </div>
            <div className="flex items-center gap-4">
              <FaGlobe className="text-2xl" />
              <span>www.abccollege.edu.in</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl" />
              <span>linkedin.com/abccollege</span>
            </div>
            <div className="flex items-center gap-4">
              <FaTwitter className="text-2xl" />
              <span>twitter.com/abccollege</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
