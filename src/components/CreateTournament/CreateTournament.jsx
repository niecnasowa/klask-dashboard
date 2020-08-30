import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import styles from './CreateTournament.module.scss';

const CreateTournament = ({ onSavePlayers }) => {
  const [step, setStep] = useState(1);
  const [playersNumber, setPlayersNumber] = useState(0);

  const handleSelectNumber = (num) => {
    setPlayersNumber(num);
    setStep(2);
  };

  return (
    <div className={styles.container}>
      {step === 1 && <Step1 onSelectNumber={handleSelectNumber} />}
      {step === 2 && <Step2 playersNumber={playersNumber} onSavePlayers={onSavePlayers} />} 
    </div>
  );
}

export default CreateTournament;
