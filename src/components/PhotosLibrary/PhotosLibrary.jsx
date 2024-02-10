import License from "./License/License";
import PhotoCard from "./PhotoCard/PhotoCard";
import { IoSearchSharp } from "react-icons/io5";
import Category from "./Category/Category";
import Pagination from "./Pagination/Pagination";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useEffect, useState } from "react";
import PhotosLibrarySidebar from "./PhotosLibrarySidebar/PhotosLibrarySidebar";
import { photos } from "./PhotoData";
import { useSelector } from "react-redux";
import React from "react";

const PhotosLibrary = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [searchKeyword, setSearchKeyword] = useState("");
	const [filteredPhotos, setFilteredPhotos] = useState(photos);
    const { license,category } = useSelector((state) => state.photo);

	function searchPhotos(photos, searchTerm) {
		// Convert the search term to lower case for case-insensitive comparison
		const lowerCaseSearchTerm = searchTerm.toLowerCase();

		// Filter the photos based on the search term
		const filteredPhotos = photos.filter((photo) => {
			// Check if the search term is included in the title, description, or metaData
			// Convert each field to lower case to ensure case-insensitive comparison
			const titleMatch = photo.title
				.toLowerCase()
				.includes(lowerCaseSearchTerm);
			const descriptionMatch = photo.description
				.toLowerCase()
				.includes(lowerCaseSearchTerm);
			const metaDataMatch = photo.metaData
				.toLowerCase()
				.includes(lowerCaseSearchTerm);
			const matchedCat = photo.category.includes(category);
			const matchedLicense = photo.license.includes(license);
			// Return true if the search term matches any of the fields, causing this photo to be included in the filter result
			return (
				titleMatch ||
				descriptionMatch ||
				metaDataMatch ||
				matchedCat ||
				matchedLicense
			);
		});

		// Return the filtered array of photos
		return filteredPhotos;
	}

	useEffect(() => {
		setFilteredPhotos(searchPhotos(photos, searchKeyword));
	}, [searchKeyword]);

	// TODO:: sidebar open handler
	const sideBarHandler = () => {
		setSideBarOpen((prev) => !prev);
	};

	// console.log("side-bar-open", sideBarOpen);

	return (
		<div className="photos-library-wrapper ">
			<div className="containerr max-w-amulette lg:px-amulette flex flex-col items-start justify-between mx-auto md:space-x-8 md:bg-white bg-[#fdfdfd] photos-library md:flex-row">
				<div className="col-left md:w-4/12 lg:w-3/12 px-7 py-7 md:block hidden rounded-3xl border border-[#979898]">
					<License />
					<Category photosLibrarySidebar={false} />
				</div>

				<div className="col-right w-full md:w-8/12  lg:w-9/12 md:rounded-3xl  md:border border-[#979898] px-0 md:px-7 py-0 sm:py-4 md:py-7">
					<h3 className="text-xl lg:text-[25px] font-bold">
						<span className="text-[#25282B">Explore</span>
						<span className="text-primaryColor"> Diverse Photos</span>
					</h3>
					<p className="text-sm lg:text-base leading-[26px] lg:leading-7 font-normal text-[#25282B] mt-1">
						Dive into our extensive library of captivating photos. From stunning
						landscapes to adorable pets, discover a world of creativity and
						inspiration.
					</p>
					<div className="relative flex items-center justify-between search-wrapper mt-6">
						<PhotosLibrarySidebar
							sideBarHandler={sideBarHandler}
							sideBarOpen={sideBarOpen}
						/>

						<div
							onClick={sideBarHandler}
							className="block md:hidden px-4 py-2 bg-primaryColor rounded-full cursor-pointer "
						>
							<HiAdjustmentsHorizontal className="w-8 h-8 text-white" />
						</div>

						<div className="search border w-full flex md:ml-0 ml-3 flex-row items-center justify-start space-x-2.5 border-[#DADADA] rounded-3xl px-6 py-3  ">
							<IoSearchSharp color="#F65F19" size={18} />{" "}
							<input
								onChange={(e) => setSearchKeyword(e.target.value)}
								value={searchKeyword}
								className="w-[85%] focus:border-0 indent-3 outline-none "
								type="text"
								placeholder="Search"
							/>
						</div>
					</div>
					{/* photos section columns-3 lg:columns-4 */}
					<div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-6 overflow-hidden">
						{filteredPhotos?.map((photo, index) => (
							<PhotoCard key={index} photo={photo} />
						))}
					</div>
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default PhotosLibrary;
// 