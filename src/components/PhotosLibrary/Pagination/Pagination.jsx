import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const Pagination = () => {
    return (
        <div className='pagination-wrapper flex flex-row items-center justify-center mt-12'>
        <div className='pagination flex flex-row items-center justify-between border border-[#979898] rounded-[51px] px-3 py-2 space-x-16'>
<div className='prev-wrapper border border-[#525252] rounded-full p-2 cursor-pointer'>
<GrCaretPrevious color="#525252"  />

</div>
<div className='numbers'>
<ul className="flex flex-row items-center justify-center space-x-3.5">
    <li className="h-6 w-6 flex flex-row items-center justify-center bg-primaryColor text-white rounded-md cursor-pointer">1</li>
    <li className="cursor-pointer">2</li>
    <li className="cursor-pointer">3</li>
    <li className="cursor-pointer">4</li>
    <li className="cursor-pointer">5</li>
</ul>
</div>
<div className='next-wrapper border border-primaryColor bg-primaryColor rounded-full p-2 cursor-pointer'>
<GrCaretNext color="white"/>
</div>
            </div>
            
        </div>
    );
};

export default Pagination;