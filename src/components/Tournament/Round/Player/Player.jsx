import React, { useState } from 'react';
import AddPoints from './AddPoints';
import styles from './Player.module.scss';

const Player = ({ player, match, onAddPoints }) => {
  const [showPointsForm, setShowPointsForm] = useState(false);

  const handleToggleAddPoints = () => {
    setShowPointsForm(!showPointsForm);
  };

  const handleSavePoints = (points) => {
    onAddPoints(player, match, points);
    setShowPointsForm(false);
  };

  const { name, points } = player

  const hasPlayerName = name !== null;

  if(!hasPlayerName) {
    return null;
  }

  return (
    <>
      {showPointsForm && <AddPoints onSavePoints={handleSavePoints} onClose={handleToggleAddPoints} />}
      <div className={styles.wrapper}>
        <div className={styles.name}>
          {name}
        </div>
        {
          points.map(
            (pointsNumber) => (
              <div className={styles.points}>
                {pointsNumber}
              </div>
            )
          )
        }
        {!match.isFinished && <button onClick={handleToggleAddPoints}>Add points</button>}
      </div>
    </>
  );
}

export default Player;
