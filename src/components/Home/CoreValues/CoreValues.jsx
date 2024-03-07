import React from "react";

const CoreValues = () => {
	return (
		<div
			className=" lg:py-[62px] w-full lg:mt-[62px]"
			style={{
				background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('Images/CoreValues/Core-Value-Without-Overlay.png') center / cover no-repeat`,
			}}
		>
			<div className="custom-container flex flex-col items-center justify-center pt-7 lg:pt-[60px] pb-8 lg:pb-[66px] ">
				<h3 className="title text-white font-semibold text-xl lg:text-[40px] text-center lg:mb-10">
					Our Core Values
				</h3>
				<p className="desc text-white text-sm sm:text-base lg:text-xl font-normal leading-9 mt-5 lg:mt-7 text-center">
					Essence of Excellence: Nurturing Integrity, Driving Innovation,
					Fostering Collaboration in Every Interaction.
				</p>
				<div className="h-[1px] w-full bg-white my-7 lg:my-10"></div>
				<div className="three-cols-wrapper flex flex-col lg:flex-row items-center justify-center lg:mt-[30px] space-x-5 space-y-6 lg:space-y-0">
					<div className="col-left flex flex-col px-0 lg:px-5 py-3 lg:py-0 space-y-6">
						<h3 className="text-white text-center text-lg lg:text-[22px] font-semibold">
							Integrity
						</h3>
						<img src="Images/CoreValues/Integrity.svg" alt="" className="h-[100px]"/>
						<div className="desc text-white text-center text-sm lg:text-lg font-normal leading-6 lg:leading-9">
							Securing your memories with trust. Our app ensures privacy and
							accountable data handling
						</div>
					</div>
					<div className="col-middle flex flex-col px-0 lg:px-5 py-3 lg:py-0 space-y-6">
						<h3 className="text-white text-center text-lg lg:text-[22px] font-semibold">
							Innovation
						</h3>
						<img src="Images/CoreValues/Innovation.svg" alt="" className="h-[100px]"/>
						<div className="desc text-white text-center text-sm lg:text-lg font-normal leading-6 lg:leading-9">
							Amulette pioneers digital charm tech. Redefining Personalization with Cutting-Edge E-Paper Display Innovation.
						</div>
					</div>
					<div className="col-right flex flex-col px-0 lg:px-5 py-3 lg:py-0 space-y-6">
						<h3 className="text-white text-center text-lg lg:text-[22px] font-semibold">
							Collaboration
						</h3>
						<img src="Images/CoreValues/Collaboration.svg" alt="" className="h-[100px]"/>
						<div className="desc text-white text-center text-sm lg:text-lg font-normal leading-6 lg:leading-9">
							Connect and create memories. Amulette redefines the way we carry and share our personal stories.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
