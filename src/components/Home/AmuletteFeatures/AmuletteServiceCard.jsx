import React from 'react';

const AmuletteServiceCard = ({ service }) => {
  return (
    <div className="service-card flex flex-col items-center justify-center">
      <img src={`${service.image}`} alt={service.title} />
      <h2 className="text-center text-lg lg:text-xl xl:text-2xl font-semibold text-black mt-3">
        {service.title}
      </h2>
      <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-5 lg:leading-7 xl:leading-9 mt-2.5">
        {service.description}
      </p>
    </div>
  );
};

export default AmuletteServiceCard;