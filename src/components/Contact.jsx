import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <div className="text-center mb-20">
        <h3 className="font-bold text-[35px] text-[#1B1B1E] capitalize">
          How can we help ?
        </h3>
        <p className="font-normal text-lg text-[#3C3C43]">
          Travelandz is an AI trip planner that uses the tools of travel
          agencies, allowing it to offer the best price for hotels and
          activities available.
        </p>
      </div>
      {/* contact form */}
      <form
        action=""
        className="w-[521px] p-7 flex flex-col gap-2 bg-white border rounded-3xl"
      >
        <div>
          <label htmlFor="name" className="font-medium text-base text-black ">
            Your name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-[457px] h-[50px] border rounded-[100px] mt-2 px-4"
          />
        </div>
        <div>
          <label htmlFor="number" className="font-medium text-base text-black ">
            Phone number
          </label>
          <input
            type="text"
            placeholder="Your phone number"
            className="w-[457px] h-[50px] border rounded-[100px] mt-2 px-4"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="font-medium text-base text-black "
          >
            Email address
          </label>
          <input
            type="text"
            placeholder="Your email address"
            className="w-[457px] h-[50px] border rounded-[100px] mt-2 px-4"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-medium text-base text-black">
            Message
          </label>
          <textarea
            type=""
            placeholder="How can we help ?"
            className="w-[457px] h-[120px] border rounded-[20px] mt-2 px-2 pt-2"
          />
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="w-[457px] h-[47px] border rounded-3xl mt-[35px] bg-gradient-to-r from-[#DD727D] to-[#834047] text-white font-semibold text-lg"
        >
          <span className="flex items-center justify-center">
            Send Inquiry <MdArrowOutward className="ml-2 w-5 h-5" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
