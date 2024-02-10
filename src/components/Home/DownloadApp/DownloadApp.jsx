import React from "react";
import { DiApple } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const DownloadApp = () => {
  return (
    <div className="download-app-wrapper">
      <div className="download-app containerr max-w-amulette lg:px-amulette mx-auto flex flex-col lg:flex-row items-center justify-center my-5 px-5 lg:px--0">
        <div className="col-left w-full lg:w-1/2">
          <div
            style={{ background: "rgba(246, 95, 25, 0.10)" }}
            className="amulette-available w-full lg:w--[70%] flex flex-row items-center justify-start text-[11px] lg:text-sm border-[1px] border-primaryColor space-x-3 rounded-full px-2 lg:px-2.5 py-2 lg:py-2.5"
          >
            <span className="bg-primaryColor text-sm sm:text-base xl:text-lg text-white font-semibold text-center px-4 lg:px-10 py-1 lg:py-1.5 rounded-full">
              Amulette
            </span>{" "}
            <span className=" text-sm sm:text-base xl:text-lg"> Is available Now on android and ios</span>
          </div>
          <h1 className="download-the-app text-lg lg:text-4xl font-bold font-Poppins mt-5 lg:mt-9">
            Download The App
          </h1>
          <p className="desc text-[12px] lg:text-xl font-normal leading-5 lg:leading-9 mt-2">
            Express Yourself with Amulette. A compact, stylish, and customizable
            badge that showcases your unique personality.{" "}
          </p>
          <div className="download-btns flex  flex-row items-center justify-between md:justify-start lg:justify-start space-x-7 mt-8 lg:mt-11">
            <div  className="apple-btn flex flex-row items-center justify-center space-x-2 lg:space-x-3.5 px-4 lg:px-7 py-2 lg:py-3 bg-primaryColor border border-primaryColor  rounded-full cursor-pointer">
              <div className="left">
                <DiApple className="w-auto h-[32px]" color="#fff" width={30} height={36} />
              </div>
              <div className="right flex flex-col items-start justify-center">
                <p className="text-white text-[9px] md:text-xs lg:text-sm font-Poppins font-medium">
                  Download on the
                </p>
                <h3 className="text-white text-xs md:text-sm lg:text-lg font-Poppins font-bold">
                  Applestore
                </h3>
              </div>
            </div>
            <div className="android-btn flex flex-row items-center justify-center px-4 lg:px-7 py-2 lg:py-3 space-x-2 lg:space-x-3.5 border border-[#455] rounded-full cursor-pointer">
              <div className="left">
              <IoLogoGooglePlaystore  className="w-auto h-[32px]" color="#455" width={29} height={32}/>

              </div>
              <div className="right flex flex-col items-start justify-center">
                <p className="text-[#455] text-[9px] md:text-xs lg:text-sm font-Poppins font-medium">
                  Download on the
                </p>
                <h3 className="text-[#455] text-xs md:text-sm lg:text-lg font-Poppins font-bold">
                  Playstore
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right w-full lg:w-1/2 pb-2">
          <img src="Images/DownloadApp/Download-App-Right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
