// import { NavLink } from "react-router-dom";
// import { menuItems } from "../../constants/constant-data";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import DesktopHeader from "./DesktopHeader";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import React from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [lang, setLang] = useState("english");
	return (
		<div className="header-wrapper z-50 sticky top-0 left-0 bg-white shadow-md select-none">
			<DesktopHeader />
			<div className="mobile-header lg:hidden flex flex-row items-center justify-between px-5 py-4 shadow-md">
				<div
					className="col-left"
					onClick={(e) => {
						console.log('header-icon: ', e.target)
						setIsMobileMenuOpen(!isMobileMenuOpen)
					}}
				>
					{isMobileMenuOpen && (
						<IoCloseSharp
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							size={26}
						/>
					)}
					{!isMobileMenuOpen && (
						<RiMenu5Fill
							
							size={26}
						/>
					)}
				</div>
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
						<div className="border flex items-center px-2 border-primaryColor py-2 rounded-3xl ">
							<img
								src={
									lang === "english"
										? "../../../public/Images/Header/us.png"
										: "../../../public/Images/Header/bd.png"
								}
								className="w-6 h-6 rounded-full"
								alt=""
							/>
							<select
								value={lang}
								onChange={(e) => setLang(e.target.value)}
								className="lang outline-none px-2 rounded-3xl"
							>
								<option selected className="m-2" value="english">
									Eng
								</option>
								<option value="bangla">Bn</option>
							</select>
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
