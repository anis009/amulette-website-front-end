import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/constant-data";
import React from "react";
// transition-all duration-1000 ease-in-out 
const MobileMenu = ({isMobileMenuOpen,setIsMobileMenuOpen}) => {
  return (
    <div className={`mobile-menu-wrapper overflow-hidden transform lg:hidden z-50 ${isMobileMenuOpen ? 'mobile-nav-open' : 'mobile-nav-close'}`}>
      <div className="mobile-menu">
        <ul className="h-full flex flex-col items-center justify-center space-y-12 text-lg py-10 relative">
          {/* <li className=''><NavLink to='/' className=''>Home</NavLink></li>
                <li className=''><NavLink to='/photos-library' className=''>Photo Gallery</NavLink></li>
                <li className=''><NavLink to='/products' className=''>Products</NavLink></li>
                <li className=''><NavLink to='/get-the-app' className=''>Get The Appp</NavLink></li>
                <li className=''><NavLink to='/contact-us' className=''>Contact Us</NavLink></li> */}
          {menuItems.map((item) => {
            return (
              <li key={item.id} className="">
                <NavLink  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "active-header relative text-primaryColor"
                      : "inactive-header"
                  }
                  to={item.path}
                >
                  {item.name}
                  <span className=" bottom-[-4px]   w-[20px] mx-auto h-[3px] bg-primaryColor"></span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
