const getPlayersInGame = () => {
  const playersInGameLocal = localStorage.getItem('playersInGame');
  return playersInGameLocal ? JSON.parse(playersInGameLocal) : [];
};

const setPlayersInGameLocal = playersInGame =>
  localStorage.setItem('playersInGame', JSON.stringify(playersInGame));

export default {
  getPlayersInGame,
  setPlayersInGameLocal,
};
