import React from "react";
import { Carousel } from "antd";

export default function Hero() {
  const content = [
    {
      title: "Enjoy Your Morning Coffee",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rerum nulla adipisci sequi, iste accusamus perferendis odit aliquid? Sit, laborum.",
      urlImg:
        "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Enjoy Your Morning Coffee",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rerum nulla adipisci sequi, iste accusamus perferendis odit aliquid? Sit, laborum.",
      urlImg:
        "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Enjoy Your Morning Coffee ",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rerum nulla adipisci sequi, iste accusamus perferendis odit aliquid? Sit, laborum.",
      urlImg:
        "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div>
      <Carousel>
        {content.map((item) => (
          <div className="flex w-full h-screen relative">
            <div className=" absolute top-1/2 left-20 text-brand-bg4">
              <h1 className="text-6xl font-bold mb-5">{item.title}</h1>
              <p className="w-1/2">{item.text}</p>
            </div>
            <img
              className="w-full h-screen object-cover rounded-t-3xl"
              src={item.urlImg}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
