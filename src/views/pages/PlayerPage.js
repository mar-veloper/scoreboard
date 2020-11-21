import React from 'react';
import useSWR from 'swr';

const PlayerPage = ({ match }) => {
  const { id } = match.params;
  const { data: player } = useSWR(`/api/players/${id}`);
  const cardsToRender = [
    { title: 'Wins', value: player?.wins, class: 'success' },
    { title: 'Losses', value: player?.losses, class: 'danger' },
    { title: 'Games Played', value: player?.gamesPlayed, class: 'dark' },
    { title: 'Win Rate', value: `${player?.winRate} %`, class: 'info' },
  ];
  return (
    <div>
      <h1>{player?.name}</h1>
      <h5 className="text-secondary">{player?.continent} 🥢</h5>
      <div className="d-flex justify-content-between mt-5">
        {cardsToRender.map(item => (
          <div
            key={item.title}
            className={`card text-white bg-${item.class} mb-3`}
            style={{ width: '10rem' }}
          >
            <div className="card-header text-center">{item.title}</div>
            <div className="card-body">
              <h5 className="card-title text-center text-white">
                {item?.value}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerPage;
