/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/features/photoLibrary";
import classNames from "classnames";
// import { categories } from "../../../constants/constant-data";
import { useGetCategoriesQuery } from "../../../redux/Api/categoryApi";
import Loading from "../../Loading/Loading";

const CategoryTabs = ({ photosLibrarySidebar, setPage }) => {
  const dispatch = useDispatch();
  //   const category = useSelector((state) => state.photo);

  const { isLoading, data } = useGetCategoriesQuery(undefined);
  console.log("catgories-data~", data, isLoading);
  // const category = useSelector((state) => state.photo);
  const { category } = useSelector((state) => state.photo);
  const categoryHandler = (value) => {
    dispatch(setCategory(value));
    setPage(1);
  };

  console.log("category~", category);
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            key="12"
            onClick={() => categoryHandler("all")}
            className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
              category.includes("all")
                ? "bg-primaryColor text-white"
                : "bg-categoryTabColor text-[#444]"
            }  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
          >
            <img src="Images/PhotosLibrary/Category/All-Photos.svg" />
            <span className="">All Photos</span>
          </div>

          {data &&
            data?.data.map((_cat) => {
              return (
                <div
                  key={_cat.id}
                  onClick={() => categoryHandler(_cat.name.toLowerCase())}
                  className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
                    category.includes(_cat.name.toLowerCase())
                      ? "bg-primaryColor text-white"
                      : "bg-categoryTabColor text-[#444]"
                  }  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
                >
                  <img src={_cat.image} />
                  <span className="">{_cat.name}</span>
                </div>
              );
            })}
        </>
      )}

      {/* {categories.map((_cat) => {
        return (
          <div
            key={_cat.id}
            onClick={() => categoryHandler(_cat.value)}
            className={`tab-item w-full flex flex-row items-center justify-start space-x-2 ${
              category.includes(_cat.value)
                ? "bg-primaryColor text-white"
                : "bg-categoryTabColor text-[#444]"
            }  text-[14px] font-medium   rounded-full px-3 py-2 cursor-pointer`}
          >
            <img src={_cat.icon} />
            <span className="">{_cat.name}</span>
          </div>
        );
      })} */}
    </div>
  );
};

export default CategoryTabs;
