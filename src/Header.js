import React from "react";
import navLogo from "./images/amazon-logo.png";
import cartIcon from "./images/cart-icon.png";
import "./Header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import IndianFlagIcon from "./images/Indian-Flag-icon.png";

const Header = () => {
  return (
    <>
      <div id="navbar" className=" bg-blue  sticky top-0 ">
        <div className=" flex items-start pt-1 ml-2">
          <div id="search-left " className="text-white  p-1 flex items-center ">
            <div className="text-white flex items-center ">
              <img alt="amazon logo" className="w-[97px]  ml-2" src={navLogo} />
              <div className="mb-[14px]">.in</div>
            </div>
            <div className=" text-white p-2 flex justify-center content-center leading-4 ">
              <LocationOnIcon className="mt-1" />
              <div className="flex flex-col ">
                <span className="text-[12px]">Hello</span>
                <span className="font-bold text-[14px]">
                  Select your address
                </span>
              </div>
            </div>
          </div>
          <div id="search-box" className=" text-white p-1 ">
            <div className="flex bg-[#f3f3f3]  justify-center content-center rounded-l-lg rounded-r-lg">
              <select className="rounded-l-lg w-[50px] text-[#555555] border-2 text-[12px] p-1 ">
                <option value="">All</option>
                <option value="">All Categories</option>
                <option value="">Alexa Skills</option>
                <option value="">Amazon Devices</option>
              </select>

              <input
                className=" w-[458px] p-2"
                type="text"
                placeholder="Search Amazon.in"
              ></input>
              <div className="bg-[#febd69] rounded-r-lg w-[44px] h-[40px] p-[6px] pl-2">
                <SearchIcon className=" text-[#333333]  rounded-r-lg search-icon " />
              </div>
            </div>
          </div>
          <div id="search-right" className="flex justify-evenly gap-6 ml-5">
            <div className="flex items-center">
              <img
                src={IndianFlagIcon}
                className="h-[16px] w-[18px]"
                alt="location-flag-icon"
              />
              <span className="text-white">EN</span>
            </div>
            <div className=" text-white p-2 flex flex-col justify-center content-center leading-4">
              <span className="text-[12px] ">Hello , sign in</span>
              <span className="font-bold text-[14px]">Account & Lists</span>
            </div>
            <div className=" text-white p-2 flex flex-col justify-center content-center leading-4">
              <span className="text-[12px]">Returns</span>
              <span className="font-bold text-[14px]">& Orders</span>
            </div>
            <div className=" text-white flex  justify-center content-center gap-0">
              <img src={cartIcon} alt="cart" className="h-[42px] mt-1" />
              <div className="mt-5">Cart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
