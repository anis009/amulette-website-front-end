/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import image from "../../assets/carousel-image.png";
import { Colors } from "../../constants/colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ProductDetailsLeftSide = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};
	const {singleProduct}=useSelector((state)=>state.product )
	useEffect(() => {
		// Add event listener when component mounts
		window.addEventListener("resize", handleResize);
		// Clean up event listener when component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	console.log("window-width~", windowWidth);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	// const images = [
	// 	{
	// 		id: 1,
	// 		image: image,
	// 	},
	// 	{
	// 		id: 2,
	// 		image: image,
	// 	},
	// 	{
	// 		id: 3,
	// 		image: image,
	// 	},
	// 	{
	// 		id: 4,
	// 		image: image,
	// 	},
	// 	{
	// 		id: 5,
	// 		image: image,
	// 	},
	// ];

	const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
		const {
			carouselState: { currentSlide },
		} = rest;
		console.log(currentSlide);
		return (
			<div className="flex items-center justify-end w-full gap-4 md:mb-4 carousel-button-group">
				<button
					className="absolute top-[50%] w-[50px] h-[50px] rounded-full md:left-[25px] -left-4 p-3"
					style={{
						backgroundColor: currentSlide === 0 ? "#979898" : Colors.primary,
					}}
					onClick={() => previous()}
				>
					<FaArrowLeft className="w-5 h-5 text-white" />
				</button>
				<button
					style={{
						backgroundColor:
							currentSlide === singleProduct?.images?.length - 1 ? "#979898" : Colors.primary,
					}}
					className="absolute top-[50%] flex justify-center items-center md:right-[25px] -right-4  w-[50px] h-[50px] rounded-full z-50"
					onClick={() => next()}
				>
					<FaArrowRight className="w-5 h-5 text-white" />
				</button>
			</div>
		);
	};
	const CustomDot = ({ onClick, ...rest }) => {
		const {
			onMove,
			index,
			active,
			carouselState: { currentSlide, deviceType },
		} = rest;
		// onMove means if dragging or swiping in progress.
		// active is provided by this lib for checking if the item is active or not.
		return (
			<div
				className={classNames(
					" mx-3 h-[100px] flex border-2 shadow  justify-center items-center rounded-lg cursor-pointer",
					{
						"border-2 border-orange-500": active === true,
						"border-2 border-gray-200": active !== true,
					}
				)}
				onClick={() => onClick()}
			>
				<img
					src={singleProduct?.images[currentSlide]?.image}
					className="w-full h-full"
					alt=""
				/>
			</div>
		);
	};

	return (
		<div className="md:w-[50%] w-full border-2   md:p-10 p-2  shadow-md  mx-2 rounded-md relative">
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={windowWidth > 768 ? true : false}
				responsive={responsive}
				autoPlaySpeed={1000}
				customButtonGroup={<ButtonGroup />}
				renderButtonGroupOutside={true}
				arrows={false}
				containerClass="md:py-10 md:h-[750px] h-auto  md:mb-10"
				customDot={<CustomDot />}
			>
				{singleProduct?.images?.map((item) => {
					return (
						<div
							key={item.id}
							className=" rounded-md md:w-[480px] w-full md:mb-[180px] mb-0 md:mt-[20px] md:h-[calc(650px)] h-auto bg-[#F6F6F6]  mx-auto"
						>
							<img src={item.image} alt="" className="w-full h-full" />
						</div>
					);
				})}
			</Carousel>
			<button className="absolute flex items-center px-4 py-2 border-2 md:top-20 top-4 md:left-20 left-4 text-primaryColor border-primaryColor rounded-3xl">
				<FaArrowLeft />
				<strong className="ml-1">Back</strong>
			</button>
		</div>
	);
};

export default ProductDetailsLeftSide;
