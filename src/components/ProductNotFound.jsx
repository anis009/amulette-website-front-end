import React from "react";
import OurProducts from "./Home/OurProducts/OurProducts";
import { FaArrowLeft } from "react-icons/fa";

const ProductNotFound = () => {
  return (
    <div className="product-not-found custom-container flex flex-col items-center justify-center relative product-not-found-wrapper">
      <button className="absolute flex items-center px-4 py-2 border-2 top-0 left-[5%] text-primaryColor border-primaryColor rounded-3xl">
				<FaArrowLeft />
				<strong className="ml-1">Back</strong>
			</button>
      <img src="Images/Product-Not-Found.svg" />
      <h3 className="text-[#25282B] text-xl lg:text-4xl font-bold text-center">
        No Products Found{" "}
      </h3>
      <p className="text-[#25282B] text-center text-sm lg:text-[20px] font-normal leading-6 lg:leading-10 mt-4">{`Sorry, we couldn't find any products matching your search. Please check your spelling or try a different keyword.`}</p>
      <div className="container mx-auto h-[1px] w-full bg-[#DADADA] mt-4"></div>
      <h1 className="font-bold text-[11px] md:text-sm lg:text-[25px] lg:flex flex-row items-center justify-center lg:space-x-2 mt-11">
        <span className="text-[#25282B]">Amulette Accessories That</span>{" "}
        <span className="text-primaryColor">You Might Interested In</span>
      </h1>
      <OurProducts isOurProduct={false} />
    </div>
  );
};

export default ProductNotFound;
