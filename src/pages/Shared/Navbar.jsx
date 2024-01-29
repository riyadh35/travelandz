import logo from "../../assets/logo.jpg";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-5">
        {/* logo */}
        <div className="w-[30%]">
          <img
            src={logo}
            alt="travelandz logo "
            className="w-[172.98px] h-[35px] "
          />
        </div>
        <div className="flex justify-between items-center w-[60%]">
          {/* menu bar */}
          <div>
            <ul className="flex items-cneter font-[16px] ">
              <li className="mr-3">
                <a href="" className="capitalize text">
                  About Travelandz
                </a>
              </li>
              <li className="mr-3">
                <a href="" className="capitalize text">
                  About Travelandz
                </a>
              </li>
              <li className="mr-3">
                <a href="" className="capitalize text">
                  About Travelandz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="border-solid border-2 border-[#EAEAEA] p-2 rounded-full">
              <CiUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
