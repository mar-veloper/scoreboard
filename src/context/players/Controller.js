import React, { useEffect, useState } from 'react';
import Players from './index';

import Axios from 'axios';

import { API_BASE_URL } from 'config.json';

import playerService from 'services/players';

const PlayersContextController = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [playersInGame, setPlayersInGame] = useState(
    playerService.getPlayersInGame()
  );

  const getPlayers = async () => {
    const { data: players } = await Axios(`${API_BASE_URL}/players`);
    return setPlayers(players);
  };

  useEffect(() => getPlayers(), []);
  useEffect(() => playerService.setPlayersInGameLocal(playersInGame), [
    playersInGame,
  ]);

  const reg = { players, playersInGame };

  const funcValue = { setPlayers, setPlayersInGame };

  return (
    <Players.Context.Provider value={{ ...reg, ...funcValue }}>
      {children}
    </Players.Context.Provider>
  );
};

export default PlayersContextController;
