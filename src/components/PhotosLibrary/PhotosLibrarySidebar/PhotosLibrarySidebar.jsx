/* eslint-disable react/prop-types */
import License from "../License/License";
import Category from "../Category/Category";
import classNames from "classnames";
// border-[#979898]
const PhotosLibrarySidebar = ({ librayFilterOpen }) => {
  return (
    <div
      className={classNames(
        "col-left p-5 fixed top-[74px] right-0 bottom-0 left-0  bg-white z-[70] w-full ",
        {
          "active-sidebar-open": librayFilterOpen === true,
          "inactive-sidebar-open": librayFilterOpen !== true,
        }
      )}
    >
      <License />
      <Category photosLibrarySidebar={true} />
    </div>
  );
};

export default PhotosLibrarySidebar;
