import React from 'react';
import styles from './Step1.module.scss';

const Step1 = ({ onSelectNumber }) => {
  const handleSelectNumber = (playersNumber) => () => {
    onSelectNumber(playersNumber);
  };

  return (
    <>
      <span className={styles.title}>Select number of players</span>
      <button className={styles.button} onClick={handleSelectNumber(4)}>4</button>
      <button className={styles.button} onClick={handleSelectNumber(8)}>8</button>
      <button className={styles.button} onClick={handleSelectNumber(16)}>16</button>
    </>
  );
}

export default Step1;
