import React from "react";

const ExperienceAmulette = () => {
  return (
    <div
      style={{
        backgroundImage: "url('Images/ExperienceAmulette/Experience-Amulette-BG.svg')",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
      className="experience-amulette-wrapper mt-9 pb-9 bg-[length:50%] md:bg-[length:40%] lg:bg-[length:30%]"
    >
      <div className="experience-amulette custom-container flex flex-col lg:flex-row items-center justify-center space-y-8 ">
        <div className="col-left lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-xl lg:text-3xl font-bold">
            <span className="">Experience </span>
            <span className="text-primaryColor">Amulette</span>
          </h1>
          <p className="text-left text-headingColor font-normal text-sm lg:text-[20px] leading-[34px] pt-5">
            Immerse yourself in a world of creativity with Amulette – where
            technology meets personal expression, seamlessly connecting moments
            and memories.
          </p>
          <ul className="service-list flex flex-col items-start justify-center space-y-5 text-sm xl:text-base mt-[34px]">
            <li className="flex flex-row items-center justify-center space-x-3.5">
              <img className="" src="Images/ExperienceAmulette/check.svg" />
              <span className="">
                <span className="text-black font-semibold">Memories in Motion: </span>
                <span className="font-semibold text-[rgb(0,0,0,0.5)]">Your Photos, Your Charms</span>
              </span>
            </li>
            <li className="flex flex-row items-center justify-center space-x-3.5">
              <img className="" src="Images/ExperienceAmulette/check.svg" />
              <span className="">
                <span className="text-black font-semibold">Capture & Commemorate: </span>
                <span className="font-semibold text-[rgb(0,0,0,0.5)]">Screenshots to Sentiments</span>
              </span>
            </li>
            <li className="flex flex-row items-center justify-center space-x-3.5">
              <img className="" src="Images/ExperienceAmulette/check.svg" />
              <span className="">
                <span className="text-black font-semibold">Mood Made Visual: </span>
                <span className="font-semibold text-[rgb(0,0,0,0.5)]">Library Picks for Personal Expression</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-right lg:w-1/2">
          <img src="Images/ExperienceAmulette/Desktop.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceAmulette;
