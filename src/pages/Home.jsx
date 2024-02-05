import Hero from "../components/Home/Hero/Hero";
import ExperienceAmulette from "../components/Home/ExperinceAmulette/ExperienceAmulette";
import AmuletteFeatures from "../components/Home/AmuletteFeatures/AmuletteFeatures";
import OurProducts from "../components/Home/OurProducts/OurProducts";
import CoreValues from "../components/Home/CoreValues/CoreValues";
import DownloadApp from "../components/Home/DownloadApp/DownloadApp";
import ContactUs from "../components/Home/ContactUs/ContactUs";
import { useSelector } from "react-redux";
import React from "react";

const Home = () => {
	const { value } = useSelector((state) => state.counter);
	console.log("counter~", value);
	return (
		<div className="home-wrapper bg-[#FDFDFD] pt--7 overflow-hidden">
			<div className="mx-auto text-black home">
				<Hero />
				<ExperienceAmulette />
				<AmuletteFeatures />
				<OurProducts />
				<CoreValues />
				<DownloadApp />
				<ContactUs />
			</div>
		</div>
	);
};

export default Home;
