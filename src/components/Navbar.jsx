import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="flex mx-auto justify-between py-4 px-6 container max-w-screen-2xl items-center">
        <Link to="/">Logo</Link>
        <div>
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>cart</div>
      </nav>
    </header>
  );
};

export default Navbar;
