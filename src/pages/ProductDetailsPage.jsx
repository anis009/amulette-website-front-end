import ProductDetailsLeftSide from "../components/ProductDetailsPage/ProductDetailsLeftSide";
import ProductDetailsRightSide from "../components/ProductDetailsPage/ProductDetailsRightSide";

const ProductDetailsPage = () => {
	return (
		<div className="flex flex-col items-center justify-between gap-3 px-3 py-5 md:flex-row">
			<ProductDetailsLeftSide />
			<ProductDetailsRightSide />
		</div>
	);
};

export default ProductDetailsPage;
