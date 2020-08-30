export const validateItem = ({ name, id }, players) => {
  const playerName = `player ${id+1}`
  if(typeof name !== 'string') {
    return `Name of ${playerName} needs to be a string`;
  }

  if(!name.length) {
    return `Name of ${playerName} can't be empty`;
  }

  if(name.length > 20) {
    return `Name of ${playerName} needs to be shorter that 20 chars`;
  }

  const isSameNameExists = players.some((player) => player.id !== id && player.name === name)
  if(isSameNameExists) {
    return `Name "${name}" is used more than once`;
  }

  return undefined;
}


const validation = (players) => players.map((item) => validateItem(item, players)).find((err) => err);

export default validation;
