
import React from "react";

const DesktopFooter = () => {
  return (
    <div className="hidden lg:flex flex-row items-start justify-between">
      <div className="logo-desc lg:w-1/3 flex flex-col items-center lg:items-start lg:justify-center">
        <img
          className="mb-5"
          src={"Images/Footer/Footer-Logo.svg"}
          width={168}
          height={55}
          alt="Amulette logo"
        />
        <p className="font-Poppins text-xs lg:text-lg px-5 lg:px-0 font-normal leading-8 tracking-[0.129px]">Express Yourself with Amulette.
A compact, stylish, and customizable badge that showcases your unique personality. 
        </p>
      </div>
      <div className="about-us">
        <h3 className="text-2xl font-bold font-Montserrat text-primaryColor mb-9">
          About Us
        </h3>
        <ul className="flex flex-col items-start justify-start space-y-6 text-lg font-normal font-Montserrat">
          <li className="flex flex-row items-center justify-start">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Info.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>Legal</a>
          </li>
          <li className="flex flex-row items-center justify-start">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Enhanced-Security.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>Privacy Policy</a>
          </li>
          <li className="flex flex-row items-center justify-start">
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
      <div className="contact-us">
        <h3 className="text-2xl font-bold font-Montserrat text-primaryColor mb-9">
          Contact Us
        </h3>
        <ul className="flex flex-col items-start justify-start space-y-6 text-lg font-normal font-Montserrat">
          <li className="flex flex-row items-center justify-start">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Call.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>+123 (315) 820-2008</a>
          </li>
          <li className="flex flex-row items-center justify-start">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Message.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>info.amulette.com</a>
          </li>
          <li className="flex flex-row items-center justify-start">
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
      <div className="follow-us">
        <h3 className="text-2xl font-bold font-Montserrat text-primaryColor mb-9">
          Follow Us
        </h3>
        <ul className="flex flex-col items-start justify-start space-y-6 text-lg font-normal font-Montserrat">
          <li className="flex flex-row items-center justify-start">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Facebook.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>Facebook</a>
          </li>
          <li className="flex flex-row items-center justify-start">
            <img
              className="lg:mr-4"
              src={"Images/Footer/Twitter.svg"}
              width={24}
              height={24}
              alt=""
            />
            <a href={""}>Twitter</a>
          </li>
          <li className="flex flex-row items-center justify-start">
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
  );
};

export default DesktopFooter;
