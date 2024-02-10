import { useDispatch, useSelector } from "react-redux";
import { setLicense } from "../../../redux/features/photoLibrary";

const LicenseTabs = () => {
	const dispatch = useDispatch();
	const { license, category } = useSelector((state) => state.photo);

	return (
		<div className="license-tabs w-full flex flex-row items-center justify-between space-x-1 bg-[#FFEFE8] rounded-full px-2.5 py-1.5 mt-5 text-center">
			<div
				onClick={() => dispatch(setLicense("all"))}
				className={`tab-item all w-full ${
					license === "all" ? "bg-primaryColor text-white" : ""
				} text-xs text-center p-2 rounded-full cursor-pointer font-semibold`}
			>
				All
			</div>
			<div
				onClick={() => dispatch(setLicense("free"))}
				className={`tab-item free w-full ${
					license === "free" ? "bg-primaryColor text-white" : ""
				} text-xs text-center p-2 rounded-full cursor-pointer font-semibold`}
			>
				Free
			</div>
			<div
				onClick={() => dispatch(setLicense("premium"))}
				className={`tab-item premium w-full ${
					license === "premium" ? "bg-primaryColor text-white" : ""
				} text-xs text-center p-2 rounded-full cursor-pointer font-semibold`}
			>
				Premium
			</div>
		</div>
	);
};

export default LicenseTabs;
