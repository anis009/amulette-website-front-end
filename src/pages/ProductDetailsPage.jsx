import ProductDetailsLeftSide from "../components/ProductDetailsPage/ProductDetailsLeftSide";
import ProductDetailsRightSide from "../components/ProductDetailsPage/ProductDetailsRightSide";

const ProductDetailsPage = ({ setShowModal }) => {
	return (
		<div className=" max-w-amulette flex flex-col md:flex-row gap-x-0 px-2 pt-0 py-2 md:py-5 md:p-5 h-auto md:h-[100%]">
			{/* <div className="y-scroll flex flex-col md:flex-row gap-5 p-5 "> */}
			<ProductDetailsLeftSide setShowModal={setShowModal} />
			<ProductDetailsRightSide />
			{/* </div> */}

		</div>
	);
};

export default ProductDetailsPage;
