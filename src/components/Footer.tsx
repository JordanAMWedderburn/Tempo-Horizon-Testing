import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-4 left-0 w-full flex justify-between items-center bg-white px-8 text-sm text-[#718096]">
      {/* Left Text */}
      <div>© 2023 Horizon UI AI Template. All Rights Reserved.</div>

      {/* Right Links */}
      <div className="flex space-x-6">
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
  );
};

export default Footer;
