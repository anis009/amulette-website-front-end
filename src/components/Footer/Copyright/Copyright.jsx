import React from "react";

const Copyright = () => {
	return (
		<div className="copyright-wrapper custom-container pb-10 ">
			<div className="copyright  flex flex-col lg:flex-row items-center justify-between px-10 lg:px-16  pt-5 pb--4 py-5 lg:py-9 mb--[102px] mx-auto lg:mx-auto lg:mt-16 bg-primaryColor rounded-2xl">
				<div className="copyright-text capitalize font-Montserrat text-xs lg:text-lg text-white text-center lg:text-left">
					© 2023 Amulette Limited. All rights reserved.
				</div>
				<div className="copyright-logo my-3 mt-5 lg:mt-0">
					<img
						src={"Images/Footer/Copyright-Logo.svg"}
						width={117}
						height={32}
						alt={"Amulette Logo"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Copyright;
