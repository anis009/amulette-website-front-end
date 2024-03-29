import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/constant-data";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DesktopHeader = () => {
  const [lang, setLang] = useState("english");
  const navigate = useNavigate();
  return (
    <div className="custom-container hidden lg:flex flex-row items-center justify-between py-6 header">
      <div onClick={() => navigate()} className="logo cursor-pointer">
        <img src="Images/Header/Logo.svg" alt="amulette logo" />
      </div>
      <div className="header-menu-items">
        <ul className="flex flex-row items-center justify-center space-x-5 xl:space-x-10 xl:text-lg font-semibold text-menuColor font-Poppins">
          {menuItems.map((item) => {
            return (
              <li key={item.id} className="">
                <NavLink
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
      <div className="flex flex-row items-center justify-center space-x-10 cart-lang">
        <div className="flex flex-row items-center justify-center cart-wrapper">
          {/* <span className="mr-1 text-lg font-semibold text-primaryColor font-Poppins">
							Cart
						</span>
						<img src="Images/Header/Cart.svg" /> */}
        </div>
        <div className="border flex items-center px-2 border-primaryColor py-2 rounded-3xl relative ">
          <img
            src={
              lang === "english"
                ? "/Images/Header/us.png"
                : "/Images/Header/bd.png"
            }
            className="w-6 h-6 rounded-full"
            alt=""
          />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="lang outline-none px-2 rounded-3xl bg-white appearance-none pr-5"
          >
            <option selected className="m-2 px-2" value="english">
              Eng
            </option>
            <option className="px-2" value="bangla">
              Bn
            </option>
          </select>
          <AiOutlineCaretDown className="absolute right-2 top-[50%] translate-y-[-50%]" />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
