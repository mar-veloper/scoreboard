import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PlayersContext from 'context/players/Context';

const Header = () => {
  const { searchedPlayer, onChange } = useContext(PlayersContext);
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap px-1 shadow">
      <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 " to="/">
        AU - Scoreboard
      </NavLink>
      <input
        className="form-control w-100 mr-3"
        type="text"
        placeholder="Search player"
        aria-label="Search"
        value={searchedPlayer}
        onChange={onChange}
      />
    </nav>
  );
};

export default Header;
