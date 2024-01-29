import footerlogo from "../../assets/footer-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" h-[268px] bg-[#ECECED] flex flex-col items-center justify-center gap-5 mt-20">
      <div className="">
        <img src={footerlogo} alt="" className="w-[172.98px] h-[35px]" />
      </div>
      <div className="flex gap-4 items-center">
        <FaFacebookF className="w-[16px] h-[16.08px] text-[#5F5F60]" />
        <FaLinkedinIn className="w-[16px] h-[16.08px] text-[#5F5F60]" />
        <IoLogoTwitter className="w-[16px] h-[16.08px] text-[#5F5F60]" />
        <FaInstagram className="w-[16px] h-[16.08px] text-[#5F5F60]" />
      </div>
      <div>
        <p className="font-normal text-lg text-[#808080]">
          © {new Date().getFullYear()}, made with by Travelandz
        </p>
      </div>
    </div>
  );
};

export default Footer;
