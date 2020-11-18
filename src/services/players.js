const getPlayersInGame = () => {
  const playersInGameLocal = sessionStorage.getItem('playersInGame');
  return playersInGameLocal ? JSON.parse(playersInGameLocal) : [];
};

const setPlayersInGameLocal = playersInGame =>
  sessionStorage.setItem('playersInGame', JSON.stringify(playersInGame));

export default {
  getPlayersInGame,
  setPlayersInGameLocal,
};
