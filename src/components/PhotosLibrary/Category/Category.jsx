/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import CategoryTabs from "./CategoryTabs";

const Category = ({ photosLibrarySidebar, setPage }) => {
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
				{isCategoryOpen && (
					<CategoryTabs
						setPage={setPage}
						photosLibrarySidebar={photosLibrarySidebar}
					/>
				)}
			</div>
		</div>
	);
};

export default Category;
