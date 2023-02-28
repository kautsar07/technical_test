import React from "react";

export default function FavoriteMenu() {
  const favorite = [
    {
      title: "Americano",
      urlImg:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Espresso",
      urlImg:
        "https://images.unsplash.com/photo-1661989770233-e84b8c46d1f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVzc3ByZXNzb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Capuchino",
      urlImg:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdWNoaW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Caramel Latte",
      urlImg:
        "https://images.unsplash.com/photo-1522210338192-67c5905429d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyYW1lbCUyMGxhdHRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Vanilla Latte",
      urlImg:
        "https://images.unsplash.com/photo-1504194472231-5a5294eddc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFuaWxsYSUyMGxhdHRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Turkish Coffee",
      urlImg:
        "https://images.unsplash.com/photo-1508700080317-45bb1ebbe416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHR1cmtpc2glMjBjb2ZmZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <section className="bg-brand-bg3 py-10">
      <div className="container my-10 mx-auto px-5">
        <div className="flex items-center mb-20 justify-center">
          <h1 className="text-3xl font-bold text-brand-bg2 border-dashed border-b-2 border-brand-bg2 pb-2 px-3">
            Favorite Menu
          </h1>
        </div>
        <div className="flex gap-10 text-brand-bg2">
          <div className="flex flex-col gap-5">
            {favorite.slice(0,3).map((item) => (
              <div className="flex gap-5">
                <>
                  <div className="w-40 h-40">
                    <img
                      className="object-cover h-full w-full rounded-xl"
                      src={item.urlImg}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis, magni!
                    </p>
                  </div>
                  <h6 className="text-3xl font-semibold">$2.00</h6>
                </>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {favorite.slice(3,6).map((item) => (
              <div className="flex gap-5">
                <>
                  <div className="w-40 h-40">
                    <img
                      className="object-cover h-full w-full rounded-xl"
                      src={item.urlImg}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis, magni!
                    </p>
                  </div>
                  <h6 className="text-3xl font-semibold">$2.00</h6>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
