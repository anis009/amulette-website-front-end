import React from "react";

const ContactUs = () => {
	return (
		<div
			className="contact-us-wrapper pt-10 lg:pt-16"
			style={{
				backgroundImage:
					"linear-gradient(180deg, rgba(246, 95, 25, 0.10) 0%, rgba(246, 95, 25, 0.01) 100%)",
			}}
		>
			<div className="containerr max-w-amulette lg:px-amulette mx-auto contact-us flex flex-col items-center justify-center px-5 lg:px--0">
				<h1 className="text-center font-Poppins text-xl lg:text-[40px] font-bold">
					Contact Us for any Queries
				</h1>
				<div className="flex flex-row items-center justify-center amulette-assist-wrapper">
					<div className="amulette-assist flex flex-row items-center justify-start bg-white border-[1px] border-[#D9D9D9] space-x-3 rounded-full px-2.5 py-2 mt-10 pr-5">
						<span className="bg-primaryColor text-white font-semibold text-center px-6 lg:px-10 py-1.5 rounded-[50px]">
							Amulette
						</span>{" "}
						<span className=""> Is happy to assist you!</span>
					</div>
				</div>
				<div className="contact-form-row w-full flex  flex-col lg:flex-row items-center lg:mt-[68px]">
					<div className="h-full w-full lg:w-1/2 col-left my-10 lg:my-0 lg:pr-10 xl:pr-20 text-center">
						<img src="Images/ContactUs/Contact-Us-Img.svg" width={615} className="mx-auto"/>
					</div>
					<div className="flex flex-row items-center justify-start w-full lg:w-1/2 col-right lg:pl-10 xl:pl-20">
						<div className="flex flex-col items-start justify-start w-full space-y-3 contact-form">
							<div className="email-wrapper flex flex-col items-start justify-start w-full">
								<label className="">
									Email
									<sup className="text-[#FF5551] font-semibold text-sm">*</sup>
								</label>
								<div className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] bg-white rounded-[10px] flex space-x-3">
									<img src="Images/ContactUs/mail.svg" width={20} />
									<input
										className="w-full focus:outline-none"
										type="email"
										name=""
										placeholder="example@gmail.com"
									/>
								</div>
								
							</div>
							<div className="subject-wrapper flex flex-col items-start justify-start w-full">
								<label className="">
									Subject
									<sup className="text-[#FF5551] font-semibold text-sm">*</sup>
								</label>
								<div className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] bg-white rounded-[10px] flex space-x-3">
									<img src="Images/ContactUs/bar_chart.svg" width={20} />
									<select className="w-full bg-white">
										<option disabled>Select from here</option>
										<option value={"purchases"}>Purchases</option>
									</select>
								</div>
							</div>
							<div className="message-wrapper flex flex-col items-start justify-start w-full">
								<label className="">Message</label>
								<div className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] bg-white rounded-[10px] flex space-x-3 items-start">
									<img src="Images/ContactUs/chat.svg" className="mt-1" width={20} />
									<textarea
										rows={5}
										className="w-full focus:outline-none"
										placeholder="Type Here"
									></textarea>
								</div>
							</div>
							<div className="pt-2 button-wrapper lg:pb-0 pb-5">
								<button
									style={{
										boxShadow:
											"3.045px 10.15px 22.855px 0px rgba(246, 95, 25, 0.10)",
									}}
									className="text-white bg-primaryColor text-[12px] lg:text-lg font-Poppins font-medium px-11 lg:px-20 py-2.5 lg:py-3.5 rounded-lg"
								>
									Submit Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
