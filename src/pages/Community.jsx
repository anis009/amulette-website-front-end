// @ts-nocheck
import React from "react";
import { diversPhotos, ideas, processSteps } from "../constants/constant-data";
// import cbg1 from "../assets/cbg1.png";
// import cbg2 from "../assets/cbg2.png";
import classNames from "classnames";
import { useGetAllPhotosMutation } from "../redux/Api/photoApi";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

const CommunityTitle = () => {
  return (
    <div className="mt-8 text-center">
      <h1 className="text-center leading-[51px] text-xl md:text-[25px] font-bold">
        Why Community <span className="text-[#F65F19]"> Matters</span>
      </h1>
      <p className="text-sm md:text-base text-lg leading-[27px] mt-[8px] font-normal text-headingColor">
        Share Your Creations to the World
      </p>
    </div>
  );
};

const Idea = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 custom-container gap-x-5 lg:gap-x-10 gap-y-10 lg:gap-y-20 mt-[47px]">
      {ideas.map((item) => {
        return (
          <div key={item.id} className="text-center">
            <h3 className="lg:leading-[23px] leading-[16px] font-semibold text-[#445555] text-base md:text-lg lg:text-[22px]">
              {item.name}
            </h3>
            <img
              className=" w-20 md:w-[100px] lg:w-[115px] h-20 md:h-[100px] lg:h-[115px] mt-5 lg:mt-8 mx-auto"
              src={item.photo}
              alt={item.name}
            />
            <p className="text-sm md:text-base lg:text-[18px] font-normal mt-[17px] lg:leading-[35.68px] leading-5 text-[#445555]">
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
    <div className="custom-container my-[70px]">
      <img
        src="Images/Community/img-steps.png"
        className="w-full lg:block hidden"
        alt=""
      />
      <img
        src="Images/Community/community-mobile-bg.png"
        className="w-full block lg:hidden"
        alt=""
      />
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <div
      className={`container-wrapper bg-[url('/Images/mobile-bg-2.png')] md:bg-[url('/Images/cbg1.png'),url('/Images/cbg2.png')]`}
      style={{
        // backgroundImage: `url(${cbg1}),url(${cbg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "center",
      }}
    >
      <div className=" custom-container pb-[60px]">
        {processSteps.map((step, index) => {
          return (
            <div
              className={classNames(
                "flex pt-10 flex-col-reverse gap-x-10 md:gap-x-20",
                {
                  "md:flex-row": index % 2 === 0,
                  "md:flex-row-reverse": index % 2 === 1,
                }
              )}
              key={step.id}
            >
              <div className="flex md:w-1/2 justify-center items-center">
                <img
                  src={step.subImage}
                  className="h-[50px] lg:h-auto lg:w-auto"
                  alt=""
                />
                <div className=" ml-3 lg:ml-5">
                  <div className="flex flex-row items-center justify-start">
                    <h3 className="text-[#000000]  whitespace-nowrap font-semibold text-[14.24px] md:text-[18px] lg:text-[22px] leading-[42px]">
                      {step.title}
                      {index === 1 && (
                        <strong className="lg:text-[16px] text-[12px] ml-[1px] whitespace-nowrap">
                          (Coming Soon!)
                        </strong>
                      )}
                    </h3>
                    
                  </div>
                  <p className="text-[#777777]  font-normal text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] lg:leading-[36px] leading-[20px]">
                    {step.subTitle}
                  </p>
                </div>
              </div>

              <div className="img-container md:w-1/2">
                <img className="w-full" src={step.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// grid-cols-[repeat(5,minmax(232px,1fr))]
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
          status: "Pending",
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
  // console.log("get-community-photos~", photos);
  // lg:grid-cols-[1fr,1fr,1fr,1fr,1fr] grid-cols-[1fr,1fr,1fr]
  return (
    <div className="mt-[79px] custom-container ">
      <div className=" border-[1px] border-[#979898] lg:p-[44px] p-[20px] rounded-2xl xl:rounded-3xl">
        <h1 className="text-[#25282B]  font-bold text-center mb-[35px] text-[25px] leading-[51px]">
          Explore Diverse Photos{" "}
          <span className="text-primaryColor">of Our Community</span>
        </h1>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(130px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-[10px] md:gap-5 lg:gap-10 ">
          {photos &&
            photos?.data.map((item) => {
              return (
                <div
                  key={item._id}
                  className={`w-[110px] md:w-[130px] lg:w-[150px] h-[110px] md:h-[130px] lg:h-[150px] bg-cover bg-center rounded-lg `}
                  style={{ backgroundImage: `url('${item?.image}')`}}
                >
                  {/* <img
                    src={item?.image}
                    className="mx-auto w-full h-[150px] rounded-md"
                    alt={item?.name}
                  /> */}
                </div>
              );
            })}
          {/* {diversPhotos.map((item) => {
            return (
              <div key={item.id} className="">
                <img
                  src={item.image}
                  className="mx-auto"
                  alt={item.id.toString()}
                  key={item.id}
                />
              </div>
            );
          })} */}
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
