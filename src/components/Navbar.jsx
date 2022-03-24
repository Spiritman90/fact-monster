import React from "react";
import { BsMoon } from "react-icons/bs";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <h3 className='navbar__title'>Where in the world?</h3>
      </div>

      <div className='navbar__dark-mode'>
        <BsMoon />
        <button className='navbar__button'>Dark Mode</button>
      </div>
    </nav>
  );
}

export default Navbar;
