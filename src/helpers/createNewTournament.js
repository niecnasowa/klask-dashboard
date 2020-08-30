
import shuffleArray from './shuffleArray';
import createMatch from './createMatch'

const createNewTournament = (newPlayers) => {
  const shuffledPlayers = shuffleArray(newPlayers);

    const round0 = shuffledPlayers.reduce(
      (acc, val, index) => {
        // If no games, add first
        if(!acc.length) {
          acc.push(createMatch({ round: 0, id: 0 }));
        }

        const gameIndex = acc.length-1;

        // Check last game if has empty first player name
        // If empty add player name to game
        if(acc[gameIndex].player1.name === null) {
          acc[gameIndex].player1.name = val.name;
          return acc;
        }

        // Check last game if has empty second player name
        // If empty add player name to game
        if(acc[gameIndex].player2.name === null) {
          acc[gameIndex].player2.name = val.name;

          // If there are more players, create new game
          if(index !== shuffledPlayers.length - 1) {
            acc.push(createMatch({ round: 0, id: acc.length }));
          }
        }

        return acc;
      },
      []
    );

    return { matches: [round0] };
}

export default createNewTournament;
