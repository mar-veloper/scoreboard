import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap px-1 shadow">
      <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 " to="/">
        Among Us Scoreboard
      </NavLink>
      <input
        className="form-control w-100 mr-3"
        type="text"
        placeholder="Search player"
        aria-label="Search"
      />
    </nav>
  );
};

export default Header;
