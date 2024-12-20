import React from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Menu() {
  return (
    <div>
      {/* Menu Bar */}
      <div className="fixed top-4 left-0 lg:left-[383px] w-full lg:w-[calc(100%-370px)] h-[61px] bg-[#F5F6FA] flex items-center justify-between px-4 lg:px-6  rounded-[20px] ">
        {/* Breadcrumbs/Logo */}
        <div className="flex items-center">
          <span className="font-bold text-[24px] sm:text-[34px] leading-[100%] text-[#1B2559]">
            Chat UI
          </span>
        </div>

        {/* Misc Items */}
        <div className="flex items-center w-[422px] h-[61px] left-[1478px] top-[57px] space-x-4 bg-white  rounded-[32px]">
          {/* Search Bar */}
          <div className="relative w-[214px] h-[41px] bg-[#F5F6FA] rounded-full">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full pl-10 pr-4 bg-[#F5F6FA] text-[#718096]-500 rounded-full focus:outline-none"
            />
            <MagnifyingGlassIcon className="absolute left-[12px] top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          {/* Icons */}
          <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-200">
            <BellIcon className="w-5 h-5 text-[#1B2559]" />
          </button>
          <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-200">
            <MoonIcon className="w-5 h-5 text-[#1B2559]" />
          </button>
          <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-200">
            <InfoCircledIcon className="w-5 h-5 text-[#1B2559]" />
          </button>

          {/* User Avatar */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
