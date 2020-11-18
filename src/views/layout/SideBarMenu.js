import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarMenu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-home mr-3"></i>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add-player">
              <i className="fas fa-user-plus mr-3"></i>
              Add Player
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/games-history">
              <i className="fas fa-history mr-3"></i>
              Games History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              <i className="fas fa-sign-in-alt mr-3"></i>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBarMenu;
