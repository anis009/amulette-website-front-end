import React from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Pagination = () => {
  return (
    <div className='pagination-wrapper flex flex-row items-center justify-center mt-12'>
      <div className='pagination flex flex-row items-center justify-between border border-[#979898] rounded-[51px] px-3 py-2 space-x-16'>
        <div className='prev-wrapper border border-[#979898] rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer'>
          <AiOutlineCaretLeft color="#525252" className="ml-[-2px] text-xs"/>

        </div>
        <div className='numbers'>
          <ul className="flex flex-row items-center justify-center space-x-3.5">
            <li className="h-6 w-6 flex flex-row items-center justify-center bg-primaryColor text-white rounded-md cursor-pointer">1</li>
            <li className="cursor-pointer text-[#525252]">2</li>
            <li className="cursor-pointer text-[#525252]">3</li>
            <li className="cursor-pointer text-[#525252]">4</li>
            <li className="cursor-pointer text-[#525252]">5</li>
          </ul>
        </div>
        <div className='next-wrapper border border-primaryColor bg-primaryColor rounded-full  w-[30px] h-[30px] flex justify-center items-center  cursor-pointer'>
          <AiOutlineCaretRight color="white" className="mr-[-2px] text-xs"/>
        </div>
      </div>

    </div>
  );
};

export default Pagination;
// background: #525252;
