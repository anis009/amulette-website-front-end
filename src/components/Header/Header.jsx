/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
// import { menuItems } from "../../constants/constant-data";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCaretDown } from "react-icons/ai";

import DesktopHeader from "./DesktopHeader";
import { useEffect, useLayoutEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";

const Header = ({ librayFilterOpen, setLibrayFilterOpen }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [lang, setLang] = useState("english");

	const [windowWidth, setWindowWidth] = useState(0);

	// scroll to the top at every path changes
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isMobileMenuOpen]);

	useLayoutEffect(() => {
		const updateSize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		// console.log('windowWidth: ', windowWidth)767
	}, [windowWidth]);

	// shadow-md
	return (
		<div
			className={`header-wrapper z-[150] sticky top-0 left-0 bg-white select-none shadow-[0px_3px_10px_2px_#0000000A]  ${
				isMobileMenuOpen ? " h-svh" : ""
			}`}
		>
			<DesktopHeader />
			<div className="flex flex-row items-center justify-between py-4 mobile-header custom-container lg:hidden">
				{windowWidth < 768 && librayFilterOpen ? (
					<div
						className="col-left"
						onClick={(e) => {
							setLibrayFilterOpen(false);
						}}
					>
						<img src="Images/Header/sidebar-back-icon.svg" alt="" />
					</div>
				) : (
					<div
						className="col-left"
						onClick={(e) => {
							console.log("header-icon: ", e.target);
							setIsMobileMenuOpen(!isMobileMenuOpen);
						}}
					>
						{isMobileMenuOpen && (
							<IoCloseSharp
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								size={26}
							/>
						)}
						{!isMobileMenuOpen && <RiMenu5Fill size={26} />}
					</div>
				)}

				<div className="col-middle menu-items">
					<img src="Images/Header/Logo.svg" />
				</div>
				<div className="col-right">
					<div className="flex flex-row items-center justify-center cart-lang">
						<div className="flex flex-row items-center justify-center cart-wrapper">
							{/* <span className="mr-1 text-lg font-semibold text-primaryColor font-Poppins">
							Cart
						</span>
						<img src="Images/Header/Cart.svg" /> */}
						</div>
						<div className="relative flex items-center px-2 py-2 border border-primaryColor rounded-3xl ">
							<img
								src={
									lang === "english"
										? "/Images/Header/us.png"
										: "/Images/Header/bd.png"
								}
								className="w-6 h-6 rounded-full"
								alt=""
							/>
							<select
								value={lang}
								onChange={(e) => setLang(e.target.value)}
								className="px-2 pr-5 bg-white outline-none appearance-none lang rounded-3xl"
							>
								<option selected className="m-2" value="english">
									Eng
								</option>
								<option value="bangla">Bn</option>
							</select>
							<AiOutlineCaretDown className="absolute right-2 top-[50%] translate-y-[-50%]" />
						</div>
					</div>
				</div>
			</div>
			{/* {isMobileMenuOpen && ( */}
			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
			/>
			{/* )} */}
		</div>
	);
};

export default Header;
