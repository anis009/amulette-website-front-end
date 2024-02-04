import OurProducts from "./Home/OurProducts/OurProducts";

const ProductNotFound = () => {
  return (
    <div className="product-not-found flex flex-col items-center justify-center">
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
