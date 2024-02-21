/* eslint-disable react/prop-types */
const PhotoCard = ({ photo }) => {
	return (
		<div
			className={`photo-card relative w-full h-[130px] sm:h-[200px] bg-cover bg-no-repeat bg-center overflow-hidden rounded-lg`}
			style={{ backgroundImage: `url('${photo.image}')` }}
		>
			{photo.type === "premium" && (
				<div className="absolute z-30 w-8 h-8 rounded-full sm:w-10 sm:h-10 badge top-4 right-4">
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
