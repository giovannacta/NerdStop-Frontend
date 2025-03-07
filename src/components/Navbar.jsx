import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={"/"} className={({isActive}) => isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">Home</div>
      </NavLink>
      <NavLink to={"/games"} className={({isActive}) => isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">Games</div>
      </NavLink>
      <NavLink to={"/consoles"} className={({isActive}) => isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">Consoles</div>
      </NavLink>
      <NavLink to={"/funkopop"} className={({isActive}) => isActive ? "active_link" : ""}>
        <div className="flexCenter gap-x-1">Funko Pop!</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
