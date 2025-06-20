import React from "react";
import MenuBarIcon from "../assets/MenuBarIcon";

const Navbar = () => {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a className="flex items-center gap-2" href="/">
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Hiren Savaliya &nbsp;
            <span className="sm:block hidden"> | Full Stack Developer</span>
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#work">Work</a>
          </li>
          <li></li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <MenuBarIcon />
          <div className="hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <a href="#about">About</a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <a href="#work">Work</a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
