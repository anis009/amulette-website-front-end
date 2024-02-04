import React from "react";
import AmuletteServiceCard from "./AmuletteServiceCard";

const AmuletteFeatures = () => {
    const amuletteServices=[
        {
        title: 'Connect with Ease',
        description:'Seamless Bluetooth pairing with our Amulette app. Connect and share moments effortlessly',
        image: 'Images/AmuletteFeatures/Ease.svg'

    },
        {
        title: 'Display Your Personality',
        description:'Wearable, compact, and customizable – let your style shine with Amulette',
        image: 'Images/AmuletteFeatures/Personality.svg'

    },
        {
        title: 'Share and Explore',
        description:'Share images with friends and create lasting memories. Explore a world of creativity together',
        image: 'Images/AmuletteFeatures/Explore.svg'

    }

];
  return (
    <div style={{backgroundColor: 'rgba(246, 95, 25, 0.10)'}} className="amulette-service-wrapper py-14">
      <div className="amulette-service containerr max-w-amulette lg:px-amulette mx-auto px-5 lg::px-0">
        <h1 className="text-xl lg:text-[40px] font-semibold font-Poppins text-center">
          <span className="text-primaryColor">Amulette </span>
          <span className="">
            Services
          </span>
        </h1>
        <p style={{color:'color: rgba(0, 0, 0, 0.80)'}} className="about-feature text-center text-xl font-normal text-menuColor mt-4">
          Empowering individuals to express themselves creatively through
          wearable technology.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-[60px]">
            {amuletteServices?.map((service,index)=>(
                <AmuletteServiceCard key={index} service={service}/> )
)}


        </div>
      </div>
    </div>
  );
};

export default AmuletteFeatures;
