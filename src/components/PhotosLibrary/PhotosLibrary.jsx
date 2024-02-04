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
			<div className="containerr max-w-amulette lg:px-amulette flex flex-col items-start justify-between mx-auto md:space-x-8 md:px-0 px-0 md:bg-white bg-[#fdfdfd] photos-library md:flex-row">
				<div className="col-left lg:w-1/3 px-9 py-8 md:block hidden rounded-3xl border border-[#979898]">
					<License />
					<Category />
				</div>

				<div className="col-right w-full lg:w-2/3 md:rounded-3xl  md:border border-[#979898] px-11 py-7">
					<h3 className="text-xl lg:text-[25px] font-bold">
						<span className="text-[#25282B">Explore</span>
						<span className="text-primaryColor"> Diverse Photos</span>
					</h3>
					<p className="text-xs lg:text-sm leading-[26px] lg:leading-7 font-normal text-[#25282B] mt-1">
						Dive into our extensive library of captivating photos. From stunning
						landscapes to adorable pets, discover a world of creativity and
						inspiration.
					</p>
					<div className="relative flex items-center justify-between search-wrapper mt-7">
						<PhotosLibrarySidebar
							sideBarHandler={sideBarHandler}
							sideBarOpen={sideBarOpen}
						/>

						<div
							onClick={sideBarHandler}
							className="block md:hidden px-6 py-4 h-[50px] bg-primaryColor rounded-2xl cursor-pointer "
						>
							<HiAdjustmentsHorizontal className="w-6 h-6 text-white" />
						</div>

						<div className="search border w-full flex md:ml-0 ml-3 flex-row items-center justify-start space-x-2.5 border-[#DADADA] rounded-3xl px-4 py-3 h-[50px]">
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
					{/* photos section */}
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:grid-cols-4  mt-9">
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
