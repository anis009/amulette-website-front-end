import React from "react";

/* eslint-disable react/prop-types */
const PhotoCard = ({ photo }) => {
	return (
		<div
			className={`photo-card relative w-full h-[130px] sm:h-[200px] bg-cover bg-no-repeat bg-center overflow-hidden rounded-lg`}
			style={{ backgroundImage: `url('${photo.photo}')` }}
		>
			{photo.isDimond && (
				<div className=" w-8 sm:w-10 h-8 sm:h-10 badge absolute top-4 right-4 z-30 rounded-full">
					<img
						src="Images/PhotosLibrary/Dimond.svg"
						className="w-full h-full"
					/>
				</div>
			)}
			{/* <img
				className="w-full h-full lg:w-[200px] lg:h-[200px] rounded-2xl border border-[#E5E5E4]"
				src={`${photo.photo}`}
			/> */}
		</div>
	);
};

export default PhotoCard;
