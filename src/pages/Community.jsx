import { diversPhotos, ideas, processSteps } from "../constants/constant-data";
import cbg1 from "../assets/cbg1.png";
import cbg2 from "../assets/cbg2.png";
import classNames from "classnames";
import { useGetAllPhotosMutation } from "../redux/Api/photoApi";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

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
    <div className="grid lg:grid-cols-4 grid-cols-2   custom-container gap-[67px] mt-[47px]">
      {ideas.map((item) => {
        return (
          <div key={item.id} className="text-center">
            <h3 className="lg:leading-[23px] leading-[16px] font-semibold text-[#445555] lg:text-[22px] text-[14px]">
              {item.name}
            </h3>
            <img
              className="w-[115px] h-[115px] mt-[30px] mx-auto"
              src={item.photo}
              alt={item.name}
            />
            <p className="lg:text-[18px] text-[11px] font-normal mt-[17px] lg:leading-[35.68px] leading-5 text-[#445555]">
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
      <img
        src="Images/Community/img-steps.png"
        className="w-full lg:block hidden"
        alt=""
      />
      <img
        src="Images/Community/responsive-process-image.png"
        className="w-full block lg:hidden"
        alt=""
      />
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
            className={classNames(
              "flex pt-[37px] lg:gap-[107px] gap-[50px] flex-col-reverse",
              {
                "lg:flex-row": index % 2 === 0,
                "lg:flex-row-reverse": index % 2 === 1,
              }
            )}
            key={step.id}
          >
            <div className="flex justify-center items-center">
              <img src={step.subImage} className="lg:w-auto w-[39px]" alt="" />
              <div className="lg:ml-[20px] ml-[2px]">
                <div className="flex flex-row items-center justify-start">
                  <h3 className="text-[#000000]  whitespace-nowrap font-semibold lg:text-[25px] text-[14.24px] leading-[42px]">
                    {step.title}
                  </h3>
                  {index === 1 && (
                    <strong className="lg:text-[16px] text-[12px] ml-[1px] whitespace-nowrap">
                      (Coming Soon!)
                    </strong>
                  )}
                </div>
                <p className="text-[#777777]  font-normal lg:text-[20px] text-[12px] lg:leading-[36px] leading-[20px]">
                  {step.subTitle}
                </p>
              </div>
            </div>

            <img className="lg:w-[40%] w-[95%]" src={step.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

const DiversePhotos = () => {
  const [getAllPhotos, { isSuccess, data: photos, isLoading }] =
    useGetAllPhotosMutation();
  console.log(isSuccess, photos);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        await getAllPhotos({
          categories: ["community"],
          limit: 20,
          page: 1,
          type: "all",
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [getAllPhotos]);

  if (isLoading) {
    return <Loading />;
  }
  console.log("get-community-photos~", photos);
  return (
    <div className="mt-[79px] custom-container ">
      <div className=" border-[1px] border-[#979898] lg:p-[44px] p-[20px] rounded-md">
        <h1 className="text-[#25282B]  font-bold text-center mb-[35px] text-[25px] leading-[51px]">
          Explore Diverse Photos{" "}
          <span className="text-primaryColor">of Our Community</span>
        </h1>
        <div className="grid lg:grid-cols-5 grid-cols-3 justify-center lg:gap-[38px] gap-[12px]">
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
