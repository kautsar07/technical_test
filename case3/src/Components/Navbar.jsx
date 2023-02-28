import React from "react";
import logo from "../Img/logo.png";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-5">
      <div className="flex w-full justify-between items-center text-md text-brand-bg2 font-semibold h-20">
        <div className="flex w-full xl:w-1/2">
          <img
            className="p-1 2xl:w-20 xl:w-1/4 hover:bg-brand-bg3 hover:border hover:border-brand-bg2 hover:rounded-full cursor-pointer"
            src={logo}
            alt=""
          />
        </div>

        <ul className="flex gap-3 w-full text-center justify-center ">
          <li className=" py-1 px-2 hover:bg-brand-bg2 hover:text-brand-bg4 hover:rounded-md cursor-pointer">
            Menu
          </li>
          <li className=" py-1 px-2 hover:bg-brand-bg2 hover:text-brand-bg4 hover:rounded-md cursor-pointer">
            About Us
          </li>
          <li className=" py-1 px-2 hover:bg-brand-bg2 hover:text-brand-bg4 hover:rounded-md cursor-pointer">
            Kind Of Coffee
          </li>
          <li className=" py-1 px-2 hover:bg-brand-bg2 hover:text-brand-bg4 hover:rounded-md cursor-pointer">
            Blog
          </li>
          <li className=" py-1 px-2 hover:bg-brand-bg2 hover:text-brand-bg4 hover:rounded-md cursor-pointer">
            Reviews
          </li>
        </ul>

        <div className="flex w-full xl:w-1/2 justify-end ">
          <p className="py-1 px-10 border border-brand-bg2 rounded-3xl hover:bg-brand-bg2 hover:text-brand-bg4 cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>
    </nav>
  );
}
