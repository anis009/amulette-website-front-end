import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import CategoryTabs from "./CategoryTabs";
import React from "react";

const Category = ({ photosLibrarySidebar }) => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(true);

	return (
		<div className="category-wrapper mt-5">
			<div className="category">
				<div
					onClick={() => setIsCategoryOpen(!isCategoryOpen)}
					className="category-toggle flex flex-row items-center justify-between cursor-pointer"
				>
					<div className="title font-semibold">Category</div>
					<MdArrowDropDown />
				</div>
				{isCategoryOpen && <CategoryTabs photosLibrarySidebar={photosLibrarySidebar} />}
			</div>
		</div>
	);
};

export default Category;
