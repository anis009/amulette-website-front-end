import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const PrevButton = ({ onClick, prevRef, positionClasses='top-[50%] left-2 md:left-[-15px]', ...rest }) => {
  return (
    <div
      className={`prev-btn absolute ${positionClasses} translate-y-[-50%] w-6 md:w-12 h-6 md:h-12 z-50 rotate-45 bg-primaryColor justify-center items-center cursor-pointer hidden rounded-full`}
      ref={prevRef}
      onClick={() => onClick()}
    >
      <FaArrowLeft color="white" className="rotate-minus-45" />
    </div>
  );
};

export default PrevButton;
