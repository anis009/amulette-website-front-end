/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/features/photoLibrary";
import classNames from "classnames";
import React from "react";

const CategoryTabs = ({ photosLibrarySidebar }) => {
	const dispatch = useDispatch();
	//   const category = useSelector((state) => state.photo);
	// const category = useSelector((state) => state.photo);
	const { category } = useSelector((state) => state.photo);
	// console.log("category", category);
	return (
		<div
			className={classNames(
				" items-center justify-center mt-5 space-y-3 category-tabs ",
				{
					"grid grid-cols-2 gap-2": photosLibrarySidebar === true,
					"flex flex-col": photosLibrarySidebar === false,
				}
			)}
		>
			<div
				onClick={() => dispatch(setCategory("all"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "all"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer md:mb-3`}
			>
				<img src="Images/PhotosLibrary/Category/All-Photos.svg" />
				<span className="">All Photos</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("community"))}
				style={{ margin: 0 }}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "community"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Community.svg" />
				<span className="">Community</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("sports"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "sports"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Sports.svg" />
				<span className="">Sports</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("smilies"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "smilies"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Smilies.svg" />
				<span className="">Smilies</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("nature"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "nature"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Nature.svg" />
				<span className="">Nature</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("animals"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "animals"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Animals.svg" />
				<span className="">Animals</span>
			</div>
			<div
			onClick={() => dispatch(setCategory("abstract"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "abstract"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Abstract.svg" />
				<span className="">Abstract</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("technology"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "technology"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Technology.svg" />
				<span className="">Technology</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("art"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "art"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Art.svg" />
				<span className="">Art</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("space"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "space"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Space.svg" />
				<span className="">Space</span>
			</div>
			<div
				onClick={() => dispatch(setCategory("foods"))}
				className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
					category === "foods"
						? "bg-primaryColor text-white"
						: "bg-categoryTabColor text-[#444]"
				}  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
			>
				<img src="Images/PhotosLibrary/Category/Food.svg" />
				<span className="">Food</span>
			</div>
		</div>
	);
};

export default CategoryTabs;
