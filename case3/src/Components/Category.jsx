import React from "react";
import "./card.css";
import { AiFillStar } from "react-icons/ai";

export default function Category() {
  const category = [
    {
      title: "Coffee",
      deskripsi:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, mollitia et atque maxime similique ut.",
      imgUrl:
        "https://images.pexels.com/photos/8641247/pexels-photo-8641247.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: [
        {
          title: "Americano",
          imgUrl:
            "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Americano",
          imgUrl:
            "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Americano",
          imgUrl:
            "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
      rating: 5,
    },
    {
      title: "Dessert",
      deskripsi:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, mollitia et atque maxime similique ut.",
      imgUrl:
        "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: [
        {
          title: "Macarons",
          imgUrl:
            "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYXJvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Macarons",
          imgUrl:
            "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYXJvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Macarons",
          imgUrl:
            "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYXJvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      rating: 5,
    },
    {
      title: "Sandwich",
      deskripsi:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, mollitia et atque maxime similique ut.",
      imgUrl:
        "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      type: [
        {
          title: "Cheese",
          imgUrl:
            "https://images.pexels.com/photos/2160296/pexels-photo-2160296.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Cheese",
          imgUrl:
            "https://images.pexels.com/photos/2160296/pexels-photo-2160296.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Cheese",
          imgUrl:
            "https://images.pexels.com/photos/2160296/pexels-photo-2160296.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ],
      rating: 5,
    },
    {
      title: "Bread",
      deskripsi:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, mollitia et atque maxime similique ut.",
      imgUrl:
        "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: [
        {
          title: "Loaf",
          imgUrl:
            "https://images.unsplash.com/photo-1618194696460-202623a57e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFkJTIwbG9hZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Loaf",
          imgUrl:
            "https://images.unsplash.com/photo-1618194696460-202623a57e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFkJTIwbG9hZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Loaf",
          imgUrl:
            "https://images.unsplash.com/photo-1618194696460-202623a57e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFkJTIwbG9hZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
      rating: 5,
    },
  ];
  return (
    <section className="container my-10 mx-auto px-5">
      <div className="flex items-center mb-20 justify-center">
        <h1 className="text-3xl font-bold text-brand-bg2 border-dashed border-b-2 border-brand-bg2 pb-2 px-3">
          Category of Our Menu
        </h1>
      </div>
      <div className="grid grid-cols-4 w-fit h-full gap-8 text-brand-bg2">
        {category.map((item) => (
          <div className="flex flex-col gap-3 rounded-2xl bg-brand-bg3 p-2 pb-3 border border-brand-bg2">
            <div className="card-img cursor-pointer w-full rounded-xl overflow-hidden border border-brand-bg2 ">
              <img
                className="w-full h-96 hover:blur-sm ease-in-out duration-200 rounded-xl object-cover overflow-hidden block scale-100 hover:scale-150 "
                src={item.imgUrl}
                alt=""
              />
              <div className="all text-brand-bg1 text-center ">
                <div className="grid grid-cols-3 p-3 gap-3 mb-3">
                  {item.type.map((item) => (
                    <div className="bg-brand-bg3 h-40 p-1 rounded-md">
                      <img className="rounded-sm" src={item.imgUrl} alt="" />
                      <p className="text-sm pt-1">{item.title}</p>
                    </div>
                  ))}
                </div>
                <button className="bg-brand-bg3 p-2 rounded-lg text-sm w-32 border border-brand-bg1">
                  View More
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-2">
              <h6 className="text-lg font-bold border-b border-dashed border-brand-bg2">
                {item.title}
              </h6>
              <p className="text-sm">{item.deskripsi}</p>
              <div className="flex flex-col items-end">
                <div className="flex">
                  <AiFillStar color="yellow" />
                  <AiFillStar color="yellow" />
                  <AiFillStar color="yellow" />
                  <AiFillStar color="yellow" />
                  <AiFillStar color="yellow" />
                </div>
                <p className=" text-xs">{item.rating}/5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
