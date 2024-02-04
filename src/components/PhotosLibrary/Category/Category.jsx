import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import CategoryTabs from "./CategoryTabs";

const Category = () => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(true);
	return (
		<div className="category-wrapper mt-16">
			<div className="category">
				<div
					onClick={() => setIsCategoryOpen(!isCategoryOpen)}
					className="category-toggle flex flex-row items-center justify-between cursor-pointer"
				>
					<div className="title">Category</div>
					<MdArrowDropDown />
				</div>
				{isCategoryOpen && <CategoryTabs photosLibrarySidebar={true} />}
			</div>
		</div>
	);
};

export default Category;
