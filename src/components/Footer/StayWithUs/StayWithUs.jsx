import React from "react";
const StayWithUs = () => {
	// container stay-with-us max-w-amulette lg:px-amulette mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#FFEFE8] rounded-2xl  py-8 lg:py-14 px-5 lg:px--16
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
			className="py-8 lg:pb-16 bg-none lg:bg-[url('Images/StayWithUs/Stay-With-Us.svg')]"
		>
			<div className="container stay-with-us max-w-amulette lg:px-amulette mx-auto   ">
				<div className="stay-with-us-inner flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#FFEFE8] rounded-2xl py-8 lg:py-14 px-10 lg:px-16 ">
					<div className="lg:w-1/2 w-full">
						<h1 className="text-[#1B1B1B] text-xl text-center lg:text-left  lg:text-4xl font-Poppins font-bold lg:font-semibold">
							Stay with us
						</h1>
						<p className="text-[#1B1B1B] font-Poppins lg:text-left text-center text-sm lg:text-lg font-normal mt-3 sm:pl-0 pl-2 mb-5 lg:mb-0">
							Subscribe and be ready for an amazing experience
						</p>
					</div>
					<div className="lg:w-1/2 w-full flex content-center lg:content-end self-center lg:self-end justify-center lg:justify-end mt-5 lg:mt-0">
						<div className="email-subscribe w-auto rounded-lg flex flex-row items-baseline justify-end content-end space-x-3 p-1.5 bg-white ">
							<input
								className="border-collapse  focus:border-collapse px-4 py-3 rounded-md"
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
