import React from "react";

function UserLayout() {
  return (
    <div className="relative w-full h-[1156px]  bg-[#F5F6FA]">
      {/* Main Section */}
      <div className="absolute  h-[986px] top-[140px]  left-0 lg:left-[350px] w-full lg:w-[calc(100%-330px)] p-4 sm:p-6 bg-[#F5F6FA] flex flex-col justify-between">
        {/* SVG Background */}
        <div className="w-full flex justify-center my-6">
          <svg
            width="304"
            height="453"
            viewBox="0 0 304 453"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M96.9677 285.612H15.5241C9.39882 285.612 4.86645 282.864 1.92703 277.369C-1.01239 271.875 -0.589048 266.503 3.19707 261.255L177.671 8.01901C180.256 4.53086 183.488 2.13847 187.366 0.841847C191.244 -0.454372 195.123 -0.253718 199.001 1.44381C202.879 2.98723 205.949 5.58027 208.212 9.22293C210.474 12.8656 211.282 16.755 210.636 20.8913L189.536 189.3H288.247C294.926 189.3 299.635 192.248 302.375 198.144C305.114 204.04 304.391 209.612 300.205 214.86L108.002 446.148C105.416 449.39 102.084 451.497 98.006 452.469C93.9278 453.441 90.1497 453.078 86.6717 451.381C83.0396 449.837 80.2308 447.321 78.2453 443.833C76.2603 440.345 75.514 436.455 76.0066 432.164L96.9677 285.612Z"
              fill="url(#paint0_linear_1_502)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_502"
                x1="152"
                y1="0"
                x2="152"
                y2="453"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FBFBFF" />
                <stop offset="1" stopColor="#CACAFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Input and Button Section */}
        <div className="w-full flex flex-col items-center justify-center py-6">
          <div className="flex flex-col sm:flex-row items-center w-[90%] max-w-[900px] space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Input */}
            <input
              type="text"
              placeholder="Send a message"
              className="flex-1 h-[50px] rounded-full border border-gray-200 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5AE0] w-full sm:w-auto"
            />

            {/* Submit Button */}
            <button className="w-full sm:w-[192px] h-[54px] bg-gradient-to-r from-[#6A5AE0] to-[#4318FF] rounded-full text-white text-sm font-semibold shadow-md hover:opacity-90 transition">
              Submit
            </button>
          </div>

          {/* Informational Note */}
          <div className="mt-2 text-xs text-gray-500 text-center">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.{" "}
            <span className="font-semibold underline cursor-pointer hover:text-gray-700">
              ChatGPT May 12 Version
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
