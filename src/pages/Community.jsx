import { diversPhotos, ideas, processSteps } from "../constants/constant-data";
import cbg1 from "../assets/cbg1.png";
import cbg2 from "../assets/cbg2.png";
import classNames from "classnames";

const CommunityTitle = () => {
  return (
    <div className="mt-8 text-center">
      <h1 className="text-center leading-[51px] text-[24px] font-bold">
        Why Community <span className="text-[#F65F19]">Matters</span>
      </h1>
      <p className="text-[17px] leading-[27px] mt-[8px] font-normal">
        Share Your Creations to the World
      </p>
    </div>
  );
};

const Idea = () => {
  return (
    <div className="grid grid-cols-4   custom-container gap-[67px] mt-[47px]">
      {ideas.map((item) => {
        return (
          <div key={item.id} className="text-center">
            <h3 className="leading-[23px] font-semibold text-[#445555] text-[22px]">
              {item.name}
            </h3>
            <img
              className="w-[115px] h-[115px] mt-[30px] mx-auto"
              src={item.photo}
              alt={item.name}
            />
            <p className="text-[18px] font-normal mt-[17px] leading-[35.68px] text-[#445555]">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const ProcessStepsImage = () => {
  return (
    <div className="custom-container mt-[70px]">
      <img src="Images/Community/img-steps.png" className="w-full" alt="" />
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cbg1}),url(${cbg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "center",
      }}
      className=" custom-container pb-[60px]"
    >
      {processSteps.map((step, index) => {
        return (
          <div
            className={classNames("flex pt-[37px] gap-[107px]", {
              "flex-row": index % 2 === 0,
              "flex-row-reverse": index % 2 === 1,
            })}
            key={step.id}
          >
            <div className="flex justify-center items-center">
              <img src={step.subImage} alt="" />
              <div className="ml-[20px]">
                <div className="flex flex-row items-center justify-start">
                  <h3 className="text-[#000000]  whitespace-nowrap font-semibold text-[25px] leading-[42px]">
                    {step.title}
                  </h3>
                  {index === 1 && (
                    <strong className="text-[16px] ml-[1px] whitespace-nowrap">
                      (Coming Soon!)
                    </strong>
                  )}
                </div>
                <p className="text-[#777777]  font-normal text-[20px] leading-[36px]">
                  {step.subTitle}
                </p>
              </div>
            </div>

            <img className="w-[40%]" src={step.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

const DiversePhotos = () => {
  return (
    <div className="mt-[79px] custom-container ">
      <div className=" border-[1px] border-[#979898] p-[44px] rounded-md">
        <h1 className="text-[#25282B]  font-bold text-center mb-[35px] text-[25px] leading-[51px]">
          Explore Diverse Photos{" "}
          <span className="text-primaryColor">of Our Community</span>
        </h1>
        <div className="grid grid-cols-5 justify-center gap-[38px]">
          {diversPhotos.map((item) => {
            return (
              <img
                src={item.image}
                className="mx-auto"
                alt={item.id}
                key={item.id}
              />
            );
          })}
        </div>
        <div className="text-center mt-[49px]">
          <button className="w-[177px] h-[49px] bg-primaryColor rounded-3xl text-white">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div className="">
      <CommunityTitle />
      <Idea />
      <ProcessStepsImage />
      <ProcessSteps />
      <DiversePhotos />
    </div>
  );
};

export default Community;
