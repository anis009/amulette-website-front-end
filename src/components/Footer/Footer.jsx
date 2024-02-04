import Copyright from "./Copyright/Copyright";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import StayWithUs from "./StayWithUs/StayWithUs";
const Footer = () => {
	return (
		<div className="footer  mx-auto">
			<div className="stay-with-us-wrapper desktop hidden lg:block">
				<StayWithUs />
			</div>
			<div className="footer-wrapper relative bg-[#25282B] lg:pt-[60px] lg:pb-[60px] mb-0">
				<div className="containerr max-w-amulette lg:px-amulette mx-auto px-0 footer-main flex flex-col lg:flex-row items-center lg:items-start justify-between text-white">
					<DesktopFooter />
					<MobileFooter />
				</div>
				<Copyright />
			</div>
		</div>
	);
};

export default Footer;
