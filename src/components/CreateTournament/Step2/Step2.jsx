import React, { useState } from 'react';
import validation from './validation';
import styles from './Step2.module.scss';

const Step2 = ({ playersNumber, onSavePlayers }) => {
  const [error, setError] = useState('');

  const [players, setPlayers] = useState(
    Array(playersNumber).fill(true).map(
      (_, index) => ({
        id: index,
        name: ''
      })
    )
  );

  const handleEditName = (id) => ({ target: { value } }) => {
    const newPlayers = [...players];
    newPlayers[id].name = value;
    setPlayers(newPlayers);
  };

  const handleSendForm = (e) => {
    e.preventDefault();

    const validationError = validation(players);
    setError(validationError);

    if(!validationError) {
      onSavePlayers(players);
    }
  };

  return (
    <>
      <span className={styles.title}>Write names of the players</span>
      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}
      <form onSubmit={handleSendForm}>
        {players.map(
          ({ id, name }) => {
            const formName = `player-${id}`;

            return (
              <div key={id} className={styles.row}>
                <label htmlFor="email">Player {id+1}:</label><br />
                <input
                  onChange={handleEditName(id)}
                  type="string"
                  id={formName}
                  name={formName}
                  value={name}
                />
              </div>
            );
          }
        )}
        <button type="submit">Save & Start</button>
      </form>
    </>
  );
}

export default Step2;
