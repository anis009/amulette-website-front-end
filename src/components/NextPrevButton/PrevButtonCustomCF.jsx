import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const PrevButtonCustomCF = ({ prevRef, disabled }) => {
  
  return (
    <div className={`prev-btn absolute top-[50%] left-[-8px] translate-y-[-50%] w-12 h-12 z-50 rotate-45 ${disabled ? 'bg-[#D4D4D466] cursor-not-allowed' : 'bg-primaryColor cursor-pointer'} flex justify-center items-center rounded-full`}
      onClick={() => {
        //prevRef
        if (!disabled && prevRef?.current) {
          prevRef.current.click()
        }
        // console.log('prevRef should be clicked: ', prevRef?.current)
      }}
    >
      <FaArrowLeft color="white" className="rotate-minus-45" />
    </div>
  );
};

export default PrevButtonCustomCF;
