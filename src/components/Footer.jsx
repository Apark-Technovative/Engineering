import React from "react";
import logo from "../images/logo.webp";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f9fb] text-[#1f2937] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About Company */}
        <div>
          <h3 className="text-[16px] font-semibold mb-6">About Company</h3>
          <p className="text-[14px] leading-7 text-gray-700">
            P.A.Engineering, established in May 2018, is a
            reputable name in property appraisal, surveying, and property consultancy.
            Dedicated to excellence and delivering quality services, it has earned a
            commendable reputation in the industry.
          </p>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-[16px] font-semibold mb-6">Our Company</h3>
          <ul className="space-y-3 text-[14px] text-gray-700">
            <li><Link to="/services" className="hover:text-orange-500 transition">Our Services</Link></li>
            <li><Link to="/experts" className="hover:text-orange-500 transition">Our Experts</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-orange-500 transition">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[16px] font-semibold mb-6">Contact Info</h3>
          <p className="text-[14px] font-semibold mb-2">Corporate Office Address</p>
          <p className="text-[14px] leading-6 text-gray-700 mb-4">
            Sorakhutte-16, Kathmandu
          </p>

          <div className="flex gap-3 items-center text-[14px] text-gray-700 mb-3 cursor-pointer">
            <AiOutlinePhone className="w-5 h-5 text-gray-600" />
            <span>+977-9860123220</span>
          </div>

          <div className="flex gap-3 items-center text-[14px] text-gray-700 cursor-pointer">
            <AiOutlineMail className="w-5 h-5 text-gray-600" />
            <span>paengineering009@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-10 text-center">
        {/* <img
          src={logo}
          alt="PA Engineering Logo"
          className="mx-auto mb-4 h-14 md:h-16 w-auto"
        /> */}
        
        <p className="text-[14px] text-gray-600">
          © 2025 P.A Engineering. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

