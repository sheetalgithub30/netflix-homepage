import React, { useEffect, useState } from "react";

function Question() {
  const [data, setData] = useState([
    {
      id: "1",
      question: "What is Netflix?",
      answer1:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      answer2:
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      value: false,
    },
    {
      id: "2",
      question: "How much does Netflix cost?",
      answer1:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      value: false,
    },
    {
      id: "3",
      question: "Where can i watch?",
      answer1:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      answer2:
        "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      value: false,
    },
    {
      id: "4",
      question: "How do i cancel?",
      answer1:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      value: false,
    },
    {
      id: "5",
      question: "What can i watch on Netflix?",
      answer1:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      value: false,
    },
    {
      id: "6",
      question: "Is Netflix good for kids?",
      answer1:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      answer2:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      value: false,
    },
  ]);

  function handleClick(idx) {
    console.log(idx);
    let new_data = [...data];
    new_data[idx].value = !new_data[idx].value;
    setData(new_data);
  }

  return (
    <div className="h-full mt-12 mx-28 max-lg:mx-4">
      <h2 className="text-white text-2xl font-semibold mt-6">
        Frequently Asked Questions
      </h2>
      <div className="mt-4">
        {data.map((data, index) => {
          return (
            <div className="bg-slate-800  my-2 rounded-lg text-white  hover:bg-slate-700">
              <div
                className="text-2xl font-bold flex justify-between border-b-4 p-4 border-black "
                onClick={() => handleClick(index)}
              >
                <p className=" my-2">{data.question}</p>
                <p>{data.value === true ? "-" : "+"}</p>
              </div>
              {data.value === true ? (
                <div className="p-4">
                  <p className=" text-xl font-semibold">{data.answer1}</p>
                  <p className=" text-xl font-semibold mt-4">{data?.answer2}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-base text-white mt-6 font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-4 flex justify-center max-lg:block ">
          <div className="relative m-2 ">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="px-4 py-3  w-[30rem] text-xl bg-transparent border border-white appearance-none focus:outline-none focus:ring-0 peer rounded-md max-lg:w-[20rem]"
            />
            <label
              htmlFor="email"
              className="absolute text-white duration-300 transform-translate-y-6 scale-75 top-4 left-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email address
            </label>
          </div>

          <button className="bg-[red] text-2xl  px-5 py-3 text-white font-bold rounded-md m-2">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
