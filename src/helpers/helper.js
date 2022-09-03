export const upperCaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//returns an array with time in seconds of when the goal was scored and the length of array returned is equal to
// the total number of goals scored.
export const generateRandomArr = (length, max, min) => {
  const resultsArr = [];
  for (let i = 0; i < length; i++) {
    const newNumber = Math.floor(Math.random() * (max - min)) + min;
    resultsArr.includes(newNumber) ? (length += 1) : resultsArr.push(newNumber);
  }
  return resultsArr
    .sort((a, b) => {
      return a - b;
    })
    .reverse();
};
