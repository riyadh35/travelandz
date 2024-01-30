import React from "react";
import { FaPlus, FaPlusCircle, FaStar } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import img1 from "../../assets/rectangle-big.png";
import img2 from "../../assets/rectangle-2.png";
import img3 from "../../assets/rectangle-3.png";
import recomemendedimg from "../../assets/morning.png";
import { MdLocationOn } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

const FamousDestination = () => {
  return (
    <div className="w-[1284px] mx-auto px-10 bg-[#fbfbfb]">
      {/* top section */}
      <div>
        <div className="flex justify-between mb-20">
          <div>
            <h4 className="font-bold text-[30px] text-[#1B1B1E]">
              Hotel de Mar Gran Meliá
            </h4>
            <p className="flex items-center gap-2 mt-2 text-[#1B1B1E]">
              <FaStar />
              4.3 • (112 reviews) • Paseo de las Illetas, 7, Mallorca
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <TfiReload className="text-xl text-[#DD727D] mt-1 w-[20px] h-[20px]" />
            <p className=" bg-clip-text text-transparent bg-gradient-to-r from-[#DD727D] to-[#834047] underline decoration-2 underline-offset-4 decoration-[#DD727D]">
              Try Another Hotel
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between h-[470px] gap-10">
          <div className="w-[848px] h-[470px]">
            <img src={img1} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between relative">
        {/* overview section */}
        <div className="w-[848px]">
          <div className="relative">
            <h5 className="font-bold text-black text-2xl">Overview</h5>
            <p className="text-base font-normal text-[#3C3C43] mt-2 mb-2">
              Fuga omnis consequuntur quia cupiditate aut nulla. Blanditiis quam
              veritatis. Commodi quia eum quia asperiores aliquid id. Officia
              explicabo fugit sequi ipsa ut quo repellat. Quidem magni adipisci
              non voluptate modi modi et earum unde. Soluta consectetur eos eos
              ea vel mollitia consequatur qui ut.
            </p>
            <p className="text-base font-normal text-[#3C3C43] mt-2">
              Ut dolorem consequatur eligendi. Consectetur commodi ratione.
              Commodi fuga numquam aut deleniti hic. Commodi dolor excepturi et
              occaecati voluptas voluptatem. Minus dolorem exercitationem.
            </p>
            <p className="text-base font-normal text-[#3C3C43] mt-2">
              Fugiat quia omnis odit doloremque hic animi. Dolorem vel facilis
              quisquam illum modi beatae. Impedit sunt consectetur sed libero
              exercitationem exercitationem. Et et sunt. Et omnis in. Aut qui
              optio enim beatae excepturi ipsum facere non.
            </p>
          </div>
          <div className="divider w-[97%] mx-auto"></div>
          <div className="my-20">
            <h5 className="font-bold text-black text-2xl">Facilities</h5>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-10">
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> 24/7 Front desk
              </h6>
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> Valet parking
              </h6>
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> Swimming pool
              </h6>
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> Golf park
              </h6>
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> Airport pickup
              </h6>
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> Spa and Gym
              </h6>
              <h6 className="flex items-center gap-3 font-normal text-base text-[#3C3C43]">
                <GoCheckCircle className="text-xl" /> Free WiFi all rooms
              </h6>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[30px] text-[#1B1B1E] leading-[37.8px]">
              Personalized Recommendations For You
            </h4>
            <p className="font-normal text-base leading-[20.16px] text-black pt-3">
              I have added recommended experiences for you, please feel free to
              add or remove new ones.
            </p>
            {/* collapse section  */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-[#F1F1F1] mt-10 w-[95%]"
            >
              <div className="collapse-title text-black text-xl bg-[#F1F1F1]  font-medium">
                <div className="flex items-center gap-6">
                  <p className="font-bold text-lg text-[#1B1B1E]">Day 1</p>
                  <p className="font-normal text-base text-[#8E8E92]">
                    {new Date().getDate()}/{new Date().getMonth() + 1}/{" "}
                    {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="collapse-content bg-white">
                <div className=" mt-5">
                  <div className="flex items-center justify-between">
                    <ul className="flex flex-row p-3  gap-6">
                      <li className=" pt-[7px] pr-[16px] pb-[7px] pl-[16px] border border-[#EC6274] rounded-[100px] font-semibold text-base text-[#1B1B1E]">
                        <a href="">Morning</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Afternoon</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Dining</a>
                      </li>
                    </ul>
                    <p className="flex gap-2 items-center text-[#EC6274]">
                      <FaPlusCircle className="w-5 h-5" />
                      <span className="font-semibold text-lg">
                        Add activity
                      </span>
                    </p>
                  </div>
                  <div className="mt-5  border w-[387px] h-[294px] border-[#EAEAEA] rounded-[20px]">
                    <img
                      src={recomemendedimg}
                      alt=""
                      className="w-[387px] h-[140px] "
                    />
                    <div className="pl-3 ">
                      <h5 className="font-bold text-lg text-[#1B1B1E] mt-3">
                        Alcudia Bay 50-minutes tour from Alcudia
                      </h5>
                      <div className="flex items-center gap-6  mt-2">
                        <p className="flex items-center text-[#8E8E92]">
                          <MdLocationOn className="w-[11.83px] h-[13.67px] " />
                          <span className="font-normal text-base">
                            {" "}
                            Carrer de la Mareperla
                          </span>
                        </p>
                        <p className="flex items-center gap-3 text-base text-[#8E8E92]">
                          <FaUserGroup />{" "}
                          <span className="font-normal">2 pax</span>
                        </p>
                      </div>
                      <h5 className="font-bold text-[25px] text-[#000000]  mt-2">
                        USD 344{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-[#F1F1F1] mt-10 w-[95%]"
            >
              <div className="collapse-title text-black text-xl bg-[#F1F1F1]  font-medium">
                <div className="flex items-center gap-6">
                  <p className="font-bold text-lg text-[#1B1B1E]">Day 2</p>
                  <p className="font-normal text-base text-[#8E8E92]">
                    {new Date().getDate()}/{new Date().getMonth() + 1}/{" "}
                    {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="collapse-content bg-white">
                <div className=" mt-5">
                  <div className="flex items-center justify-between">
                    <ul className="flex flex-row p-3  gap-6">
                      <li className=" pt-[7px] pr-[16px] pb-[7px] pl-[16px] border border-[#EC6274] rounded-[100px] font-semibold text-base text-[#1B1B1E]">
                        <a href="">Morning</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Afternoon</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Dining</a>
                      </li>
                    </ul>
                    <p className="flex gap-2 items-center text-[#EC6274]">
                      <FaPlusCircle className="w-5 h-5" />
                      <span className="font-semibold text-lg">
                        Add activity
                      </span>
                    </p>
                  </div>
                  <div className="mt-5  border w-[387px] h-[294px] border-[#EAEAEA] rounded-[20px]">
                    <img
                      src={recomemendedimg}
                      alt=""
                      className="w-[387px] h-[140px] "
                    />
                    <div className="pl-3 ">
                      <h5 className="font-bold text-lg text-[#1B1B1E] mt-3">
                        Alcudia Bay 50-minutes tour from Alcudia
                      </h5>
                      <div className="flex items-center gap-6  mt-2">
                        <p className="flex items-center text-[#8E8E92]">
                          <MdLocationOn className="w-[11.83px] h-[13.67px] " />
                          <span className="font-normal text-base">
                            {" "}
                            Carrer de la Mareperla
                          </span>
                        </p>
                        <p className="flex items-center gap-3 text-base text-[#8E8E92]">
                          <FaUserGroup />{" "}
                          <span className="font-normal">2 pax</span>
                        </p>
                      </div>
                      <h5 className="font-bold text-[25px] text-[#000000]  mt-2">
                        USD 344{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-[#F1F1F1] mt-10 w-[95%]"
            >
              <div className="collapse-title text-black text-xl bg-[#F1F1F1]  font-medium">
                <div className="flex items-center gap-6">
                  <p className="font-bold text-lg text-[#1B1B1E]">Day 3</p>
                  <p className="font-normal text-base text-[#8E8E92]">
                    {new Date().getDate()}/{new Date().getMonth() + 1}/{" "}
                    {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="collapse-content bg-white">
                <div className=" mt-5">
                  <div className="flex items-center justify-between">
                    <ul className="flex flex-row p-3  gap-6">
                      <li className=" pt-[7px] pr-[16px] pb-[7px] pl-[16px] border border-[#EC6274] rounded-[100px] font-semibold text-base text-[#1B1B1E]">
                        <a href="">Morning</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Afternoon</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Dining</a>
                      </li>
                    </ul>
                    <p className="flex gap-2 items-center text-[#EC6274]">
                      <FaPlusCircle className="w-5 h-5" />
                      <span className="font-semibold text-lg">
                        Add activity
                      </span>
                    </p>
                  </div>
                  <div className="mt-5  border w-[387px] h-[294px] border-[#EAEAEA] rounded-[20px]">
                    <img
                      src={recomemendedimg}
                      alt=""
                      className="w-[387px] h-[140px] "
                    />
                    <div className="pl-3 ">
                      <h5 className="font-bold text-lg text-[#1B1B1E] mt-3">
                        Alcudia Bay 50-minutes tour from Alcudia
                      </h5>
                      <div className="flex items-center gap-6  mt-2">
                        <p className="flex items-center text-[#8E8E92]">
                          <MdLocationOn className="w-[11.83px] h-[13.67px] " />
                          <span className="font-normal text-base">
                            {" "}
                            Carrer de la Mareperla
                          </span>
                        </p>
                        <p className="flex items-center gap-3 text-base text-[#8E8E92]">
                          <FaUserGroup />{" "}
                          <span className="font-normal">2 pax</span>
                        </p>
                      </div>
                      <h5 className="font-bold text-[25px] text-[#000000]  mt-2">
                        USD 344{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-[#F1F1F1] mt-10 w-[95%]"
            >
              <div className="collapse-title text-black text-xl bg-[#F1F1F1]  font-medium">
                <div className="flex items-center gap-6">
                  <p className="font-bold text-lg text-[#1B1B1E]">Day 4</p>
                  <p className="font-normal text-base text-[#8E8E92]">
                    {new Date().getDate()}/{new Date().getMonth() + 1}/{" "}
                    {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="collapse-content bg-white">
                <div className=" mt-5">
                  <div className="flex items-center justify-between">
                    <ul className="flex flex-row p-3  gap-6">
                      <li className=" pt-[7px] pr-[16px] pb-[7px] pl-[16px] border border-[#EC6274] rounded-[100px] font-semibold text-base text-[#1B1B1E]">
                        <a href="">Morning</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Afternoon</a>
                      </li>
                      <li className="pt-[7px] pr-[16px] pb-[7px] pl-[16px] bg-[#F4F4F4] border rounded-[100px] text-[#4E4E4E] text-base font-normal">
                        <a href="">Dining</a>
                      </li>
                    </ul>
                    <p className="flex gap-2 items-center text-[#EC6274]">
                      <FaPlusCircle className="w-5 h-5" />
                      <span className="font-semibold text-lg">
                        Add activity
                      </span>
                    </p>
                  </div>
                  <div className="mt-5  border w-[387px] h-[294px] border-[#EAEAEA] rounded-[20px]">
                    <img
                      src={recomemendedimg}
                      alt=""
                      className="w-[387px] h-[140px] "
                    />
                    <div className="pl-3 ">
                      <h5 className="font-bold text-lg text-[#1B1B1E] mt-3">
                        Alcudia Bay 50-minutes tour from Alcudia
                      </h5>
                      <div className="flex items-center gap-6  mt-2">
                        <p className="flex items-center text-[#8E8E92]">
                          <MdLocationOn className="w-[11.83px] h-[13.67px] " />
                          <span className="font-normal text-base">
                            {" "}
                            Carrer de la Mareperla
                          </span>
                        </p>
                        <p className="flex items-center gap-3 text-base text-[#8E8E92]">
                          <FaUserGroup />{" "}
                          <span className="font-normal">2 pax</span>
                        </p>
                      </div>
                      <h5 className="font-bold text-[25px] text-[#000000]  mt-2">
                        USD 344{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sticky section  */}
        <div className="relative"></div>
        <div className="w-[412px] h-[620px] bg-white table-fixed right-72 bottom-0  rounded-[20px] p-8 ">
          <h6 className="font-bold text-base text-black mb-2">$25 per night</h6>
          <div className="border flex justify-between border-[#DFDFDF] rounded-[15px]">
            <div className="p-2">
              <h6 className="text-base font-medium text-black">Check-in</h6>
              <p className="text-[#3C3C43] text-lg font-normal">03 June 2023</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="p-2">
              <p className="text-base font-medium text-black">Check-out</p>
              <p className="text-[#3C3C43] text-lg font-normal">06 June 2023</p>
            </div>
          </div>
          <div className="border flex items-center justify-between border-[#DFDFDF] rounded-[15px] mt-4 p-2">
            <div>
              <p className="text-base font-medium text-black">Guests</p>
              <p className="text-lg font-normal text-[#3C3C43]">2 adults </p>
            </div>
            <p>
              <IoIosArrowDown className="w-6 h-6 text-black" />
            </p>
          </div>
          <div className="border flex items-center justify-between border-[#DFDFDF] rounded-[15px] mt-4 p-2">
            <div>
              <p className="text-base font-medium text-black">Room type</p>
              <p className="text-lg font-normal text-[#3C3C43]">Deluxe room</p>
            </div>
            <p>
              <FaPlus className="w-6 h-6 text-black" />
            </p>
          </div>
          <div className="mt-6 bg-[#F6F6F6] p-1 flex items-center justify-between rounded-[80px] gap-1">
            <p className="px-9 py-1 bg-white font-semibold text-base rounded-[80px] text-black">
              Hotel only
            </p>
            <p className="text-base font-medium text-[#8E8E92] pr-3">
              Hotel + Experience
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between px-2">
            <h3 className="font-bold text-[35px] text-[#1B1B1E]">$75</h3>
            <p className="font-normal text-base text-[#8E8E92]">
              Tax will calculate in checkout
            </p>
          </div>
          <button className="mt-8 rounded-[100px] w-[364px] h-[47px]  bg-gradient-to-r from-[#DD727D] to-[#834047] text-white text-lg font-semibold">
            Checkout Hotel
          </button>
          <p className="font-normal text-base text-[#1B1B1E] mt-9 text-center">
            Free Cancellation until 2023-06-03
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamousDestination;
