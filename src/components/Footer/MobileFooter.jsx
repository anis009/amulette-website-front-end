
const MobileFooter = () => {
  return (
    <div className="lg:hidden flex flex-col items-center justify-center pt-[136px] lg:pt-0">
      <div className="logo-desc flex flex-col items-center">
        <img
          className="mb-5"
          src={"Images/Footer/Footer-Logo.svg"}
          width={224}
          height={50}
          alt="Amulette logo"
        />
        <p className="font-Montserrat text-xs  px-5 font-normal leading-8 tracking-[0.129px] text-center">
        Express Yourself with Amulette.
A compact, stylish, and customizable badge that showcases your unique personality. 
        </p>
      </div>
      <div className="about-follow-us w-full px-11 flex flex-row items-center justify-between mt-9 mb-11">
        <div className="about-us">
          <h3 className="text-sm lg:text-2xl font-bold font-Montserrat text-primaryColor mb-3 lg:mb-9">
            About Us
          </h3>
          <ul className="flex flex-col items-start justify-start space-y-4 lg:space-y-6 text-xs lg:text-lg font-normal font-Montserrat">
            <li className="flex flex-row items-center justify-start space-x-3">
              <img
                className="lg:mr-4"
                src={"Images/Footer/Info.svg"}
                width={24}
                height={24}
                alt=""
              />
              <a href={""}>Legal</a>
            </li>
            <li className="flex flex-row items-center justify-start space-x-3">
              <img
                className="lg:mr-4"
                src={"Images/Footer/Enhanced-Security.svg"}
                width={24}
                height={24}
                alt=""
              />
              <a href={""}>Privacy Policy</a>
            </li>
            <li className="flex flex-row items-center justify-start space-x-3">
              <img
                className="lg:mr-4"
                src={"Images/Footer/Security.svg"}
                width={24}
                height={24}
                alt=""
              />
              <a href={""}>Terms And Condition</a>
            </li>
          </ul>
        </div>
        <div className="follow-us">
          <h3 className="text-sm lg:text-2xl font-bold font-Montserrat text-primaryColor mb-3 lg:mb-9">
            Follow Us
          </h3>
          <ul className="flex flex-col items-start justify-start space-y-4 lg:space-y-6 text-xs lg:text-lg font-normal font-Montserrat">
            <li className="flex flex-row items-center justify-start space-x-3">
              <img
                className="lg:mr-4"
                src={"Images/Footer/Facebook.svg"}
                width={24}
                height={24}
                alt=""
              />
              <a href={""}>Facebook</a>
            </li>
            <li className="flex flex-row items-center justify-start space-x-3">
              <img
                className="lg:mr-4"
                src={"Images/Footer/Twitter.svg"}
                width={24}
                height={24}
                alt=""
              />
              <a href={""}>Twitter</a>
            </li>
            <li className="flex flex-row items-center justify-start space-x-3">
              <img
                className="lg:mr-4"
                src={"Images/Footer/Instagram.svg"}
                width={24}
                height={24}
                alt=""
              />
              <a href={""}>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-us-wrapper w-full flex flex-row items-center justify-center">
      <div className="contact-us mb-11">
        <h3 className="text-sm lg:text-2xl font-bold font-Montserrat text-primaryColor mb-3 lg:mb-9">
          Contact Us
        </h3>
        <ul className="flex flex-col items-start justify-start  space-y-4 lg:space-y-6 text-xs lg:text-lg font-normal font-Montserrat">
          <li className="flex flex-row items-center justify-start space-x-3">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Call.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>+123 (315) 820-2008</a>
          </li>
          <li className="flex flex-row items-center justify-start space-x-3">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Message.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>info.amulette.com</a>
          </li>
          <li className="flex flex-row items-center justify-start space-x-3">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Location.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>Location, City</a>
          </li>
        </ul>
      </div>
      </div>

    </div>
  );
};

export default MobileFooter;
