import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="KEA Logo" className="h-20 w-auto" />
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
          <NavItem to="/" label="Home" />
          <NavItem to="/services" label="Our Services" />
          <NavItem to="/experts" label="Our Experts" />
          <NavItem to="/insights" label="Company Insights" />
          <NavItem to="/contact" label="Contact Us" />
          <NavItem to="/careers" label="Careers" />
        </ul>

        {/* Desktop Get A Quote */}
        <NavLink
          to="/get-quote"
          className="hidden lg:block text-[14px] font-semibold px-6 py-2 text-white"
          style={{ backgroundColor: "#3b54adff", borderRadius: "7px" }}
        >
          Get A Quote
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-[14px] font-medium">
          <NavItem to="/" label="Home" close={() => setOpen(false)} />
          <NavItem to="/services" label="Our Services" close={() => setOpen(false)} />
          <NavItem to="/experts" label="Our Experts" close={() => setOpen(false)} />
          <NavItem to="/insights" label="Company Insights" close={() => setOpen(false)} />
          <NavItem to="/contact" label="Contact Us" close={() => setOpen(false)} />
          <NavItem to="/careers" label="Careers" close={() => setOpen(false)} />

          {/* Mobile Get A Quote */}
          <NavLink
            to="/get-quote"
            onClick={() => setOpen(false)}
            className="mt-4 text-[14px] font-semibold px-6 py-2 text-white text-center"
            style={{ backgroundColor: "#3b54adff", borderRadius: "7px" }}
          >
            Get A Quote
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, close }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={close}
        end={to === "/"}
        className={({ isActive }) =>
          `cursor-pointer transition ${
            isActive
              ? "text-blue-600 font-semibold"
              : "text-black hover:text-blue-600"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default Navbar;
