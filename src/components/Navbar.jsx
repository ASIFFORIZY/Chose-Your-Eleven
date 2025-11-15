import React from 'react';
import logo from "../assets/logo.png"




const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-sm max-w-[1200px] mx-auto ">
        <div className="flex-none">
        </div>
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          Coin 70000000000 🪙
        </div>
      </div>
    </div>
  );
};

export default Navbar;