/* eslint-disable react/prop-types */
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const AmuletteServiceCard = ({ service }) => {
	return (
		<div className="flex flex-col items-center justify-center mb-10 service-card lg:mb-0">
			{/* <img src={`${service.image}`} alt={service.title} /> */}
			<Player
				autoplay
				loop
				src={service.src}
				style={{ height: "300px", width: "300px" }}
			>
				{/* <Controls
					visible={true}
					buttons={["play", "repeat", "frame", "debug"]}
				/> */}
			</Player>
			<h2 className="mt-3 text-lg font-semibold text-center text-black lg:text-xl xl:text-2xl">
				{service.title}
			</h2>
			<p className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-5 lg:leading-7 xl:leading-9 mt-2.5">
				{service.description}
			</p>
		</div>
	);
};

export default AmuletteServiceCard;
