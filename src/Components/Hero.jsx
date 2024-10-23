import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div id="hero" className="h-full ">
        <div className="flex justify-around">
          <img
            src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image"
            className="w-52 max-lg:w-32"
          />
          <div className="w-52  max-lg:hidden"></div>
          <div className="flex justify-center items-center">
            <button className="text-white flex font-bold mr-3 border border-white px-4 py-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 16 16"
                width="17"
                height="22"
                data-icon="LanguagesSmall"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                  fill="currentColor"
                ></path>
              </svg>
              <select className="outline-none bg-transparent ">
                <option className="text-black ">English</option>
                <option className="text-black">हिन्दी</option>
              </select>
            </button>

            <button className="bg-[red]  px-4 py-1 text-white font-bold rounded-md">
              Sign In
            </button>
          </div>
        </div>
        <div className="w-[45%] flex justify-center text-center m-auto text-white">
          <div className=" my-44">
            <h1 className="text-6xl font-bold leading-tight max-lg:text-4xl">
              Unlimited movies, TV shows and more.
            </h1>
            <p className="text-2xl font-semibold mt-2 max-lg:text-lg max-lg:mt-4">
              Starts at ₹149. Cancel at any time.
            </p>
            <p className="text-base mt-6 font-semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="mt-4 flex justify-center max-lg:block">
              <div className="relative m-2">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="px-4 py-3  w-[23rem] text-xl bg-transparent border border-white appearance-none focus:outline-none focus:ring-0 peer rounded-md"
                />
                <label
                  htmlFor="email"
                  className="absolute text-white duration-300 transform-translate-y-6 scale-75 top-4 left-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email address
                </label>
              </div>

              <button className="bg-[red] text-2xl  px-5 py-2 text-white font-bold rounded-md m-2">
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="top-clippath "></div>
      <div className="clippath"></div>
    </div>
  );
}

export default Hero;
