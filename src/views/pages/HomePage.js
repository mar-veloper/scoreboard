import React, { useContext } from 'react';
import PlayersContext from 'context/players/Context';
import Table from 'components/common/Table';
import Button from 'components/common/Button';
import tableColumn from 'data/tableColumn/index';
import getRank from 'helper/getRank';

const HomePage = () => {
  const isAdmin = false;

  const {
    players,
    searchedPlayer,
    playersInGame,
    setPlayersInGame,
  } = useContext(PlayersContext);

  const checkIfInGame = id => playersInGame.some(player => player.id === id);

  const checkIfImpostor = id =>
    playersInGame.some(player => player.id === id && player.isImpostor);

  const addInGame = player => {
    setPlayersInGame([
      ...playersInGame,
      {
        ...player,
        wins: 0,
        losses: 0,
        winRate: 0,
        gamesPlayed: 0,
        isImpostor: false,
      },
    ]);
  };

  const removePlayerInGame = id => {
    const player = playersInGame.find(player => player.id === id);
    const index = playersInGame.indexOf(player);

    setPlayersInGame([
      ...playersInGame.slice(0, index),
      ...playersInGame.slice(index + 1),
    ]);
  };

  const toggleIsImpostor = id => {
    const player = playersInGame.find(player => player.id === id);
    const index = playersInGame.indexOf(player);

    const modifiedPlayer = { ...player, isImpostor: !player.isImpostor };

    setPlayersInGame([
      ...playersInGame.slice(0, index),
      modifiedPlayer,
      ...playersInGame.slice(index + 1),
    ]);
  };

  const impostorPlayers = playersInGame.filter(({ isImpostor }) => isImpostor);
  const crewmatePlayers = playersInGame.filter(({ isImpostor }) => !isImpostor);

  const playersData = players
    .sort((a, b) => b.winRate - a.winRate)
    .map((player, index) => ({
      ...player,
      winRate: `${player.winRate} %`,
      rank: index + 1,
      rankTitle: getRank(index + 1),
    }));

  const filteredPlayersData = !searchedPlayer
    ? playersData
    : playersData.filter(({ name }) =>
        name.toLowerCase().includes(searchedPlayer.toLowerCase())
      );

  const playersInGameColumn = [
    {
      key: 'removePlayerInGame',
      content: player => (
        <Button
          className={`btn btn-outline-danger border-0`}
          onClick={() => removePlayerInGame(player.id)}
        >
          <i className="fas fa-user-times"></i>
        </Button>
      ),
    },
    ...tableColumn.home.playersInGame,
    {
      key: 'impostor',
      content: player =>
        impostorPlayers.length < 2 ? (
          <Button
            className={
              checkIfImpostor(player.id)
                ? `btn btn-outline-info`
                : `btn btn-danger`
            }
            onClick={() => toggleIsImpostor(player.id)}
          >
            {checkIfImpostor(player.id) ? 'Crewmate' : 'Impostor'}
          </Button>
        ) : checkIfImpostor(player.id) ? (
          <Button
            className={
              checkIfImpostor(player.id)
                ? `btn btn-outline-info`
                : `btn btn-danger`
            }
            onClick={() => toggleIsImpostor(player.id)}
          >
            {checkIfImpostor(player.id) ? 'Crewmate' : 'Impostor'}
          </Button>
        ) : (
          'Crewmate'
        ),
    },
  ];

  const playersColumn = [
    ...tableColumn.home.players,
    {
      key: 'addInGame',
      content: player =>
        isAdmin &&
        (playersInGame.length < 10 ? (
          <Button
            onClick={() => addInGame(player)}
            disabled={checkIfInGame(player.id)}
          >
            {checkIfInGame(player.id) ? 'In Game' : 'Add In Game'}
          </Button>
        ) : (
          'Game full'
        )),
    },
  ];

  return (
    <>
      {playersInGame.length > 0 && (
        <>
          <h2 className="mb-3">In Game</h2>
          <Table columns={playersInGameColumn} data={playersInGame} />
        </>
      )}
      <h2 className="mb-3">Players Rank</h2>
      <Table columns={playersColumn} data={filteredPlayersData} />
    </>
  );
};

export default HomePage;
