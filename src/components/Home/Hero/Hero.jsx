import React from "react";

const Hero = () => {
  return (
    <div
      // style={{ backgroundImage: `url('Images/Hero/Hero-BG.svg')` }}
      className="hero-wrapper bg-[url('/Images/Hero/hero-bg-mobile.svg')] sm:bg-heroDesktop bg-contain sm:bg-cover bg-right-top bg-no-repeat sm:bg-center pt-5 sm:pt-10 lg:pt-[160px]  pb-5 sm:pb-10  lg:pb-[160px] "
    >
      <div className="hero custom-container  flex flex-col items-start justify-center lg:justify-start ">
        <h3 className="text-left uppercase text-primaryColor font-Poppins font-bold text-sm lg:text-xl">
          Express Yourself with Amulette
        </h3>
        <div className="heading-section flex flex-col items-start justify-start text-left font-Poppins text-[26px] md:text-[30px]  lg:text-[66px] font-bold text-headingColor mt-5 md:mt-8">
          <span className="blockk">Personalized Charm</span>
          <span className="">at Your Fingertips!</span>
        </div>
        <div className="paragram-section w-full sm:w-[70%] lg:w-full flex flex-col items-start justify-start font-Poppins md:text-xl text-headingColor font-normal mt-5 md:mt-8">
          <span className="hidden md:block">
          Unlock Your Unique Style, Customized Charms for Every Moment
          </span>
          {/* <span className="hidden md:block mt-2">showcases your unique personality.</span> */}
          <span className="block md:hidden">
            Unlock Your Unique Style, Customized Charms for Every Moment
          </span>
        </div>
        <div className="buttons flex flex-row items-center justify-center space-x-7 mt-5 md:mt-12">
          <button className="text-sm lg:text-xl font-Poppins font-medium bg-primaryColor text-white px-6 sm:px-8 md:px-12 lg:px-[76px] py-2 md:py-3 lg:py-4 rounded-lg border-[2px] border-primaryColor shadow-[4px_13px_30px_0px_#F65F191A]">
            Shop Now
          </button>
          <button className="text-sm lg:text-xl font-Poppins font-medium text-primaryColor hover:bg-primaryColor hover:text-white border-[2px] border-primaryColor px-6 sm:px-8 md:px-12 lg:px-[76px] py-2 md:py-3 lg:py-4 rounded-lg shadow-[4px_13px_30px_0px_#F65F191A]">
            Get The App
          </button>
        </div>
      </div>
      <div className="sm:hidden flex flex-row items-center justify-center text-center mt-4 md:mt-8 w-full">
        <img className="w-full" src="Images/Hero/Mobile-Hero-BG.svg"/>
      </div>
    </div>
  );
};

export default Hero;
// box-shadow: 4px 13px 30px 0px #F65F191A;
