import React from 'react';
import Player from './Player';
import styles from './Round.module.scss';

const Round = ({ round, onAddPoints }) => (
  <div className={styles.wrapper}>
    {
      round.map(
        (match) => (
          <div className={styles.match}>
            <Player player={match.player1} match={match} onAddPoints={onAddPoints} />
            <Player player={match.player2} match={match} onAddPoints={onAddPoints} />
          </div>
        )
      )
    }
  </div>
);

export default Round;
