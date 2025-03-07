import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <header className="fixed top-0 left-0 right-0 mx-auto max-w-screen-xl w-full ring-1 ring-slate-900/5 z-10 bg-white">

      <div className="flex items-center justify-between px-4 py-0 max-xs:px-2">
        <div>
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-24 w-auto max-w[200px]"
              style={{ width: "200px", height: "100px", display: "flex" }}
            />
          </Link>
        </div>
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 x1:gap-x-1- medium-15"}
        />
        {/* MOBILE NAVBAR */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex flex-col items-start gap-y-6 fixed top-36 right-8 p-12 bg-white rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex flex-col items-start gap-y-6 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        <div className="flex items-center gap-x-4">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flex items-center gap-x-4">
            <NavLink to="/cart" className="flex items-center relative">
              <IoMdCart className="p-1 h-8 w-8 ring-900/30 ring-1 rounded-full" />
              <span className="absolute -top-2 -right-2 flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14">
                {getTotalCartItems()}
              </span>
            </NavLink>

            <NavLink
              to="/login"
              className="flex items-center justify-center text-black bg-secondary p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
            >
              <FaRegUser className="h-5 w-5" />
            </NavLink>

            {/* <NavLink
              to="/logout"
              className="flex items-center justify-center text-gray-900 bg-secondary p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
            >
              <MdLogout size={20} />
            </NavLink> */}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
