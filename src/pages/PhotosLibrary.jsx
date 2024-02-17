import PhotosLibrary from "../components/PhotosLibrary/PhotosLibrary";

const PhotosLibraryPage = (props) => {
	return (
		<div className="photos-library-page bg-[#FDFDFD]  py-6 lg:pt-8">
			<PhotosLibrary {...props} />
		</div>
	);
};

export default PhotosLibraryPage;
