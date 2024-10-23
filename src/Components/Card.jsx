import React from "react";

function Card() {
  const data = [
    {
      id: "1",
      title: "Enjoy on your TV",
      content:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      src: "",
    },
    {
      id: "2",
      title: "Download your shows to watch offline",
      content:
        "Save your favourites easily and always have something to watch.",
      src: "",
    },
    {
      id: "3",
      title: "Watch everywhere",
      content:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      src: "",
    },
    {
      id: "4",
      title: "Create profiles for kids",
      content:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      src: "",
    },
  ];

  return (
    <div className="h-full mt-12 mx-28 max-lg:mx-4">
      <h2 className="text-white text-2xl font-semibold mt-6">
        More reasons to join
      </h2>
      <div className="mt-4 flex flex-wrap justify-around">
        {data.map((data) => {
          return (
            <div className="bg-gradient-to-br from-blue-950  via-blue-950 to-purple-900 mr-4 w-72 p-6 rounded-lg text-white my-4">
              <p className="text-2xl font-bold">{data.title}</p>
              <p className="mt-4 text-xl font-semibold text-gray-500">
                {data.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
