import React from "react";
import Banner from "./Banner";
import Features from "../../components/Features";
import AiDestination from "../../components/AiDestination";

const HomePage = () => {
  return (
    <div className="w-[1284px] mx-auto">
      <Banner />
      <Features />
      <AiDestination />
    </div>
  );
};

export default HomePage;
