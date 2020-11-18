import React, { useContext } from "react";
import PlayersContext from "context/players/Context";
import Table from "components/Table";

const HomePage = () => {
  const { players } = useContext(PlayersContext);

  const playersColumn = [
    { path: "rank", label: "Rank" },
    { path: "name", label: "Navn" },
    { path: "wins", label: "Wins" },
    { path: "losses", label: "Losses" },
    { path: "gamesPlayed", label: "Games Played" },
  ];

  const playersData = players
    .sort((a, b) => b.winRate - a.winRate)
    .map((player, index) => ({ ...player, rank: index + 1 }));

  return (
    <div>
      <h1>This is the HomePage</h1>
      <Table columns={playersColumn} data={playersData} />
    </div>
  );
};

export default HomePage;
