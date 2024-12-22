import React from "react";

const AlertSucess = () => {
  return (
    <div className="fixed top-16 left-0 w-full flex justify-center items-center z-50">
      <div className="absolute flex flex-col justify-center items-center p-2 gap-0.5   w-[443px] h-[63px] left-[calc(50%-221.5px)] top-[-63px]   bg-[#C9FBD5] rounded-[14px]">
        <p className="font-['Plus_Jakarta_Sans']-500 text-[16px] font-medium leading-[16px] text-center text-[#01B574]">
          Success! You can start using Horizon Chat UI now!
        </p>
      </div>
    </div>
  );
};

export default AlertSucess;
