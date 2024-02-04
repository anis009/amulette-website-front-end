const ContactUs = () => {
	return (
		<div
			className="contact-us-wrapper pt-6 lg:pt-7"
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
					<div className="amulette-assist flex flex-row items-center justify-start bg-white border-[1px] border-[#D9D9D9] space-x-3 rounded-full px-2.5 py-2 mt-10">
						<span className="bg-primaryColor text-white font-semibold text-center text-xs sm:text-xs px-6 lg:px-10 py-1.5 rounded-full">
							Amulette
						</span>{" "}
						<span className=""> Is happy to assist you!</span>
					</div>
				</div>
				<div className="contact-form-row flex  flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between lg:space-x-[206px] lg:mt-[68px]">
					<div className="w-full lg:w-1/2 col-left">
						<img src="Images/ContactUs/Contact-Us-Img.svg" width={615} />
					</div>
					<div className="flex flex-row items-center justify-start w-full lg:w-1/2 col-right">
						<div className="flex flex-col items-start justify-start w-full space-y-3 contact-form">
							<div className="email-wrapper flex flex-col items-start justify-start w-full lg:w-[85%]">
								<label className="">
									Email
									<sup className="text-[#FF5551] font-semibold text-sm">*</sup>
								</label>
								<input
									className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] rounded-[10px]"
									type="email"
									name=""
									placeholder="example@gmail.com"
								/>
							</div>
							<div className="subject-wrapper flex flex-col items-start justify-start w-full lg:w-[85%]">
								<label className="">
									Subject
									<sup className="text-[#FF5551] font-semibold text-sm">*</sup>
								</label>
								<select className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] rounded-[10px]">
									<option disabled> select from here</option>
									<option value={"purchases"}> Purchases</option>
								</select>
							</div>
							<div className="message-wrapper flex flex-col items-start justify-start w-full lg:w-[85%]">
								<label className="">Message</label>
								<textarea
									rows={5}
									cols={90}
									className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] rounded-[10px]"
								></textarea>
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
