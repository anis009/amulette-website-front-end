import React from "react";
const StayWithUs = () => {
	
	return (
		<div
			style={{
				// backgroundImage: "",
				backgroundPosition: "bottom left",
				width: "100%",
				// height: "400px", // Adjust the height as needed

				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
			className="py-8 lg:pb-16 bg-none lg:bg-[url('/Images/StayWithUs/Stay-With-Us.svg')]"
		>
			<div className="stay-with-us custom-container ">
				<div className="stay-with-us-inner flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#FFEFE8] rounded-2xl py-5 sm:py-8 lg:py-14 px-5 sm:px-10 lg:px-16 ">
					<div className="lg:w-1/2 w-full">
						<h1 className="text-[#1B1B1B] text-xl text-center lg:text-left  lg:text-4xl font-Poppins font-bold lg:font-semibold">
							Stay with us
						</h1>
						<p className="text-[#1B1B1B] font-Poppins lg:text-left text-center text-sm lg:text-lg font-normal mt-3 sm:pl-0 pl-2 sm:mb-5 lg:mb-0">
							Subscribe and be ready for an amazing experience
						</p>
					</div>
					<div className="lg:w-1/2 flex lg:content-end lg:self-end lg:justify-end mt-5 lg:mt-0">
						<div className="email-subscribe w-full max-w-full rounded-lg flex flex-col sm:flex-row sm:items-baseline sm:justify-end sm:content-end sm:space-x-3 p-2 sm:pr-3 space-y-3 sm:space-y-0 bg-white ">
							<input
								className="border-collapse focus:outline-none focus:border-collapse px-4 py-3 rounded-md w-full"
								type="email"
								placeholder="Enter email address"
							/>
							<button className="py-2 px-10  font-medium text-white border border-primaryColor bg-primaryColor sm:text-base rounded-lg text-[12px]">
								Continue
							</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default StayWithUs;
