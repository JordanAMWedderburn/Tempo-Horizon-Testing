import React from "react";
import Footer from "../tempobook/storyboards/143c0ea2-f5ce-4b8a-b1df-6d3e7e4a5a3c/Footer";
import Header from "../tempobook/storyboards/143c0ea2-f5ce-4b8a-b1df-6d3e7e4a5a3c/Header";

const APIkeyLayout = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F6FA]">
      {/* Main Section */}
      <div className="absolute left-[350px] h-[986px] top-[140px]  left-0 lg:left-[350px] w-full lg:w-[calc(100%-330px)] p-4 sm:p-6 bg-[#F5F6FA] flex flex-col justify-between">
        {/* API kEY Card */}
        <div className="w-full flex justify-center my-6">
          <div className=" w-[494px] h-[480px] left-1/2 top-[213px] transform -translate-x-[calc(50%-247px)] bg-white shadow-[14px_27px_45px_4px_rgba(112,144,176,0.2)] rounded-[14px]">
            <div className="absolute w-[306px] h-[24px] left-1/2 top-[calc(50%-185px)] transform -translate-x-1/2 -translate-y-1/2 ">
              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] leading-[100%] text-[#1B2559]">
                Enter your OpenAI API Key
              </p>
            </div>
            <div className="absolute w-[398px] h-[84px] left-1/2 top-[calc(50%-115px)] transform -translate-x-1/2 -translate-y-1/2 ">
              <p className="font-['Plus_Jakarta_Sans'] font-medium text-[16px] leading-[28px] text-center text-[#718096]">
                You need an OpenAI API Key to use Horizon Chat UI. Your API Key
                is stored locally on your browser and never sent anywhere else.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center w-[90%] max-w-[900px] space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Input */}
              <input
                type="text"
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="absolute w-[283px] h-[54px] left-[40px] top-[189px] bg-white border border-[#E2E8F0] rounded-[45px] box-border"
              />
              <button
                className="absolute w-[121px] h-[54px] left-[333px] top-[189px] 
  flex justify-center items-center 
  bg-gradient-to-b from-[#7BCBD4] to-[#29C6B7] 
  shadow-[0px_21px_27px_-10px_rgba(67,200,192,0.47)] 
  rounded-[45px]"
              >
                Save
              </button>
            </div>
            <div
              className="absolute w-[280px] h-[28px] 
  left-1/2 top-[calc(50%+39px)] transform -translate-x-1/2 -translate-y-1/2 
  font-['Plus Jakarta Sans'] font-semibold text-[14px] leading-[28px] 
  text-center text-[#603CFF]"
            >
              <span>Get your API key from Open AI Dashboard</span>
            </div>
            <div
              className="absolute w-[232.31px] h-[28px] left-[130px] top-[309px] 
  font-['Plus Jakarta Sans'] font-medium text-[14px] leading-[28px] 
  text-[#718096] text-center flex items-center justify-center"
            >
              Your API Key is not working?
              <span className="w-3 h-3 ml-2 border-r-2 border-b-2 border-[#1B2559] rotate-45"></span>
            </div>
            <div
              className="absolute w-[352px] h-[56px] left-1/2 top-[calc(50%+141px)] 
  transform -translate-x-1/2 -translate-y-1/2 
  font-['Plus Jakarta Sans'] font-medium text-[14px] leading-[28px] 
  text-center text-[#718096]"
            >
              <span>
                *The app will connect to OpenAI API server to check if your API
                Key is working properly.
              </span>
            </div>
          </div>
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
            <button className="w-full sm:w-[192px] h-[54px] bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF]  rounded-full text-white font-semibold shadow-[0px_21px_27px_-10px_rgba(96,60,255,0.48)] opacity-20  transition">
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
};

export default APIkeyLayout;
