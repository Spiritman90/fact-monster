import React from "react";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <h3 className='navbar__title'>Where in the world?</h3>
        </Link>
      </div>

      <div className='navbar__dark-mode'>
        <BsMoon />
        <button className='navbar__button'>Dark Mode</button>
      </div>
    </nav>
  );
}

export default Navbar;
