import React from "react";
import {
  ExitIcon,
  HomeIcon,
  LockClosedIcon,
  StarIcon,
  BellIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

const HorizonAI_User1_FullPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F6FA]">
      {/* Sidebar */}

      <div className="relative w-[310px] h-[1096px] left-[20px] top-[30px] bg-white shadow-[0px_17px_40px_4px_rgba(112,144,176,0.11)] rounded-[20px]">
        {/* Logo Section */}
        <div className="relative w-[310px] h-[118px]">
          {/* Logo */}
          <div className="flex items-center justify-center w-full h-full font-poppins text-[26px] font-bold leading-[26px] text-[#1B2559] whitespace-nowrap">
            HORIZON <span className="font-normal">AI FREE</span>
          </div>

          {/* Separator */}
          <hr className="absolute w-[310px] left-0 bottom-0 border border-[#E9EDF7]" />
        </div>

        {/* Pages Links */}
        <div className="absolute w-[249px] h-[504px] left-[35px] top-[159px]">
          <div className="w-[94px] h-[30px] left-[35px] top-[159px] flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3 7.55C19.2167 7.55 19.1458 7.53333 19.0875 7.5C19.0292 7.46667 18.9833 7.40833 18.95 7.325L18.225 5.625L16.4 4.825C16.3167 4.79167 16.2583 4.74583 16.225 4.6875C16.1917 4.62917 16.175 4.55833 16.175 4.475C16.175 4.39167 16.1917 4.32083 16.225 4.2625C16.2583 4.20417 16.3167 4.15833 16.4 4.125L18.225 3.35L18.95 1.725C18.9833 1.64167 19.0292 1.58333 19.0875 1.55C19.1458 1.51667 19.2167 1.5 19.3 1.5C19.3833 1.5 19.4542 1.51667 19.5125 1.55C19.5708 1.58333 19.6167 1.64167 19.65 1.725L20.375 3.35L22.2 4.125C22.2833 4.15833 22.3417 4.20417 22.375 4.2625C22.4083 4.32083 22.425 4.39167 22.425 4.475C22.425 4.55833 22.4083 4.62917 22.375 4.6875C22.3417 4.74583 22.2833 4.79167 22.2 4.825L20.375 5.625L19.65 7.325C19.6167 7.40833 19.5708 7.46667 19.5125 7.5C19.4542 7.53333 19.3833 7.55 19.3 7.55ZM19.3 22.45C19.2333 22.45 19.1667 22.4333 19.1 22.4C19.0333 22.3667 18.9833 22.3083 18.95 22.225L18.225 20.6L16.425 19.825C16.3417 19.7917 16.2833 19.7458 16.25 19.6875C16.2167 19.6292 16.2 19.5583 16.2 19.475C16.2 19.3917 16.2167 19.3208 16.25 19.2625C16.2833 19.2042 16.3417 19.1583 16.425 19.125L18.225 18.35L18.95 16.625C18.9833 16.5417 19.0292 16.4833 19.0875 16.45C19.1458 16.4167 19.2167 16.4 19.3 16.4C19.3833 16.4 19.4542 16.4167 19.5125 16.45C19.5708 16.4833 19.6167 16.5417 19.65 16.625L20.375 18.35L22.175 19.125C22.2583 19.1583 22.3167 19.2042 22.35 19.2625C22.3833 19.3208 22.4 19.3917 22.4 19.475C22.4 19.5583 22.3833 19.6292 22.35 19.6875C22.3167 19.7458 22.2583 19.7917 22.175 19.825L20.375 20.6L19.65 22.225C19.6167 22.3083 19.5667 22.3667 19.5 22.4C19.4333 22.4333 19.3667 22.45 19.3 22.45ZM8.32501 18.125C8.19167 18.125 8.06251 18.0875 7.93751 18.0125C7.81251 17.9375 7.71667 17.8333 7.65001 17.7L6.02501 14.225L2.52501 12.65C2.39167 12.5833 2.28751 12.4875 2.21251 12.3625C2.13751 12.2375 2.10001 12.1083 2.10001 11.975C2.10001 11.8417 2.13751 11.7125 2.21251 11.5875C2.28751 11.4625 2.39167 11.3667 2.52501 11.3L6.02501 9.725L7.65001 6.275C7.71667 6.125 7.81251 6.0125 7.93751 5.9375C8.06251 5.8625 8.19167 5.825 8.32501 5.825C8.45834 5.825 8.58751 5.8625 8.71251 5.9375C8.83751 6.0125 8.93334 6.11667 9.00001 6.25L10.65 9.725L14.125 11.3C14.275 11.3667 14.3875 11.4625 14.4625 11.5875C14.5375 11.7125 14.575 11.8417 14.575 11.975C14.575 12.1083 14.5375 12.2375 14.4625 12.3625C14.3875 12.4875 14.275 12.5833 14.125 12.65L10.65 14.225L9.00001 17.7C8.93334 17.85 8.83751 17.9583 8.71251 18.025C8.58751 18.0917 8.45834 18.125 8.32501 18.125Z"
                fill="#4318FF"
              />
            </svg>

            <p className="font-[Plus Jakarta Sans] font-bold text-[16px] leading-[30px] text-[#1B2559]">
              Chat UI
            </p>
          </div>

          <ul className="space-y-3 ">
            <li className=" py-[2px] flex items-center justify-between w-full text-gray-800 hover:text-indigo-600">
              {/* Icon */}
              <div className="flex items-center space-x-3 opacity-40">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64996 17.2571C9.26321 17.568 8.71531 17.568 8.32856 17.2571L1.72158 11.9489C1.33483 11.638 0.797672 11.638 0.410922 11.9489C-0.136974 12.3931 -0.136974 13.2482 0.410922 13.6924L7.67323 19.5336C8.44673 20.1555 9.53178 20.1555 10.316 19.5336L17.5783 13.6924C18.1262 13.2482 18.1262 12.3931 17.5783 11.9489L17.5676 11.9378C17.1808 11.6269 16.6437 11.6269 16.2569 11.9378L9.64996 17.2571ZM10.3268 13.9034L17.5891 8.06219C18.137 7.61799 18.137 6.7518 17.5891 6.30761L10.3268 0.466408C9.55327 -0.155469 8.46822 -0.155469 7.68398 0.466408L0.421665 6.31871C-0.126231 6.76291 -0.126231 7.62909 0.421665 8.07329L7.68398 13.9145C8.45748 14.5364 9.55327 14.5364 10.3268 13.9034Z"
                    fill="#718096"
                  />
                </svg>

                {/* My Projects */}
                <span className="] font-[Plus Jakarta Sans] font-medium text-[16px] leading-[30px] text-[#718096] ">
                  My Projects
                </span>
              </div>

              {/* PRO Badge */}
              <div className="flex justify-center items-center px-[10px] py-[2px] bg-[#F2EFFF] rounded-[39px] text-[#4318FF] text-[12px] font-semibold">
                PRO
              </div>
            </li>

            <li className=" py-[2px] flex items-center justify-between w-full text-gray-800 hover:text-indigo-600">
              <div className="flex items-center space-x-3 opacity-40">
                <HomeIcon className="h-5 w-5" />
                <span className="] font-[Plus Jakarta Sans] font-medium text-[16px] leading-[30px] text-[#718096]">
                  Templates
                </span>
              </div>
              <div className="flex justify-center items-center px-[10px] py-[2px] bg-[#F2EFFF] rounded-[39px] text-[#4318FF] text-[12px] font-semibold ">
                {" "}
                PRO
              </div>
            </li>
            {/* Other Pages */}
            <li className="py-[2px] flex items-center justify-between w-full text-gray-800">
              <div className="flex items-center space-x-3 opacity-40">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4181 15.2341H4.37314C3.94076 15.2341 3.56715 15.0774 3.25229 14.7642C2.93741 14.4509 2.77997 14.0792 2.77997 13.649V1.57389C2.77997 1.1437 2.93741 0.77384 3.25229 0.464304C3.56715 0.154768 3.94076 0 4.37314 0H10.5408C10.7532 0 10.9585 0.0424702 11.1568 0.127411C11.355 0.212364 11.53 0.326536 11.6816 0.469926L15.5277 4.29657C15.6718 4.44746 15.7866 4.62152 15.8719 4.81875C15.9573 5.01599 16 5.22029 16 5.43162V13.649C16 14.0792 15.8426 14.4509 15.5277 14.7642C15.2128 15.0774 14.843 15.2341 14.4181 15.2341ZM14.4181 5.17074L10.7231 1.57389V3.98473C10.7231 4.31874 10.8379 4.59992 11.0673 4.82825C11.2969 5.05658 11.5795 5.17074 11.9152 5.17074H14.4181ZM1.58186 18C1.14951 18 0.777772 17.8452 0.466663 17.5357C0.155554 17.2262 0 16.8563 0 16.4261V5.01615C0 4.79156 0.0753877 4.60425 0.226163 4.45424C0.376952 4.30423 0.565208 4.22922 0.790931 4.22922C1.01667 4.22922 1.20492 4.30423 1.3557 4.45424C1.50648 4.60425 1.58186 4.79156 1.58186 5.01615V16.4261H10.8142C11.04 16.4261 11.2282 16.5011 11.379 16.6512C11.5298 16.8012 11.6052 16.9885 11.6052 17.2131C11.6052 17.4377 11.5298 17.625 11.379 17.7749C11.2282 17.925 11.04 18 10.8142 18H1.58186Z"
                    fill="#718096"
                  />
                </svg>

                <span className="font-[Plus Jakarta Sans] font-medium text-[16px] leading-[30px] text-[#718096]">
                  Other Pages
                </span>
              </div>
              <div className="flex justify-center items-center px-[10px] py-[2px] bg-[#F2EFFF] rounded-[39px] text-[#4318FF] text-[12px] font-semibold">
                {" "}
                PRO
              </div>
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              Prompt Page
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              Register
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              Sign In
            </li>

            {/* Admins Pages */}
            <li className="py-[2px] flex items-center justify-between w-full text-gray-800">
              <div className="flex items-center space-x-3 opacity-40">
                <LockClosedIcon />

                <span className="font-[Plus Jakarta Sans] font-medium text-[16px] leading-[30px] text-[#718096]">
                  Admin Pages
                </span>
              </div>
              <div className="flex justify-center items-center px-[10px] py-[2px] bg-[#F2EFFF] rounded-[39px] text-[#4318FF] text-[12px] font-semibold">
                {" "}
                PRO
              </div>
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              All Templates
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              New Template
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              Edit Template
            </li>
            <li className="pl-8 flex items-center font-[Plus Jakarta Sans] font-medium text-[14px] leading-[14px] text-[#718096] whitespace-nowrap opacity-40">
              Users Overview
            </li>
          </ul>
        </div>

        {/* Credits Section */}
        <div className="relative w-[256px] h-[246px] left-[27px] top-[500px] bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] rounded-[16px] flex flex-col items-center">
          {/* Centered SVG */}
          <div className="absolute top-[-50px]">
            <svg
              width="150"
              height="149"
              viewBox="0 0 150 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_592)">
                <circle
                  cx="74.8253"
                  cy="59.1747"
                  r="40.1747"
                  fill="url(#paint0_linear_1_592)"
                />
                <circle
                  cx="74.8253"
                  cy="59.1747"
                  r="38.0378"
                  stroke="white"
                  strokeWidth="4.27391"
                />
              </g>
              <path
                d="M65.5014 66.2721H83.217V73.9746H65.5014V66.2721Z"
                fill="white"
              />
              <path
                d="M83.8332 67.8896C83.8332 65.3566 82.835 62.9272 81.0583 61.1361C79.2816 59.3449 76.8718 58.3386 74.3592 58.3386C71.8465 58.3386 69.4368 59.3449 67.6601 61.1361C65.8833 62.9272 64.8852 65.3566 64.8852 67.8896L74.3592 67.8896H83.8332Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.3977 70.2774C79.8215 70.2774 84.2183 65.8806 84.2183 60.4568C84.2183 55.033 79.8215 50.6362 74.3977 50.6362C68.9739 50.6362 64.5771 55.033 64.5771 60.4568C64.5771 65.8806 68.9739 70.2774 74.3977 70.2774ZM74.3977 77.9798C84.0754 77.9798 91.9207 70.1345 91.9207 60.4568C91.9207 50.7791 84.0754 42.9338 74.3977 42.9338C64.72 42.9338 56.8747 50.7791 56.8747 60.4568C56.8747 70.1345 64.72 77.9798 74.3977 77.9798Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_1_592"
                  x="0.459248"
                  y="0.194808"
                  width="148.732"
                  height="148.732"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="15.3861" />
                  <feGaussianBlur stdDeviation="17.0956" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_592"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_592"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_592"
                  x1="82.6239"
                  y1="85.6428"
                  x2="99.7113"
                  y2="23.873"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A25E1" />
                  <stop offset="0.927091" stopColor="#7B5AFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Title */}
          <div className="w-[196px] h-[18px] mt-[50px] font-[Plus Jakarta Sans] font-bold text-[18px] leading-[18px] text-center text-white">
            Go unlimited with PRO
          </div>

          {/* Body */}
          <div className="w-[208px] h-[72px] mt-[10px] font-[Plus Jakarta Sans] font-medium text-[14px] leading-[24px] text-center text-white">
            Get your AI Project to another level and start doing more with
            Horizon AI Template PRO!
          </div>

          {/* Button */}
          <button className="flex flex-row justify-center items-center p-0 w-[192px] h-[37px] mt-[15px] bg-[rgba(255,255,255,0.14)] rounded-[45px]">
            <span className="w-[169px] h-[20px] font-[Plus Jakarta Sans] font-semibold text-[14px] leading-[16px] text-center text-white">
              Get started with PRO
            </span>
          </button>
        </div>

        {/* Bottom Elements */}
        <div className="absolute w-[256px] h-[62px] left-[27px] top-[1008px] bg-white shadow-[14px_17px_40px_4px_rgba(112,144,176,0.08)] rounded-[30px] flex items-center px-4">
          {/* User Avatar */}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
            alt="User"
            className="h-10 w-10 rounded-full"
          />

          {/* User Name */}
          <div className="ml-3 flex-grow">
            <div className="text-sm font-medium text-gray-800">
              Adela Parkson
            </div>
          </div>

          {/* Logout Button */}
          <button className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 hover:bg-gray-100">
            <ExitIcon />
          </button>
        </div>
      </div>

      <div className="relative w-full bg-[#F5F6FA]">
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
            <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full  hover:bg-gray-200">
              <BellIcon className="w-5 h-5 text-[#1B2559]" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-200">
              <MoonIcon className="w-5 h-5 text-[#1B2559]" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full  hover:bg-gray-200">
              <InfoCircledIcon className="w-5 h-5 text-[#1B2559]" />
            </button>

            {/* User Avatar */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 overflow-hidden ">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className=" absolute left-[350px] h-[986px] top-[140px] left-0 lg:left-[350px] w-full lg:w-[calc(100%-330px)] p-4 sm:p-6 bg-[#F5F6FA] flex flex-col justify-between">
        {/* Header Section */}
        <div className="w-full max-w-[304px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
            {/* GPT-3.5 Active */}
            <div className="flex items-center justify-center w-[174px] h-[70px] bg-white rounded-lg shadow-md">
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
                <span className="font-[Plus Jakarta Sans] text-[16px] sm:text-[18px] font-bold text-[#120F43]">
                  GPT-3.5
                </span>
              </div>
            </div>

            {/* GPT-4 Disabled */}
            <div className="flex items-center justify-center w-[174px] h-[70px] rounded-lg opacity-50 bg-gray-100">
              <div className="flex items-center space-x-2">
                <span className="flex w-[39px] h-[39px] rounded-full overflow-hidden">
                  <img
                    src="https://oss-us-cdn.maiziqianbao.net/Chain_logo/3J1691463191.jpg"
                    alt="Disabled"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="font-[Plus Jakarta Sans] text-[16px] sm:text-[18px] font-bold text-[#120F43]">
                  GPT-4
                </span>
              </div>
            </div>
          </div>

          {/* No Plugins Enabled */}
          <div className="mt-4 text-center">
            <p className="text-[14px] sm:text-[14px] text-[#718096]">
              No plugins enabled ▼
            </p>
          </div>
        </div>
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

        {/* Footer */}
        <div className="absolute bottom-4 left-0 w-full flex justify-between items-center px-8 text-sm text-[#718096]">
          <p>© 2023 Horizon UI AI Template. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="#" className="hover:underline">
              Homepage
            </a>
            <a href="#" className="hover:underline">
              License
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonAI_User1_FullPage;
