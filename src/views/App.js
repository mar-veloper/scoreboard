import React, { useEffect, useState } from "react";

import Axios from "axios";

import { API_BASE_URL } from "../config.json";

function App() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    const { data: players } = await Axios(`${API_BASE_URL}/players`);
    return setPlayers(players);
  };

  useEffect(() => getPlayers(), []);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <>
        {players.map((player) => (
          <div>{player.name}</div>
        ))}
      </>
    </div>
  );
}

export default App;
