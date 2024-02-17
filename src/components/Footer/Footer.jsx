import React from "react";
import Copyright from "./Copyright/Copyright";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import StayWithUs from "./StayWithUs/StayWithUs";
const Footer = () => {
	// stay-with-us-wrapper 
	return (
		<div className="footer  mx-auto relative">
			<div className="stay-with-us-wrapper w-full mt-[50px] lg:mt-[74px] desktop absolute lg:static z-50 top-[-190px]">
				<StayWithUs />
			</div>
			<div className="footer-wrapper relative bg-[#25282B] pt-[60px] lg:pb-[60px] mb-0 mt-[140px] lg:mt-0">
				<div className="custom-container footer-main flex flex-col lg:flex-row items-center lg:items-start justify-between text-white">
					<DesktopFooter />
					<MobileFooter />
				</div>
				<Copyright />
			</div>
		</div>
	);
};

export default Footer;
