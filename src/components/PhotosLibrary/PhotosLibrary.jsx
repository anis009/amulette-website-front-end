import License from "./License/License";
import PhotoCard from "./PhotoCard/PhotoCard";
import { IoSearchSharp } from "react-icons/io5";
import Category from "./Category/Category";
import Pagination from "./Pagination/Pagination";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useCallback, useEffect, useMemo, useState } from "react";
import PhotosLibrarySidebar from "./PhotosLibrarySidebar/PhotosLibrarySidebar";
// import { photos } from "./PhotoData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/features/photoLibrary";
import { useGetAllPhotosMutation } from "../../redux/Api/photoApi";
import { MoonLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const PhotosLibrary = ({ librayFilterOpen, setLibrayFilterOpen }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const { license, category } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  const [getAllPhotos, { data: photos, isLoading }] = useGetAllPhotosMutation();
  // console.log(isSuccess, photos);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        await getAllPhotos({
          categories: category,
          limit: 16,
          page: page,
          type: license,
          searchTerm: searchTerm,
          status: "Accepted",
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [category, getAllPhotos, license, page, searchTerm]);

  const handleSearch = useCallback(() => {
    if (searchKeyword.length >= 2) {
      setSearchTerm(searchKeyword);
      setPage(1);
    } else {
      setSearchTerm("");
    }
  }, [searchKeyword]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const keyWordTypeHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  useMemo(() => {
    if (category?.length === 0) {
      dispatch(setCategory("all"));
    }
  }, [category?.length, dispatch]);

  // TODO:: sidebar open handler
  const sideBarHandler = () => {
    setLibrayFilterOpen((prev) => !prev);
  };

  return (
    <div className="photos-library-wrapper ">
      <div className="custom-container flex flex-col items-start justify-between md:space-x-8 md:bg-white bg-[#fdfdfd] photos-library md:flex-row">
        <div className="col-left md:w-4/12 lg:w-3/12 px-7 py-7 md:block hidden rounded-3xl border border-[#979898]">
          <License />
          <Category setPage={setPage} photosLibrarySidebar={false} />
        </div>

        <div className="col-right w-full md:w-8/12  lg:w-9/12 md:rounded-3xl  md:border border-[#979898] px-0 md:px-7 py-0 sm:py-4 md:py-7">
          <h3 className="text-xl lg:text-[25px] font-bold">
            <span className="text-[#25282B">Explore</span>
            <span className="text-primaryColor"> Diverse Photos</span>
          </h3>
          <p className="text-sm lg:text-base leading-[26px] lg:leading-7 font-normal text-[#25282B] my-2">
            Dive into our extensive library of captivating photos. From stunning
            landscapes to adorable pets, discover a world of creativity and
            inspiration.
          </p>
          <div className="relative flex items-center justify-between mt-4 search-wrapper">
            <PhotosLibrarySidebar
              sideBarHandler={sideBarHandler}
              librayFilterOpen={librayFilterOpen}
            />

            <div
              onClick={sideBarHandler}
              className="block px-4 py-2 rounded-full cursor-pointer md:hidden bg-primaryColor "
            >
              <HiAdjustmentsHorizontal className="w-8 h-8 text-white" />
            </div>

            <div className="search border w-full flex md:ml-0 ml-3 flex-row items-center justify-start space-x-2.5 border-[#DADADA] rounded-3xl px-6 py-3  ">
              <IoSearchSharp color="#F65F19" size={18} />{" "}
              <input
                onChange={keyWordTypeHandler}
                value={searchKeyword}
                className="w-[85%] focus:border-0 indent-3 outline-none "
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          {/* photos section columns-3 lg:columns-4 */}
          {isLoading && (
            <div className="flex items-center justify-center w-full mt-[20px]">
              <MoonLoader color="#F65F19" className="mx-auto" />
            </div>
          )}
          <div className="grid grid-cols-2 gap-5 mt-6 overflow-hidden sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {photos &&
              photos?.data?.map((photo, index) => (
                <PhotoCard key={index} photo={photo} />
              ))}
          </div>
          {photos && photos?.data.length === 0 && (
            <div className="text-center">No Photos to show.</div>
          )}
          {photos && photos?.data.length > 0 && (
            <Pagination setPage={setPage} size={photos?.size} page={page} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosLibrary;
//
