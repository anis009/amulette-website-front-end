/* eslint-disable react/prop-types */
import License from "../License/License";
import Category from "../Category/Category";
import { HiMiniXCircle } from "react-icons/hi2";
import classNames from "classnames";

const PhotosLibrarySidebar = ({ sideBarHandler, sideBarOpen }) => {
	return (
		<div
			className={classNames(
				"col-left p-2 rounded-xl absolute  top-0 border bg-white z-50 w-full border-[#979898]",
				{
					"active-sidebar-open": sideBarOpen === true,
					"inactive-sidebar-open": sideBarOpen !== true,
				}
			)}
		>
			<div
				className="text-left flex justify-end z-[2000] cursor-pointer"
				onClick={sideBarHandler}
			>
				<HiMiniXCircle className="w-6 h-6 text-primaryColor" />
			</div>
			<License />
			<Category photosLibrarySidebar />
		</div>
	);
};

export default PhotosLibrarySidebar;
