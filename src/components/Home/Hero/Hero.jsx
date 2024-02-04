
const Hero = () => {
  return (
    <div
      // style={{ backgroundImage: `url('Images/Hero/Hero-BG.svg')` }}
      className="hero-wrapper sm:bg-heroDesktop bg-cover bg-center pt-[50px] lg:pt-[160px] pb-[70px] lg:pb-[180px] "
    >
      <div className="hero containerr max-w-amulette lg:px-amulette mx-auto  flex flex-col items-start justify-center lg:justify-start px-5 ">
        <h3 className="text-left capitalize text-primaryColor font-Poppins font-bold text-sm lg:text-xl">
          Express Yourself with Amulette
        </h3>
        <div className="heading-section flex flex-col items-start justify-start text-left font-Poppins text-[30px] font-bold lg:text-[66px] text-headingColor mt-8">
          <span className="blockk">Your Personal</span>
          <span className="">Badge of Creativity!</span>
        </div>
        <div className="paragram-section w-full sm:w-[70%] lg:w-full flex flex-col items-start justify-start font-Poppins text-xl text-headingColor font-normal mt-8">
          <span className="block">
            A compact, stylish, and customizable badge that
          </span>
          <span className="showcases your unique personality."></span>
        </div>
        <div className="buttons flex flex-row items-center justify-center space-x-7 mt-12">
          <button className="text-sm lg:text-xl font-Poppins font-medium bg-primaryColor text-white px-8 md:px-12 lg:px-[76px] py-2 md:py-3 lg:py-4 rounded-lg">
            Shop Now
          </button>
          <button className="text-sm lg:text-xl font-Poppins font-medium text-primaryColor hover:bg-primaryColor hover:text-white border border-primaryColor px-8 md:px-12 lg:px-[76px] py-2 md:py-3 lg:py-4 rounded-lg">
            Get The App
          </button>
        </div>
        <div className="sm:hidden flex flex-row items-center justify-center">
          <img src="Images/Hero/Mobile-Hero-BG.svg"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
