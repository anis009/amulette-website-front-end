import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="font-Poppins mb-[-100px]">
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
