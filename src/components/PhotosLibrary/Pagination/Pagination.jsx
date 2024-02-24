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

	return (
		<div className="flex flex-row items-center justify-center mt-12 pagination-wrapper">
			<div className="pagination flex flex-row items-center justify-between border border-[#979898] rounded-[51px] px-3 py-2 space-x-16">
				<div className="prev-wrapper border border-[#979898] rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
					<AiOutlineCaretLeft color="#525252" className="ml-[-2px] text-xs" />
				</div>
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
				<div className="next-wrapper border border-primaryColor bg-primaryColor rounded-full  w-[30px] h-[30px] flex justify-center items-center  cursor-pointer">
					<AiOutlineCaretRight color="white" className="mr-[-2px] text-xs" />
				</div>
			</div>
		</div>
	);
};

export default Pagination;
// background: #525252;
