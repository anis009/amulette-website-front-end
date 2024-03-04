// import React from "react";
import AmuletteServiceCard from "./AmuletteServiceCard";
import lottieFiles1 from "../../../assets/lottieflies/Flow 1.json";
import lottieFiles2 from "../../../assets/lottieflies/Flow 6.json";
import lottieFiles3 from "../../../assets/lottieflies/Flow 3.json";

const AmuletteFeatures = () => {
  const amuletteServices = [
    {
      id: 1,
      title: "Connect with Ease",
      description:
        "Seamless Bluetooth pairing with our Amulette app. Connect and share moments effortlessly",
      image: "Images/AmuletteFeatures/1.png",
      src: lottieFiles1,
    },
    {
      id: 2,
      title: "Have Fun with Power of AI",
      description:
        "Unleash your creative potential with the power of AI. Expanding artistic horizons like never before.",
      image: "Images/AmuletteFeatures/2.png",
      src: "Images/AmuletteFeatures/AI.png",
    },
    {
      id: 3,
      title: "Display Your Personality",
      description:
        "Wearable, compact, and customizable – let your style shine with Amulette",
      image: "Images/AmuletteFeatures/3.png",
      src: lottieFiles2,
    },
    {
      id: 4,
      title: "Share and Explore",
      description:
        "Share images with friends and create lasting memories. Explore a world of creativity together",
      image: "Images/AmuletteFeatures/4.png",
      src: lottieFiles3,
    },
  ];

  return (
    <div
      style={{ backgroundColor: "rgba(246, 95, 25, 0.10)" }}
      className="amulette-service-wrapper py-14"
    >
      <div className="amulette-service custom-container">
        <h1 className="text-xl lg:text-[40px] font-semibold font-Poppins text-center">
          <span className="text-primaryColor">Amulette </span>
          <span className="">Features</span>
        </h1>
        <p
          style={{ color: "color: rgba(0, 0, 0, 0.80)" }}
          className="mt-4 mb-10 text-sm font-normal text-center about-feature sm:text-base lg:text-xl text-menuColor lg:mb-0"
        >
          Empowering individuals to express themselves creatively through
          wearable technology.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-1 gap-4 lg:mt-[60px]">
          {amuletteServices?.map((service, index) => (
            <AmuletteServiceCard key={index} index={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmuletteFeatures;
