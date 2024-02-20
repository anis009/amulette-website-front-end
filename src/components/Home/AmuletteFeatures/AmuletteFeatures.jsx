// import React from "react";
import AmuletteServiceCard from "./AmuletteServiceCard";
import lottieFiles1 from "../../../assets/lottieflies/Flow 1.json";
import lottieFiles2 from "../../../assets/lottieflies/Flow 6.json";
import lottieFiles3 from "../../../assets/lottieflies/Flow 3.json";

const AmuletteFeatures = () => {
	const amuletteServices = [
		{
			title: "Connect with Ease",
			description:
				"Seamless Bluetooth pairing with our Amulette app. Connect and share moments effortlessly",
			image: "Images/AmuletteFeatures/Ease.svg",
			src: lottieFiles1,
		},
		{
			title: "Display Your Personality",
			description:
				"Wearable, compact, and customizable – let your style shine with Amulette",
			image: "Images/AmuletteFeatures/Personality.svg",
			src: lottieFiles2,
		},
		{
			title: "Share and Explore",
			description:
				"Share images with friends and create lasting memories. Explore a world of creativity together",
			image: "Images/AmuletteFeatures/Explore.svg",
			src: lottieFiles3,
		},
	];

	return (
		<div
			style={{ backgroundColor: "rgba(246, 95, 25, 0.10)" }}
			className="amulette-service-wrapper py-14"
		>
			<div className="amulette-service custom-container">
				<h1 className="text-xl lg:text-[40px] font-semibold font-Poppins text-center">
					<span className="text-primaryColor">Amulette </span>
					<span className="">Features</span>
				</h1>
				<p
					style={{ color: "color: rgba(0, 0, 0, 0.80)" }}
					className="mt-4 mb-10 text-sm font-normal text-center about-feature sm:text-base lg:text-xl text-menuColor lg:mb-0"
				>
					Empowering individuals to express themselves creatively through
					wearable technology.
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-[60px]">
					{amuletteServices?.map((service, index) => (
						<AmuletteServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AmuletteFeatures;
