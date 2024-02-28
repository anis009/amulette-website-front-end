/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Pagination = ({ setPage, size, page }) => {
  const [pages, setPages] = useState();

  useEffect(() => {
    if (size !== 0) {
      const pages = Math.ceil(size / 16);
      setPages(pages);
    }
  }, [size]);
  const setPageHandler = (index) => {
    setPage(index);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevHandler = () => {
    if (page > 1) {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
      setPage(page - 1);
    }
  };

  const nextHandler = () => {
    if (page < pages) {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center mt-12 pagination-wrapper">
      <div className="pagination flex flex-row items-center justify-between border border-[#979898] rounded-[51px] px-3 py-2 space-x-16">
        <button
          onClick={prevHandler}
          disabled={pages === 1 || page === 1}
          className={classNames(
            "prev-wrapper border disabled:bg-white disabled:border-[#979898]  rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer",
            {
              "border-primaryColor bg-primaryColor text-white": pages !== 1,
              "border-[#979898]": pages === 1 || page === 1,
            }
          )}
        >
          <AiOutlineCaretLeft
            color={pages === 1 || page === 1 ? "#979898" : "#fff"}
            className="ml-[-2px] text-xs"
          />
        </button>
        <div className="numbers">
          <ul className="flex flex-row items-center justify-center space-x-3.5">
            {Array.from({ length: pages }, (_, index) => {
              return (
                <li
                  onClick={() => setPageHandler(index + 1)}
                  className={classNames({
                    "bg-primaryColor  flex flex-row rounded-md items-center justify-center w-6 h-6  text-white":
                      page === index + 1,
                    "text-[#525252] cursor-pointer ": page !== index + 1,
                  })}
                  key={index}
                >
                  {index + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={nextHandler}
          className={classNames(
            "next-wrapper border  rounded-full  w-[30px] h-[30px] disabled:bg-white disabled:border-[#979898] flex justify-center items-center  cursor-pointer",
            {
              "border-primaryColor bg-primaryColor": pages !== 1,
            },
            {
              "border-[#979898]": pages === 1,
            }
          )}
          disabled={pages === 1 || pages === page}
        >
          <AiOutlineCaretRight
            color={pages === 1 || pages === page ? "#525252" : "white"}
            className="mr-[-2px] text-xs"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
// background: #525252;
