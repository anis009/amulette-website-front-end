const StayWithUs = () => {
	return (
		<div
			style={{
				backgroundImage: "url('Images/StayWithUs/Stay-With-Us.svg')",
				backgroundPosition: "bottom left",
				width: "100%",
				// height: "400px", // Adjust the height as needed

				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
			className="stay-with-us-wrapper w-full mt-[50px] lg:mt-[74px] py-8 lg:pb-16"
		>
			<div className="stay-with-us max-w-amulette sm:w-[80%] w-[95%] lg:px-amulette mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#FFEFE8] rounded-2xl px-5 lg:px--16 py-8 lg:py-14">
				<div className="lg:w-1/2 w-full">
					<h1 className="text-[#1B1B1B] text-xl text-center lg:text-left  lg:text-4xl font-Poppins font-bold lg:font-medium">
						Stay with us
					</h1>
					<p className="text-[#1B1B1B] font-Poppins lg:text-left text-center text-sm lg:text-lg font-normal mt-3 sm:pl-0 pl-2">
						Subscribe and be ready for an amazing experience
					</p>
				</div>
				<div className="lg:w-1/2 w-full">
					<div className="email-subscribe  flex flex-row items-center justify-center space-x-3 p-2.5">
						<input
							className="bg-white border-collapse  focus:border-collapse px-4 py-3 rounded-md"
							type="email"
							placeholder="Enter email address"
						/>
						<button className=" w-[104px]  py-3 px-4  font-medium text-white border border-primaryColor bg-primaryColor sm:text-base text-sm rounded-lg">
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StayWithUs;
