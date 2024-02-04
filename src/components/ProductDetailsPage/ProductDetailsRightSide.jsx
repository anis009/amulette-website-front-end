import React from "react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductDetailsRightSide = () => {

	const {singleProduct}=useSelector((state)=>state.product )
	return (
		<div className="w-1/2 md:mt-0 mt-5 p-5 space-y-5 overflow-y-auto">
			{/* product general information */}
			<h1 className="text-zinc-900 text-[25px] mb-[23px] font-semibold font-['Poppins'] leading-normal">
				{singleProduct?.title}{" "}
			</h1>
			<p className=" text-zinc-800 mb-[34px] text-[15px] font-normal font-['Poppins'] leading-7 tracking-tight">
			{singleProduct?.shortDescription}
			</p>
			<h3 className="text-zinc-900 mb-[44px] md:block hidden text-3xl font-bold font-['Poppins'] leading-[30.89px]">
				$ {singleProduct?.price}
			</h3>
			{/* button section */}
			<div className="flex items-center mb-[40px] md:justify-start justify-between flex-row">
				<div className="w-[210.10px] h-[61px] md:flex hidden items-center justify-between px-5  bg-neutral-50 rounded-[500px] shadow-inner">
					<button>
						<FaMinus className="w-4 h-4" />
					</button>
					<p>0</p>
					<button>
						<FaPlus className="w-4 h-4" />
					</button>
				</div>
				<h3 className="text-zinc-900  md:hidden inline-block md:text-3xl font-bold text-xl font-['Poppins'] leading-[30.89px]">
					$ {singleProduct?.price}
				</h3>
				<div className="ml-0 md:ml-10">
					<button className="md:w-[237.90px] w-[200px] flex items-center justify-center px-5 md:h-[61px] h-[50px] bg-orange-600 rounded-[65.36px]">
						<FaCartPlus className="w-4 h-4 text-white" />
						<strong className="ml-2 text-base text-white md:text-lg">
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
				{singleProduct?.specifications?.map((item) => (
					<tr key={item.id}>
						<td className="pr-4">{item.name}</td>
						<td>{item.value}</td>
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
