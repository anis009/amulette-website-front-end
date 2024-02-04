import { useMemo, useState } from "react";
import ProductCard from "../components/Home/OurProducts/ProductCard";
import { productsData } from "../components/Home/OurProducts/ProductData";
import { IoSearchSharp } from "react-icons/io5";
import ProductNotFound from "../components/ProductNotFound";
import { BsXCircle } from "react-icons/bs";
import ProductDetailsPage from "./ProductDetailsPage";
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
			<div className="product-page bg-[#FDFDFD] pt-6 lg:pt-7">
				<div className="containerr px--5 max-w-amulette px-amulette mx--auto products-wrapper">
					<h1 className="text-xl font-bold text-left lg:text-2xl">
						<span className="text-[#25282B]">Amulette</span>
						<span className="text-primaryColor"> Accessories</span>
					</h1>
					<p className="text-[#25282B] text-[12px] lg:text-sm font-normal text-left mt-4">
						Elevate Your Experience with Our Range of Stylish Accessories
					</p>
					<div className="flex flex-row items-center justify-between search-sort-wrapper space-x-7 mt-7">
						<div className="search-wrapper w-3/4 lg:w-full flex flex-row items-center justify-center space-x-2.5 border border-[#DADADA] rounded-full px-2 lg:px-4 py-2 lg:py-3.5">
							<IoSearchSharp className="text-primaryColor" />
							<input
								onChange={(e) => setProductSearchTitle(e.target.value)}
								type="text"
								value={productSearchTitle}
								className="w-full focus:border-0 indent-3 outline-none"
								placeholder="Search for product..."
							/>
						</div>
						<select
							value={sortOption}
							onChange={(e) => setSortOption(e.target.value)}
							className="w-1/4 lg:w-auto border border-primaryColor px-2 lg:px-5 py-2 lg:py-2.5  rounded-full"
						>
							<option disabled value="Sort by">
								Sort By: Price low to high
							</option>
							<option value="low-to-high">Price: Low to High</option>
							<option value="high-to-low">Price: High to Low</option>
						</select>
					</div>
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-9">
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
				<div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-[99999] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
					<div className="relative w-[90%] h-[90vh] overflow-y-auto  bg-white z-[9999] my-6 rounded-md mx-auto">
						<div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
							<div className="absolute top-2 right-2 ">
								<BsXCircle
									onClick={() => setShowModal(false)}
									className="w-5 h-5 text-red-600 cursor-pointer"
								/>
							</div>
						</div>
						<ProductDetailsPage  />
					</div>
				</div>
			)}
		</>
	);
};
export default ProductsPage;
