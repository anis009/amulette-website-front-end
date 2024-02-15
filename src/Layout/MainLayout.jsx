import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";

const MainLayout = (props) => {

	return (
		<div className="font-Poppins mb-[-100px]">
			<Header {...props} />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
