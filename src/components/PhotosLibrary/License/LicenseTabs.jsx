import { useDispatch, useSelector } from "react-redux";
import { setLicense } from "../../../redux/features/photoLibrary";

const LicenseTabs = () => {
	const dispatch = useDispatch();
	const { license, category } = useSelector((state) => state.photo);

	return (
		<div className="license-tabs w-full flex flex-row items-center justify-between space-x-4 bg-[#FFEFE8] rounded-full px-2.5 py-1.5 mt-5">
			<div
				onClick={() => dispatch(setLicense("all"))}
				className={`tab-item all ${
					license === "all" ? "bg-primaryColor text-white" : ""
				} px-4 py-2 rounded-full cursor-pointer`}
			>
				All
			</div>
			<div
				onClick={() => dispatch(setLicense("free"))}
				className={`tab-item free ${
					license === "free" ? "bg-primaryColor text-white" : ""
				} px-4 py-2 rounded-full cursor-pointer`}
			>
				Free
			</div>
			<div
				onClick={() => dispatch(setLicense("premium"))}
				className={`tab-item premium ${
					license === "premium" ? "bg-primaryColor text-white" : ""
				} px-4 py-2 rounded-full cursor-pointer`}
			>
				Premium
			</div>
		</div>
	);
};

export default LicenseTabs;
