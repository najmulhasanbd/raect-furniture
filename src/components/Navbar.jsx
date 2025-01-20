import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out text-white">
      <nav className="flex mx-auto justify-between py-4 px-6 container max-w-screen-2xl items-center">
        <Link to="/">Logo</Link>

        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        <div className="hidden md:block">
          <NavItems />
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black opacity-50 flex flex-col items-center justify-center space-y-6 text-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden `}
        >
          <div
            className="absolute top-4 right-4 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        <div className="hidden md:block relative cursor-pointer">
          <CiShoppingBasket />
          <sup className="absolute top-0 -right-3 w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
