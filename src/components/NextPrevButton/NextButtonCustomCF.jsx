import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const NextButtonCustomCF = ({ nextRef, disabled }) => {
  
  return (
    <div
      onClick={() => {
        // nextRef
        if (!disabled && nextRef?.current) {
          nextRef.current.click()
        }
        
      }}
      className={`next-btn absolute top-[50%] right-[-8px] translate-y-[-50%] w-12 h-12 z-50 rotate-45 flex justify-center items-center ${disabled ? 'bg-[#D4D4D466] cursor-not-allowed' : 'bg-primaryColor cursor-pointer'} rounded-full`}
    >
      <FaArrowRight color="white" className="rotate-minus-45" />
    </div>
  );
};

export default NextButtonCustomCF;