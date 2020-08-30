const createMatch = ({ round, id }) => ({
  player1: { name: null, points: [], key: 'player1', wins: 0 },
  player2: { name: null, points: [], key: 'player2', wins: 0 },
  round,
  id,
  isFinished: false
});

export default createMatch;
