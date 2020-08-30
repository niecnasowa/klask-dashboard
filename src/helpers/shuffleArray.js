/* Randomize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = (array) => {
  const newArray = [...array]
  for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
  }
  return newArray
}

export default shuffleArray;
