/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../../../redux/features/products";
import classNames from "classnames";
import React from "react";

const ProductCard = ({ product, setShowModal, ourCardHomeCarousel, index }) => {
	const dispatch = useDispatch();
	const showModalHandler = () => {
		dispatch(setSingleProduct(product));
		setShowModal((prev) => !prev);
	};
	return (
		<div
			className={classNames(
				"flex flex-col py-5 mx-2 border border-black product-card border-opacity-20 rounded-3xl text-center h-full justify-between",
				{
					// "w-[200px]": ourCardHomeCarousel === true,
				}
			)}
		>
			<div
				onClick={showModalHandler}
				className={classNames(
					"img-wrapper px-2 py-2 mx-5 lg:px--[30px] lg:py--[15px] border border-[#F6F6F6] bg-[#F6F6F6] rounded-2xl cursor-pointer"
				)}
			>
				<div
					className={classNames(
						"img-parent overflow-hidden w-full lg:w-auto flex justify-center",
						{}//h-[120px] lg:h-[221px]
					)}
				>
					<img
						src={`${product.img}`}
						className={classNames({
							// "w-[150px]": ourCardHomeCarousel === true,
						})}
						alt=""
					/>
				</div>
			</div>
			<h3
				onClick={showModalHandler}
				className="title text-[1C121F] text-xs lg:text-lg font-semibold font-Poppins cursor-pointer text-left m-2 ml-5"
			>
				{product.title}
			</h3>
			<p className="desc text-[9px] lg:text-xs text-[#1C121F] font-normal font-Poppins mt-2 px-5 text-left">
				{product.shortDescription}
			</p>
			<div className="usd-add-to-cart flex flex-col sm:flex-row mx-5 items-center justify-between sm:space-x-5 mt-3.5">
				<span className="text-[#1C121F] text-base  lg:text-lg font-semibold">
					${product.price}
				</span>
				<button className="bg-primaryColor text-white w-full sm:w-auto lg:w-full sm:px-10 lg:px-0 py-1.5 lg:py-3.5 rounded-[50px] mt-2 sm:mt-0">
					<div className="flex flex-row items-center justify-center space-x-1.5">
						<IoCartOutline className="h-4 w-4" size={16} />{" "}
						<span className="text-xs font-medium lg:text-sm">Buy Now</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
