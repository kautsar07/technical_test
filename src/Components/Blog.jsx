import React from "react";

export default function Blog() {
  return (
    <section className="container my-28 mx-auto px-5">
      <div className="flex items-center mb-20 justify-center">
        <h1 className="text-3xl font-bold text-brand-bg2 border-dashed border-b-2 border-brand-bg2 pb-2 px-3">
          Our Latest Blog
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 text-brand-bg2">
        <div className="flex flex-col gap-3">
          <div className="h-64">
            <img
              className="rounded-xl h-full object-cover w-full"
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h1 className="text-lg font-bold">History Of Coffee</h1>
          <p className="text-sm w-3/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus eaque quae ratione natus deserunt praesentium nostrum
            aliquam numquam. Voluptate!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-64">
            <img
              className="rounded-xl h-full object-cover w-full"
              src="https://images.unsplash.com/photo-1544681369-310c49478a6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFtZXJpY2FubyUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h1 className="text-lg font-bold">About Americano</h1>
          <p className="text-sm w-3/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus eaque quae ratione natus deserunt praesentium nostrum
            aliquam numquam. Voluptate!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-64">
            <img
              className="rounded-xl h-full object-cover w-full"
              src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMGJyZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h1 className="text-lg font-bold">Coffee Break</h1>
          <p className="text-sm w-3/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            temporibus eaque quae ratione natus deserunt praesentium nostrum
            aliquam numquam. Voluptate!
          </p>
        </div>
      </div>
    </section>
  );
}
