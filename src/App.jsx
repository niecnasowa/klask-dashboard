import React from 'react';
import { CreateTournament, Tournament } from './components';
import { createNewTournament, transformTournament } from './helpers';
import { useStateWithLS } from './hooks';
import styles from './App.module.scss';

const emptyTournament = { matches: [] };

const App = () => {
  const [tournament, setTournament] = useStateWithLS(emptyTournament, 'tournament');

  const hasMatches = !!tournament.matches.length

  const handleSavePlayers = (newPlayers) => {
    setTournament(createNewTournament(newPlayers));
  }

  const handleAddPoints = (player, match, points) => {
    setTournament(transformTournament({ tournament, player, match, points }));
  }

  return (
    <div className={styles.container}>
      {!hasMatches && (
        <CreateTournament onSavePlayers={handleSavePlayers} />
      )}
      {hasMatches && (
        <Tournament tournament={tournament} onAddPoints={handleAddPoints} />
      )}
    </div>
  );
}

export default App;
