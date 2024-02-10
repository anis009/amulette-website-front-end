import React from "react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductDetailsRightSide = () => {

	const { singleProduct } = useSelector((state) => state.product)
	return (
		<div className="prodcut-details-right md:w-1/2 my-5 mt-5 p-5 pt-0 h-auto overflow-y-auto">
			{/* product general information */}
			<h1 className="text-zinc-900 text-[25px] mb-2 font-semibold font-['Poppins'] leading-normal">
				{singleProduct?.title}{" "}
			</h1>
			<p className=" text-zinc-800 text-[15px] font-normal font-['Poppins'] leading-7 tracking-tight">
				{singleProduct?.shortDescription}
			</p>

			{/* button section */}
			<div className="flex my-7 items-center flex-row">
				<h3 className="text-zinc-900 md:block hidden text-3xl font-bold font-['Poppins'] leading-[30.89px]">
					$ {singleProduct?.price}
				</h3>
				<h3 className="text-zinc-900  md:hidden inline-block md:text-3xl font-bold text-xl font-['Poppins'] leading-[30.89px]">
					$ {singleProduct?.price}
				</h3>
				<div className="ml-0 md:ml-5 lg:ml-10">
					<button className="flex items-center justify-center px-10 lg:px-16 py-4 bg-orange-600 rounded-[65.36px]">
						<FaCartPlus className="w-4 h-4 text-white" />
						<strong className="ml-2 text-sm md:text-base text-white ">
							Buy Now
						</strong>
					</button>
				</div>
			</div>
			{/* product specification */}
			<h4 className="text-neutral-400 text-[15px] mb-[10px] font-medium font-['Poppins'] leading-normal tracking-tight">
				Specifications
			</h4>
			<table className="mb-[40px]">
				{singleProduct?.specification?.map((item) => (
					<tr key={item.id} className="py-1">
						<td className="pr-4 leading-6">{item.name}</td>
						<td className="text-sm text-[#666666] leading-6">{item.value}</td>
					</tr>
				))}
			</table>
			{/* product description */}
			<h4 className="text-neutral-400 text-[15px] mb-[10px] font-medium font-['Poppins'] leading-normal tracking-tight">
				Description
			</h4>
			<ul className="ml-5 list-disc">
				{singleProduct?.descriptions?.map((item) => {
					return (
						<li className="mt-2" key={item.id}>
							{item.description}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductDetailsRightSide;
