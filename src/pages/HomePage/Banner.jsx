import React from "react";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[660px] homepage-banner flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="font-extrabold text-[50px] text-white font-sans capitalize ">
          Experience Wanderlust at its Finest <br /> with AI-Powered Travel
          Planner
        </h1>
        <p className="font-normal text-[18px] text-white font-sans ">
          Discover the best prices, secure your mobile tickets, and set off on a
          journey of a lifetime.
        </p>
      </div>
      {/* business trip explore field */}
      <div className="w-[1066px] h-[186px] bg-white rounded-[25px] mt-14 px-5 pt-5">
        <div className="flex border-b-[2px] pb-[8px]">
          <h6 className="font-semibold text-[16px] leading-[20px] underline decoration-2 decoration-[#0189EB] underline-offset-[15px]">
            Business Trip
          </h6>
          <h6 className="ml-3 font-[16px] text-[#69696E]">Vacationing</h6>
        </div>
        {/* form section */}
        <form className="pt-6 flex md:flex-row flex-col gap-4 md:gap-[24px]">
          {/* destination  */}
          <div className="flex flex-col ">
            <label
              htmlFor="destination "
              className="mb-3 font-medium text-base"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="What is your destination"
              className="w-[279px] h-[47px] border border-[#DFDFDF] bg-white px-5 rounded-3xl"
            />
          </div>
          {/* check in  */}
          <div className="flex flex-col ">
            <label htmlFor="check-in" className="mb-3 font-medium text-base">
              Check-in
            </label>
            <input
              type="date"
              id="check-in"
              placeholder="DD/MM/YYYY"
              className="w-[160px] h-[47px] border border-[#DFDFDF] bg-white px-5 rounded-3xl items-center"
            />
          </div>
          {/* check out  */}
          <div className="flex flex-col ">
            <label htmlFor="check-in" className="mb-3 font-medium text-base">
              Check-out
            </label>
            <input
              type="date"
              id="check-out"
              placeholder="DD/MM/YYYY"
              className="w-[160px] h-[47px] border border-[#DFDFDF] bg-white px-5 rounded-3xl items-center"
            />
          </div>
          {/*  Guest   */}
          <div className="flex flex-col ">
            <label htmlFor="check-in" className="mb-3 font-medium text-base">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="1"
              className="w-[140px] h-[47px] border border-[#DFDFDF] bg-white px-5 rounded-3xl items-center"
            />
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="w-[180px] h-[47px] border rounded-3xl mt-[35px] bg-gradient-to-r from-[#DD727D] to-[#834047]"
          >
            <Link to="/" className="text-white font-semibold text-lg">
              Explore Now
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
