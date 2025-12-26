


// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="w-full border-b border-gray-200">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="text-[26px] font-extrabold text-blue-600">
//           KEA
//         </Link>

//         {/* Menu */}
//         <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
//           <NavItem to="/" label="Home" />
//           <NavItem to="/services" label="Our Services" />
//           <NavItem to="/experts" label="Our Experts" />
//           <NavItem to="/insights" label="Company Insights" />
//           <NavItem to="/contact" label="Contact Us" />
//           <NavItem to="/careers" label="Careers" />
//         </ul>

//         {/* Button */}
//         <button
//           className="text-[14px] font-semibold px-6 py-2 text-white transition"
//           style={{ backgroundColor: "#3b54adff", borderRadius: "7px" }}
//         >
//           Get A Quote
//         </button>
//       </div>
//     </nav>
//   );
// };

// const NavItem = ({ to, label }) => {
//   return (
//     <li>
//       <Link
//         to={to}
//         className="text-black transition hover:text-blue-600 active:text-blue-600"
//       >
//         {label}
//       </Link>
//     </li>
//   );
// };

// export default Navbar;



import { NavLink } from "react-router-dom"; // Change Link to NavLink
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-[26px] font-extrabold text-blue-600">
          KEA
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
          <NavItem to="/" label="Home" />
          <NavItem to="/services" label="Our Services" />
          <NavItem to="/experts" label="Our Experts" />
          <NavItem to="/insights" label="Company Insights" />
          <NavItem to="/contact" label="Contact Us" />
          <NavItem to="/careers" label="Careers" />
        </ul>

        {/* Desktop Button */}
        <button
          className="hidden lg:block text-[14px] font-semibold px-6 py-2 text-white"
          style={{ backgroundColor: "#3b54adff", borderRadius: "7px" }}
        >
          Get A Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-sm border px-3 py-1"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-[14px] font-medium">
            <NavItem to="/" label="Home" close={() => setOpen(false)} />
            <NavItem to="/services" label="Our Services" close={() => setOpen(false)} />
            <NavItem to="/experts" label="Our Experts" close={() => setOpen(false)} />
            <NavItem to="/insights" label="Company Insights" close={() => setOpen(false)} />
            <NavItem to="/contact" label="Contact Us" close={() => setOpen(false)} />
            <NavItem to="/careers" label="Careers" close={() => setOpen(false)} />

            <button
              className="mt-4 text-[14px] font-semibold px-6 py-2 text-white"
              style={{ backgroundColor: "#3b54adff", borderRadius: "7px" }}
            >
              Get A Quote
            </button>
          </ul>
        </div>
      )}
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
            isActive ? "text-blue-600 font-semibold" : "text-black hover:text-blue-600"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default Navbar;
