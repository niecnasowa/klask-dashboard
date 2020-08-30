const validation = (points) => {
  if(points === '') {
    return `Points can't be empty`;
  }

  if(typeof points !== 'number') {
    return `Points needs to be a number`;
  }

  if(points < 0) {
    return `Points needs to be greater than 0`;
  }

  if(points > 7) {
    return `Points needs to be smaller than 7`;
  }

  if(!Number.isInteger(points)) {
    return `Points needs to be integer`;
  }

  return undefined;
}

export default validation;
