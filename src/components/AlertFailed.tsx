import React from "react";

const AlertFailed = () => {
  return (
    <div className="fixed top-16 left-0 w-full flex justify-center items-center z-50">
      <div
        className="absolute flex flex-col justify-center items-center p-2 gap-1 w-[575px] h-[63px] left-1/2 transform -translate-x-1/2 top-[-63px] 
      bg-[#FDE0D0] rounded-[14px]"
      >
        <p className="font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[16px] text-center text-[#E31A1A]">
          Invalid API key. Please make sure your API key is still working
          properly.
        </p>
      </div>
    </div>
  );
};

export default AlertFailed;
