
import createMatch from './createMatch';

const transformTournament = ({ tournament, player, match, points }) => {
  const newTournament = { ...tournament };
    
  const playerKey = player.key;
  const opponentKey = playerKey === 'player1' ? 'player2' : 'player1';
  
  // Add points to the player
  newTournament.matches[match.round][match.id][playerKey].points.push(points);

  // Add wins to the players
  const playerPointsIndex = newTournament.matches[match.round][match.id][playerKey].points.length-1;
  const opponentPoints = newTournament.matches[match.round][match.id][opponentKey].points[playerPointsIndex];
  if(opponentPoints) {
    // If opponent has more points in actual game add 1 win to him
    if(opponentPoints > points) {
      newTournament.matches[match.round][match.id][opponentKey].wins += 1;
    }

    // If player has more points in actual game add 1 win to him
    if(points > opponentPoints) {
      newTournament.matches[match.round][match.id][playerKey].wins += 1;
    }
  }

  // Check if match should be closed
  // Create new match if needed
  const opponentWinRound = newTournament.matches[match.round][match.id][opponentKey].wins >= 2;
  const playerWinRound = newTournament.matches[match.round][match.id][playerKey].wins >= 2;

  if(opponentWinRound || playerWinRound) {
    // Mark match as finished
    newTournament.matches[match.round][match.id].isFinished = true;

    const newRound = match.round + 1;

    // If needed Create new round
    if(!newTournament.matches[newRound]) {
      newTournament.matches.push([]);
    }

    // If needed Create new match
    if(!newTournament.matches[newRound].length) {
      newTournament.matches[newRound].push(createMatch({ round: newRound, id: 0 }));
    }

    const newRoundMatchLength = newTournament.matches[newRound].length;
    const newMatchIndex = newRoundMatchLength - 1;

    const winnerName = opponentWinRound ? newTournament.matches[match.round][match.id][opponentKey].name : player.name;

    // Add winner name to the next round
    if(newTournament.matches[newRound][newMatchIndex].player1.name === null) {
      newTournament.matches[newRound][newMatchIndex].player1.name = winnerName;
    } else {
      newTournament.matches[newRound][newMatchIndex].player2.name = winnerName;

      // If there are more players, create new game
      if(newRoundMatchLength < (newTournament.matches[match.round].length / 2)) {
        newTournament.matches[newRound].push(createMatch({ round: newRound, id: newRoundMatchLength }));
      }
    }
  }

  return newTournament;
}

export default transformTournament;
