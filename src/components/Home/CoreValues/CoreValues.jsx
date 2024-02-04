import React from "react";

const CoreValues = () => {
	return (
		<div
			className=" lg:py-[62px] w-full lg:mt-[62px]"
			style={{
				background: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('Images/CoreValues/Core-Value-Without-Overlay.png') center / cover no-repeat`,
			}}
		>
			<div className=" containerr max-w-amulette lg:px-amulette mx-auto flex flex-col items-center justify-center pt-7 lg:pt-[60px] pb-8 lg:pb-[66px] px-5 lg:px--0">
				<h3 className="title text-white font-semibold text-xl lg:text-[40px]">
					Our Core Values
				</h3>
				<p className="desc text-white text-[12px] lg:text-xl font-normal leading-9 mt-7 text-center">
					Essence of Excellence: Nurturing Integrity, Driving Innovation,
					Fostering Collaboration in Every Interaction.
				</p>
				<div className="h-[1px] w-full bg-white mt-11"></div>
				<div className="three-cols-wrapper flex flex-col lg:flex-row items-center justify-center lg:mt-[60px]">
					<div className="col-left flex flex-col items-center justify-center space-y-6">
						<h3 className="text-white text-center text-lg lg:text-[22px] font-semibold">
							Integrity
						</h3>
						<img src="Images/CoreValues/Integrity.svg" alt="" />
						<div className="desc text-white text-center text-sm lg:text-lg font-normal leading-9">
							Securing your memories with trust. Our app ensures privacy and
							accountable data handling
						</div>
					</div>
					<div className="col-middle flex flex-col items-center justify-center space-y-6">
						<h3 className="text-white text-center text-lg lg:text-[22px] font-semibold">
							Innovation
						</h3>
						<img src="Images/CoreValues/Innovation.svg" alt="" />
						<div className="desc text-white text-center text-sm lg:text-lg font-normal leading-9">
							Amulette pioneers wearable tech. The app evolves with cutting-edge
							features for seamless connectivity.
						</div>
					</div>
					<div className="col-right flex flex-col items-center justify-center space-y-6">
						<h3 className="text-white text-center text-lg lg:text-[22px] font-semibold">
							Collaboration
						</h3>
						<img src="Images/CoreValues/Collaboration.svg" alt="" />
						<div className="desc text-white text-center text-sm lg:text-lg font-normal leading-9">
							Connect and create memories. Amulette fosters digital
							collaboration, enhancing shared experiences
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
