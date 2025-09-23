import React from 'react';
import navImg from "../assets/logo.png"

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100 max-w-[1200px] mx-auto shadow ">
        <div class="flex-1">
          <img src={navImg} alt=""  className='w-[60px] h-[55px] '  />
        </div>
        <div class="flex-none items-center ">
          <span>60000000</span>
          <span> Coin 🪙</span>
        </div>
      </div>
        </div>
    );
};

export default Navbar;