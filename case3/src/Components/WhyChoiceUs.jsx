import React from "react";
import { CiCalendarDate, CiCoffeeBean, CiLocationOn } from "react-icons/ci";
import { FaAward, FaWifi, FaWineGlass } from "react-icons/fa";

export default function WhyChoiceUs() {
  return (
    <section className="container my-10 mx-auto px-5">
      <div className="flex items-center mb-20 justify-center">
        <h1 className="text-3xl font-bold text-brand-bg2 border-dashed border-b-2 border-brand-bg2 pb-2 px-3">
          Why You Should Choose Us
        </h1>
      </div>
      <div className="flex gap-10">
        <img
          className="w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
          alt=""
        />
        <div className="flex flex-col gap-5 w-full text-brand-bg2">
          <div className="flex items-center justify-between gap-3 ">
            <div className="w-fit bg-brand-bg2 p-3 rounded-full">
              <CiLocationOn size={30} color="#FFFBF3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Best Place</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil architecto dolorum magni nostrum unde libero error iste
                dolores adipisci.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 ">
            <div className="w-fit bg-brand-bg2 p-3 rounded-full">
              <CiCoffeeBean size={30} color="#FFFBF3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Natural Coffee</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil architecto dolorum magni nostrum unde libero error iste
                dolores adipisci.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 ">
            <div className="w-fit bg-brand-bg2 p-3 rounded-full">
              <CiCalendarDate size={30} color="#FFFBF3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Online Reservation</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil architecto dolorum magni nostrum unde libero error iste
                dolores adipisci.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full text-brand-bg2">
          <div className="flex items-center justify-between gap-3 ">
            <div className="w-fit bg-brand-bg2 p-3 rounded-full">
              <FaAward size={30} color="#FFFBF3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Best Quality</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil architecto dolorum magni nostrum unde libero error iste
                dolores adipisci.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 ">
            <div className="w-fit bg-brand-bg2 p-3 rounded-full">
              <FaWifi size={30} color="#FFFBF3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Free Wifi</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil architecto dolorum magni nostrum unde libero error iste
                dolores adipisci.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 ">
            <div className="w-fit bg-brand-bg2 p-3 rounded-full">
              <FaWineGlass size={30} color="#FFFBF3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Event Space</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nihil architecto dolorum magni nostrum unde libero error iste
                dolores adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
