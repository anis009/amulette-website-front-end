/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import PrevButton from "../../NextPrevButton/PrevButton";
import NextButton from "../../NextPrevButton/NextButton";
import PrevButtonCustomCF from "../../NextPrevButton/PrevButtonCustomCF";
import NextButtonCustomEB from "../../NextPrevButton/NextButtonCustomEB";
import { productsData } from "./ProductData";
import ProductDetailsPage from "../../../pages/ProductDetailsPage";
import { BsXCircle } from "react-icons/bs";
import React from "react";
const OurProducts = ({ isOurProduct = true }) => {
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const [showModal, setShowModal] = useState(false);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1000 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	useEffect(() => {
		console.log('productData: ', productsData)
	}, [])


	return (
		<div className="our-products-wrapper mt-[52px]">
			<div className="our-products  max-w-amulette lg:px-amulette mx-auto px-5 ">
				{isOurProduct && (
					<h1 className="text-xl lg:text-[40px] font-semibold font-Poppins text-center mb-5">
						<span className="text-primaryColor">Our </span>
						<span className="">Products</span>
					</h1>
				)}

				<div className="carousel-container relative hidden lg:block mb-10 ">
					<PrevButtonCustomCF prevRef={prevRef} disabled={isPrevDisabled} />
					<NextButtonCustomEB nextRef={nextRef} disabled={isNextDisabled} />

					<Carousel
						className="mx-auto mt-6 md:mt-16  relative z--0"
						partialVisible={true}
						swipeable={true}
						draggable={true}
						//   showDots={true}
						responsive={responsive}
						//   ssr={true} // means to render carousel on server-side.
						infinite={true}
						//   centerMode={true}
						autoPlay={true}
						//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
						autoPlaySpeed={10000}
						//   keyBoardControl={true}
						//   customTransition="all .5"
						//   transitionDuration={1000}
						//   containerClass="carousel"
						//   removeArrowOnDeviceType={["tablet", "mobile"]}
						//   deviceType={this.props.deviceType}

						dotListClass="custom-dot-list-style"
						// itemClass="carousel-item-padding-40-px mx-2"
						customLeftArrow={<PrevButton prevRef={prevRef} />}
						customRightArrow={<NextButton nextRef={nextRef} />}
						beforeChange={(nextSlide) => {
							console.log("beforeChange nextSlide: ", nextSlide);
							setIsPrevDisabled(nextSlide === 0);
							setIsNextDisabled(nextSlide === 4);
						}}
						centerMode={false}
						containerClass="w-full "
						// renderButtonGroupOutside
					>
						{productsData?.map((data, index) => (
							<ProductCard
								setShowModal={setShowModal}
								key={index}
								product={data}
								index={index}
								ourCardHomeCarousel
							/>
						))}
						{/* {productsData && productsData.length > 0 && (
							<div className="w-[300px]"></div>
						)} */}
					</Carousel>
					
				</div>
				<div className="hidden lg:flex flex-row items-center justify-center mt-10 ">
					<button className="px-8 py-4 cursor-pointer hover:bg-primaryColor hover:text-white text-primaryColor border-2 border-primaryColor rounded-[10px]">
						View ALL Products
					</button>
				</div>
				<div className="mobile-product-wrapper ">
					<div className="mobile-product-grid lg:hidden grid grid-cols-2 lg:grid-cols-4 gap-3 ">
						{productsData &&
							productsData.length > 0 &&
							productsData.map((data, index) => (
								<ProductCard
									setShowModal={setShowModal}
									key={index}
									product={data}
									index={index}
								/>
							))}
					</div>
					<div className="flex flex-row lg:hidden items-center justify-center m-10">
						<button className="px-4 lg:px-8 py-2 lg:py-4 cursor-pointer hover:bg-primaryColor hover:text-white text-primaryColor border-2 border-primaryColor rounded-[10px]">
							View ALL Products
						</button>
					</div>
					{showModal && (
						<div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-[99999] flex items-center justify-center  overflow-y-auto outline-none focus:outline-none">
							<div className="relative w-[90%] max-h-[90%]  overflow-y-auto  bg-white z-[9999] my-6 rounded-md mx-auto">
								<div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
									<div className="absolute top-5 right-5 ">
										<BsXCircle
											onClick={() => setShowModal(false)}
											className="w-6 h-6 text-red-600 cursor-pointer"
										/>
									</div>
								</div>
								<ProductDetailsPage />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OurProducts;
