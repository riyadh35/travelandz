import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/d-1.png";
import img2 from "../assets/d-2.png";
import img3 from "../assets/d-3.png";

const AiDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-16">
      <div className="w-[872px]">
        <h4 className="font-bold text-[35px] text-[#1B1B1E]">
          Discover Unique Destinations with AI Trip Itinerary.
        </h4>
        <p className="mt-4 font-normal text-lg text-[#3C3C43]">
          Explore our AI's handpicked selection of the top 10 unique cities and
          create lifelong vacation's memories using AI trip planner. Use
          Travelandz AI planner to experience local culture and nature in these
          breathtaking destinations.
        </p>
      </div>
      <div className="mt-7  w-[98%] gap-8">
        <Slider {...settings}>
          <div className="">
            <img src={img1} alt="" />
            {/* <div className="">
              <p>
                Amar sonar bangla ami tomay valobashi ,chiro din tomar akash
                tomar batash amar prane oma amar prane bazai bashi sonar bangla
                ami tomay valobashi
              </p>
            </div> */}
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AiDestination;
