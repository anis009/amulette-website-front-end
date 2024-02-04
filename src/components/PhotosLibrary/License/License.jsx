import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import LicenseTabs from "./LicenseTabs";

const License = () => {
  const [isLicenseOpen, setIsLicenseOpen] = useState(true);
  return (
    <div className="license w-full">
      <div onClick={()=>setIsLicenseOpen(!isLicenseOpen)} className="license-toggle flex flex-row items-center justify-between cursor-pointer">
        <div className="title">License</div>
        <MdArrowDropDown />
      </div>
      {isLicenseOpen && <LicenseTabs />}
    </div>
  );
};

export default License;
