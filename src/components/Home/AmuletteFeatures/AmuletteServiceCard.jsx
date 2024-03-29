/* eslint-disable react/prop-types */
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import lottflies from "../../../assets/lottieflies/Flow 8.json";
const AmuletteServiceCard = ({ service, index }) => {
  return (
    <div className="flex flex-col items-center justify-start mb-10 service-card lg:mb-0 lg:max-w-[300px] relative">
      {/* <img src={`${service.image}`} alt={service.title} /> */}

      <div className="relative flex justify-center items-center xl:w-[250px] xl:h-[250px] bg-white rounded-full">
        {service.id === 2 ? (
          <img
            src={service.src}
            style={{ height: "200px", width: "200px" }}
            alt={service.title}
          />
        ) : (
          <Player
            autoplay
            loop
            style={{ height: "200px", width: "200px" }}
            src={service.src}
          ></Player>
        )}

        {index === 0 && (
          <Player
            autoplay
            loop
            src={lottflies}
            className="left-[50%] translate-x-[-50%]"
            style={{
              height: "120px",
              width: "120px",
              position: "absolute",
              bottom: '-20px',
              // left: '50%',
            }}
          ></Player>
        )}
      </div>
      <img src={service.image} alt="" className="h-[60px] mt-10" />

      <h2 className="mt-3 text-features text-lg font-semibold text-center text-black lg:text-[18px] xl:text-[22px]">
        {service.title}
      </h2>
      <p className="text-center description-text-features text-sm md:text-base lg:text-[10px] xl:text-[18px] font-normal leading-5 lg:leading-7 xl:leading-9 mt-2.5">
        {service.description}
      </p>
    </div>
  );
};

export default AmuletteServiceCard;
