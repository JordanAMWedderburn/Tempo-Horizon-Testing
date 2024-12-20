import React from "react";

function APIKeyNotWorkingLayout() {
  return (
    <div>
      {/* Main Section */}
      <div className="absolute   w-full  p-4 sm:p-6 bg-[#F5F6FA] flex flex-col justify-between">
        <div className="w-full flex justify-center my-6">
          <div className="relative w-[494px] h-[640px] bg-white shadow-[14px_27px_45px_4px_rgba(112,144,176,0.2)] rounded-[14px] p-6">
            {/* Title */}
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] leading-[100%] text-[#1B2559]">
                Enter your OpenAI API Key
              </p>
            </div>

            {/* Body Text */}
            <div className="mt-4 text-center">
              <p className="font-['Plus_Jakarta_Sans']-500 font-medium text-[16px] leading-[28px] text-center text-[#718096]">
                You need an OpenAI API Key to use Horizon Chat UI. Your API Key
                is stored locally on your browser and never sent anywhere else.
              </p>
            </div>

            {/* Input and Save Button */}
            <div className="mt-6 flex justify-center items-center space-x-4">
              <input
                type="text"
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="w-[283px] h-[54px] bg-white border border-[#E2E8F0] rounded-[45px] px-4 focus:outline-none"
              />
              <button className="w-[121px] h-[54px] bg-gradient-to-b from-[#7BCBD4] to-[#29C6B7] shadow-[0px_21px_27px_-10px_rgba(67,200,192,0.47)] rounded-[45px] text-white font-medium">
                Save
              </button>
            </div>

            {/* Dashboard Link */}
            <div className="mt-6 text-center">
              <p className="font-['Plus_Jakarta_Sans']-600 font-semibold text-[14px] text-[#603CFF] underline">
                Get your API key from Open AI Dashboard
              </p>
            </div>

            {/* API Key Error */}
            <div className="mt-4 flex justify-center items-center space-x-2">
              <p className="font-['Plus_Jakarta_Sans']  text-[16px] font-bold leading-[28px] text-[#718096]">
                Your API Key is not working?
              </p>
              <span className="w-3 h-3 border-t-2 border-l-2 border-[#1B2559] transform rotate-45"></span>
            </div>

            {/* Instructions */}
            <div className="mt-6  w-[405px] h-[168px] left-[39px] ">
              <ul className="space-y-4 font-['Plus_Jakarta_Sans']-500 font-medium text-[16px] text-[#718096]">
                <li>
                  <span className="text-[#1B2559]-500 font-bold">•</span> Make
                  sure you have an <span className="underline "> OpenAI </span>{" "}
                  account and a valid API key to use ChatGPT. We don't sell API
                  keys.
                </li>
                <li>
                  <span className="text-[#1B2559] font-bold">•</span> Make sure
                  you have your billing info added in the
                  <span className="underline "> OpenAI Billing</span>
                  page. Without billing info, your API key will not work.
                </li>
              </ul>
            </div>

            {/* Connection Info */}
            <div className="mt-6 text-center w-[352px] h-[56px] left-[39px]">
              <p
                className="font-['Plus Jakarta Sans'] font-medium text-[14px] leading-[28px] 
  text-center text-[#718096]"
              >
                *The app will connect to OpenAI API server to check if your API
                Key is working properly.
              </p>
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
}

export default APIKeyNotWorkingLayout;
