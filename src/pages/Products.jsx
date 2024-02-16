import { useMemo, useState } from "react";
import ProductCard from "../components/Home/OurProducts/ProductCard";
import { productsData } from "../components/Home/OurProducts/ProductData";
import { IoSearchSharp } from "react-icons/io5";
import ProductNotFound from "../components/ProductNotFound";
import { BsXCircle } from "react-icons/bs";
import ProductDetailsPage from "./ProductDetailsPage";
import React from "react";
import { PiCaretDownBold  } from "react-icons/pi";
import ProductDetailsModal from "./ProductDetailsModal";
const ProductsPage = () => {
	const [productSearchTitle, setProductSearchTitle] = useState("");
	const [sortOption, setSortOption] = useState("");
	const [showModal, setShowModal] = useState(false);
	const filteredProducts = useMemo(() => {
		let filtered = productsData.filter((product) =>
			product.title.toLowerCase().includes(productSearchTitle.toLowerCase())
		);

		if (sortOption === "low-to-high") {
			filtered.sort((a, b) => a.price - b.price);
		} else if (sortOption === "high-to-low") {
			filtered.sort((a, b) => b.price - a.price);
		}

		return filtered;
	}, [productSearchTitle, sortOption]);

	return (
		<>
			<div className="product-page bg-[#FDFDFD] pt-6 lg:pt-7 mx-auto">
				<div className="containerr px--5 max-w-amulette px-amulette mx-auto products-wrapper">
					<h1 className="text-xl font-bold text-left lg:text-2xl">
						<span className="text-[#25282B]">Amulette</span>
						<span className="text-primaryColor"> Accessories</span>
					</h1>
					<p className="text-[#25282B] text-[12px] lg:text-sm font-normal text-left mt-4">
						Elevate Your Experience with Our Range of Stylish Accessories
					</p>
					<div className="flex flex-row w-full search-sort-wrapper space-x-2 sm:space-x-5 lg:space-x-10 mt-7">
						<div className="search-wrapper w-2/3 flex flex-row items-center justify-center space-x-2 lg:space-x-2.5 border border-[#DADADA] rounded-full px-3 lg:px-4 py-2 lg:py-3.5">
							<IoSearchSharp className="text-primaryColor text-lg lg:text-2xl" />
							<input
								onChange={(e) => setProductSearchTitle(e.target.value)}
								type="text"
								value={productSearchTitle}
								className="w-full focus:border-0 lg:indent-1 outline-none"
								placeholder="Search for product..."
							/>
						</div>
						<div className="filter-wrapper w-1/3 relative">
							<select
								value={sortOption}
								onChange={(e) => setSortOption(e.target.value)}
								className="border border-primaryColor px-5 pr-8 py-2 lg:py-3.5 w-full rounded-full appearance-none"
							>
								{/* <option disabled value="Sort by">
									Sort By: Price low to high
								</option> */}
								<option value="low-to-high">Sort By: Price - Low to High</option>
								<option value="high-to-low">Sort By: Price - High to Low</option>
							</select>
							<PiCaretDownBold className="absolute right-2 sm:right-4 top-[50%] translate-y-[-50%]"/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-9">
						{filteredProducts.length > 0 &&
							filteredProducts?.map((data, index) => (
								<ProductCard 
									setShowModal={setShowModal}
									key={index}
									product={data}
									index={index}
								/>
							))}
					</div>
				</div>

				{filteredProducts.length <= 0 && <ProductNotFound />}
			</div>

			{showModal && (
				<ProductDetailsModal setShowModal={setShowModal} />
			)}
		</>
	);
};
export default ProductsPage;
