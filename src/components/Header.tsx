import React from "react";

function Header() {
  return (
    <div className="absolute w-[304px] h-[70px] top-[12px] left-1/2 transform -translate-x-1/2">
      <div className="flex space-x-2 items-center">
        {/* GPT-3.5 Active */}
        <div className="flex items-center justify-center w-[174px] h-[70px]  bg-white rounded-lg shadow-md">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-purple-200 rounded-full flex items-center justify-center">
              {/* Active Icon */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                  fill="#9F7AEA"
                />
              </svg>
            </span>
            <span className="font-[Plus Jakarta Sans] text-[18px] font-bold leading-[18px] text-[#120F43]">
              {" "}
              GPT-3.5
            </span>
          </div>
        </div>

        {/* GPT-4 Disabled */}
        <div className="flex items-center justify-center w-[174px] h-[70px] rounded-lg opacity-50 bg-gray-100">
          <div className="flex items-center space-x-2">
            <span className=" flex w-[39px] h-[39px] left-[819px] top-[27.5px]  rounded-full">
              {/* Disabled Icon */}
              <img
                src="https://oss-us-cdn.maiziqianbao.net/Chain_logo/3J1691463191.jpg"
                alt="User"
                className="h-10 w-10 rounded-full"
              />
            </span>
            <span className=" font-[Plus Jakarta Sans] font-bold text-[18px] leading-[18px] text-[#120F43]">
              GPT-4
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: No Plugins */}
      <div className="absolute w-[166px] h-[26px] top-[105px] left-[calc(50%-72.325px)] text-center">
        <p className="font-['Plus Jakarta Sans'] font-medium text-[14px] leading-[26px] text-[#718096] text-center">
          No plugins enabled ▼
        </p>
      </div>
    </div>
  );
}

export default Header;
