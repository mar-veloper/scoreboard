import React, { useEffect, useState } from 'react';
import Players from './index';

import { API_BASE_URL } from 'config.json';

import playerService from 'services/players';
import useSWR from 'swr';

const PlayersContextController = ({ children }) => {
  const [searchedPlayer, setSearchedPlayer] = useState('');
  const [playersInGame, setPlayersInGame] = useState(
    playerService.getPlayersInGame()
  );

  const { data: players } = useSWR(`${API_BASE_URL}/players`);

  useEffect(() => playerService.setPlayersInGameLocal(playersInGame), [
    playersInGame,
  ]);

  const handleOnChange = e => setSearchedPlayer(e.currentTarget.value);

  const reg = { players, playersInGame, searchedPlayer };

  const funcValue = { setPlayersInGame, onChange: handleOnChange };

  return (
    <Players.Context.Provider value={{ ...reg, ...funcValue }}>
      {children}
    </Players.Context.Provider>
  );
};

export default PlayersContextController;
