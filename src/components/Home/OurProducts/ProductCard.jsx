/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../../../redux/features/products";
import classNames from "classnames";

const ProductCard = ({ product, setShowModal, ourCardHomeCarousel }) => {
	const dispatch = useDispatch();
	const showModalHandler = () => {
		dispatch(setSingleProduct(product));
		setShowModal((prev) => !prev);
	};
	return (
		<div
			className={classNames(
				"flex flex-col items-center justify-center py-6 border border-black product-card border-opacity-20 rounded-3xl",
				{
					// "w-[200px]": ourCardHomeCarousel === true,
				}
			)}
		>
			<div
				onClick={showModalHandler}
				className={classNames(
					"img-wrapper px-4 py-1.5 lg:px--[30px] lg:py--[15px] border border-[#F6F6F6] bg-[#F6F6F6] rounded-2xl cursor-pointer"
				)}
			>
				<div
					className={classNames(
						"img-parent overflow-hidden h-[120px] w-[120px] lg:h-[221px] lg:w-[221px]",
						{}
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
				className="title text-[1C121F] text-xs lg:text-lg font-semibold font-Poppins cursor-pointer"
			>
				{product.title}
			</h3>
			<p className="desc text-[9px] lg:text-xs text-[#1C121F] font-normal font-Poppins mt-2">
				{product.description}
			</p>
			<div className="usd-add-to-cart flex flex-row items-center justify-center space-x-3 lg:space-x-9 mt-3.5">
				<span className="text-[#1C121F] text-xs  lg:text-lg font-semibold">
					${product.price}
				</span>
				<button className="bg-primaryColor text-white px-5 lg:px-10 py-1.5 lg:py-3.5 rounded-[50px]">
					<div className="flex flex-row items-center justify-center space-x-1.5">
						{" "}
						<IoCartOutline className="h-4 w-4" size={16} />{" "}
						<span className="text-[7px] font-medium lg:text-sm">Buy Now</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
