import ProductDetailsLeftSide from "../components/ProductDetailsPage/ProductDetailsLeftSide";
import ProductDetailsRightSide from "../components/ProductDetailsPage/ProductDetailsRightSide";
// max-w-amulette flex flex-col md:flex-row gap-5 p-5 h-auto md:h-[100%]
const ProductDetailsPage = () => {
	return (
		<div className=" max-w-amulette flex flex-col md:flex-row gap-x-5 px-2 py-6 md:p-5 h-auto md:h-[100%]">
			{/* <div className="y-scroll flex flex-col md:flex-row gap-5 p-5 "> */}
				<ProductDetailsLeftSide />
				<ProductDetailsRightSide />
			{/* </div> */}
			
		</div>
	);
};

export default ProductDetailsPage;
