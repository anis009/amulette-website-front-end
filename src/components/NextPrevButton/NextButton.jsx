import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const NextButton = ({ onClick, nextRef, positionClasses = 'md:top-[50%] right-2 md:right-[-15px]', ...rest }) => {
  return (
    <div
      ref={nextRef}
      onClick={() => onClick()}
      className={`next-btn absolute ${positionClasses} translate-y-[-50%] w-6 md:w-12 h-6 md:h-12 z-50 rotate-45 bg-primaryColor justify-center items-center cursor-pointer hidden rounded-full`}
    >
      <FaArrowRight color="white" className="rotate-minus-45" />
    </div>
  );
};

export default NextButton;