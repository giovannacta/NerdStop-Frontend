import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu, MdLogout } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const closeMenu = () => setMenuOpened(false);

  const { getTotalCartItems, user, logout } = useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 right-0 mx-auto max-w-screen-xl w-full ring-1 ring-slate-900/5 z-10 bg-white">
      <div className="flex items-center justify-between px-4 py-0 max-xs:px-2">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="logo" className="h-24 w-auto max-w[200px]" />
        </Link>

        
        <button onClick={toggleMenu} className="md:hidden p-2">
          {menuOpened ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>

        
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />

        
        {menuOpened && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <Navbar
              containerStyles={"flex flex-col items-center gap-4 py-4"}
              onClick={closeMenu}
            />
          </nav>
        )}

        <div className="flex items-center gap-x-4">
          {/* Cart */}
          <NavLink to="/cart" className="flex items-center relative">
            <IoMdCart className="p-1 h-8 w-8 ring-900/30 ring-1 rounded-full" />
            <span className="absolute -top-2 -right-2 flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14">
              {getTotalCartItems()}
            </span>
          </NavLink>

          {/* Admin Panel (only admins) */}
          {user && user.isAdmin && (
            <NavLink
              to="/admin"
              className="text-sm text-secondary font-semibold"
            >
              Admin Panel
            </NavLink>
          )}

          {/* User */}
          {user ? (
            <div className="flex items-center gap-2">
              
              <span className="text-gray-900 text-sm font-semibold hidden sm:block">
                {user.email}
              </span>
              <button
                onClick={logout}
                className="text-gray-900 bg-secondary p-1 ring-1 h-8 w-8 rounded-full"
              >
                <MdLogout size={20} />
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <FaRegUser className="h-5 w-5" />
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
