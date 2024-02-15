/* eslint-disable react/prop-types */
import License from "../License/License";
import Category from "../Category/Category";
import { FaArrowLeft } from "react-icons/fa";
import classNames from "classnames";
import React from "react";
// border-[#979898]
const PhotosLibrarySidebar = ({ librayFilterOpen }) => {
	return (
		<div
			className={classNames(
				"col-left p-5 fixed top-[74px] right-0 bottom-0 left-0  bg-white z-50 w-full ",
				{
					"active-sidebar-open": librayFilterOpen === true,
					"inactive-sidebar-open": librayFilterOpen !== true,
				}
			)}
		>
			
			
			<License />
			<Category photosLibrarySidebar={true} />
		</div>
	);
};

export default PhotosLibrarySidebar;
