import React, { useState } from 'react';
import validation from './validation';
import styles from './AddPoints.module.scss';

const AddPoints = ({ onSavePoints, onClose }) => {
  const [points, setPoints] = useState('');
  const [error, setError] = useState('');

  const handleEditPoints = ({ target: { value } }) => {
    setPoints(value === '' ? '' : parseInt(value, 10));
  };

  const handleSendForm = (e) => {
    e.preventDefault();

    const validationError = validation(points);
    setError(validationError);

    if(!validationError) {
      onSavePoints(points);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button onClick={onClose} className={styles.close}>close</button>
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}
        <form onSubmit={handleSendForm}>
          <label htmlFor="email">Points:</label><br />
          <input
            className={styles.input}
            onChange={handleEditPoints}
            type="number"
            id="points"
            name="points"
            value={points}
            min={1}
            max={6}
          />
          <button className={styles.button} type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddPoints;
