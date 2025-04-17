import React from "react";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-col lg:flex-row items-center justify-between bg-base-200 min-h-[700px] px-25 rounded-2xl">
        <div className="w-[650px] text-center lg:text-start">
          <h1 className="text-4xl md:text-6xl w-[500px] md:w-[650px] mx-auto font-bold mt-10 md:mt-15 lg:mt-0">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-green-900 text-white py-6 px-6 rounded-3xl mt-8">
            View The List
          </button>
        </div>
        <div>
          <img src={hero} alt="" width={300} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
