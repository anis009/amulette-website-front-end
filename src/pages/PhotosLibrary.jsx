import PhotosLibrary from "../components/PhotosLibrary/PhotosLibrary";

const PhotosLibraryPage = (props) => {
	return (
		<div className="photos-library-page bg-[#FDFDFD]  p-6 lg:pt-7 lg:p-0">
			<PhotosLibrary {...props} />
		</div>
	);
};

export default PhotosLibraryPage;
