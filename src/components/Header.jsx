import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header_content">
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/proyecto"> Proyecto </NavLink>
          <NavLink to="/contacto"> Contacto </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
