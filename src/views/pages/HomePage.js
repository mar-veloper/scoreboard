import React, { useContext } from 'react';
import PlayersContext from 'context/players/Context';
import Table from 'components/Table';
import Button from 'components/common/Button';
import tableColumn from 'data/tableColumn/index';

const HomePage = () => {
  const { players } = useContext(PlayersContext);

  const playersData = players
    .sort((a, b) => b.winRate - a.winRate)
    .map((player, index) => ({
      ...player,
      winRate: `${player.winRate} %`,
      rank: index + 1,
    }));

  const addInGame = id => {
    console.log({ id });
  };

  const playersColumn = [
    ...tableColumn.home.players,
    {
      key: 'addInGame',
      content: ({ id }) => (
        <Button onClick={() => addInGame(id)}>Add In Game</Button>
      ),
    },
  ];

  return (
    <>
      <h1>Home</h1>
      <Table columns={playersColumn} data={playersData} />
    </>
  );
};

export default HomePage;
