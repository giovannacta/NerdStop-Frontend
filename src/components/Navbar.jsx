import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">Home</div>
      </NavLink>
      <NavLink to="/category/67bdb66445db6f2497e1262a" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">Games</div>
      </NavLink>
      <NavLink to="/category/67bdb65245db6f2497e12628" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">Consoles</div>
      </NavLink>
      <NavLink to="/category/67b8c9aa0384374b77dd2c89" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">Funko Pop!</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
