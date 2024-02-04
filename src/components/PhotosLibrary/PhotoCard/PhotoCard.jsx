/* eslint-disable react/prop-types */
const PhotoCard = ({ photo }) => {
	return (
		<div className="photo-card relative w-full h-full">
			{photo.isDimond && (
				<div className=" w-[25px] h-[28px] badge absolute md:top-4 md:right-4 right-[20%] top-[10%]  z-30 rounded-[86px]">
					<img
						src="Images/PhotosLibrary/Dimond.svg"
						className="w-full h-full"
					/>
				</div>
			)}
			<img
				className="w-full h-full lg:w-[200px] lg:h-[200px] rounded-2xl border border-[#E5E5E4]"
				src={`${photo.photo}`}
			/>
		</div>
	);
};

export default PhotoCard;
