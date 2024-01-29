import features1 from "../assets/features1.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";

const Features = () => {
  return (
    <div className="mt-24 mb-24">
      <div className="text-center">
        <h2 className="font-bold text-[40px] text-[#1B1B1E]">
          Unparalleled Features for Effortless <br />
          AI Trip Planning
        </h2>
        <p className="mt-4 font-normal text-lg text-[#3C3C43]">
          Travelandz is an AI trip planner that uses the tools of travel
          agencies, allowing it to offer the best price for <br /> hotels and
          activities available.
        </p>
      </div>
      <div className="mt-20 flex flex-row justify-between gap-10">
        <div className="p-4 flex flex-col justify-around gap-3 border bg-white rounded-lg w-[412px] h-[339px]">
          <img src={features1} alt="" className="w-[42px] h-[42px]" />
          <h5 className="font-bold text-[25px] text-[#1B1B1E]">
            Personalized Planning
          </h5>
          <p>
            Our AI-driven platform crafts unique travel plans tailored to your
            preferences, ensuring a unique experience that suits you. Share your
            plans with the Travelandz community to receive valuable suggestions
            and ideas from fellow travelers.
          </p>
        </div>
        <div className="p-4 flex flex-col justify-around gap-3 border bg-white rounded-lg w-[412px] h-[339px]">
          <img src={features2} alt="" className="w-[42px] h-[42px]" />
          <h5 className="font-bold text-[25px] text-[#1B1B1E]">
            Real-time Availability
          </h5>
          <p>
            Stay up-to-date with the latest information on hotels, attractions,
            and transportation. Our AI travel planning platform connects to
            real-time systems, allowing you to effortlessly plan and book every
            aspect of your unique AI vacation itinerary with confidence.
          </p>
        </div>
        <div className="p-4 flex flex-col justify-around gap-3 border bg-white rounded-lg w-[412px] h-[339px]">
          <img src={features3} alt="" className="w-[42px] h-[42px]" />
          <h5 className="font-bold text-[25px] text-[#1B1B1E]">
            User-friendly Interface
          </h5>
          <p>
            Navigating our AI travel planner is a breeze, thanks to our
            intuitive design. We've created a seamless user experience that
            simplifies the planning process, allowing you to focus on creating
            unforgettable vacation's memories with AI trip planner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
