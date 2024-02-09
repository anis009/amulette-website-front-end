import ProductDetailsLeftSide from "../components/ProductDetailsPage/ProductDetailsLeftSide";
import ProductDetailsRightSide from "../components/ProductDetailsPage/ProductDetailsRightSide";

const ProductDetailsPage = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 px-3 p-5">
			<ProductDetailsLeftSide />
			<ProductDetailsRightSide />
		</div>
	);
};

export default ProductDetailsPage;
