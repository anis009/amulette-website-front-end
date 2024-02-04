import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/constant-data";
import { useState } from "react";

const DesktopHeader = () => {
	const [lang, setLang] = useState("english");
	return (
		<div className="containerr max-w-amulette lg:px-amulette hidden lg:flex flex-row items-center justify-between py-6 mx-auto header">
			<div className="logo">
				<img src="Images/Header/Logo.svg" alt="amulette logo" />
			</div>
			<div className="header-menu-items">
				<ul className="flex flex-row items-center justify-center space-x-10 text-lg font-semibold text-menuColor font-Poppins">
					{menuItems.map((item) => {
						return (
							<li key={item.id} className="">
								<NavLink
									className={({ isActive }) =>
										isActive
											? "active-header relative text-primaryColor"
											: "inactive-header"
									}
									to={item.path}
								>
									{item.name}
									<span className=" bottom-[-4px]   w-[20px] mx-auto h-[3px] bg-primaryColor"></span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex flex-row items-center justify-center space-x-10 cart-lang">
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
	);
};

export default DesktopHeader;
