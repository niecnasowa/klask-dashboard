import React from 'react';
import Round from './Round';
import styles from './Tournament.module.scss';

const Tournament = ({ tournament: { matches }, onAddPoints }) => (
  <div className={styles.wrapper}>
    {
      matches.map(
        (round) => (
          <Round
            key={JSON.stringify(round)}
            round={round}
            onAddPoints={onAddPoints}
          />
        )
      )
    }
  </div>
);

export default Tournament;
