import React from "react";
import logo from "../Img/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="bg-brand-bg1 py-10">
      <div className="container my-10 mx-auto px-5">
        <div className="flex justify-between text-brand-bg4">
          <div className="w-full">
            <div className="w-28 h-28 bg-brand-bg3 p-2 rounded-full">
              <img className="w-full" src={logo} alt="" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold">NAVIGATION</h1>
            <ul className="text-sm">
              <li>Menu</li>
              <li>About Us</li>
              <li>Kind Of Coffee</li>
              <li>Blog</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold mb-2">CONTACTS</h1>
            <div className="flex items-center gap-2 text-sm mb-2">
              <BsFillTelephoneFill size={12} />
              <p>+62 3783434023</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <BsFillTelephoneFill size={12} />
              <p>+62 3783434023</p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold">LOCATIONS</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptatem doloribus ab aperiam provident voluptatum corporis
              magnam tempore quam, minima vero rerum nemo porro molestias. Sequi
              est error accusamus aperiam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
