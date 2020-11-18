import React, { useEffect, useState } from "react";
import Players from "./index";

import Axios from "axios";

import { API_BASE_URL } from "config.json";

const PlayersContextController = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    const { data: players } = await Axios(`${API_BASE_URL}/players`);
    return setPlayers(players);
  };

  useEffect(() => getPlayers(), []);

  const value = { name: "Jonmar", players };
  return (
    <Players.Context.Provider value={value}>
      {children}
    </Players.Context.Provider>
  );
};

export default PlayersContextController;
