/* eslint-disable react/prop-types */
import { Player } from "@lottiefiles/react-lottie-player";
import lottflies from "../../../assets/lottieflies/Flow 8.json";
const AmuletteServiceCard = ({ service, index }) => {
	return (
		<div className="flex flex-col items-center justify-center mb-10 service-card lg:mb-0 relative">
			{/* <img src={`${service.image}`} alt={service.title} /> */}

			<div className="relative ">
				<Player
					autoplay
					loop
					src={service.src}
					style={{ height: "300px", width: "300px" }}
				></Player>

				{index === 0 && (
					<Player
						autoplay
						loop
						src={lottflies}
						style={{
							height: "120px",
							width: "120px",
							position: "absolute",
							bottom: 0,
							right: 80,
						}}
					></Player>
				)}
			</div>
			<img src={service.image} alt="" className="my-[10px]" />
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
