/**
 * Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
 * Determine if the columns are also in ascending alphabetical order, top to bottom.
 * Return YES if they are or NO if they are not.
 * Example:
 * grid=['abc','ade','efg']
 * The grid is illustrated below.
 * abc
 * ade
 * efg
 *The rows are already in alphabetical order.
 * The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES.
 * Only elements within the same row can be rearranged.
 * They cannot be moved to a different row.
 */

const gridChallenge = (grid) => {
  let rearrangedGrid = [];
  let answer;
  grid.forEach((letterArray) => {
    const sortedArray = letterArray.split("").sort();
    rearrangedGrid.push(sortedArray.join(""));
  });
  for (let index = 0; index < rearrangedGrid[0].length; index++) {
    const firstLetterCompared = rearrangedGrid[0][index];
    // const secondLetterCompared = rearrangedGrid[index][index - 1];
    // console.log(firstLetterCompared);

    for (let i = 1; i < rearrangedGrid.length; i++) {
      const secondLetterCompared = rearrangedGrid[i][index];
      if (secondLetterCompared < firstLetterCompared) {
        return "NO";
      }
      //   console.log(secondLetterCompared);
    }
  }
  console.log(rearrangedGrid);

  return "YES";
};

module.exports = { gridChallenge };
// const grid = ["cba", "aed", "efg"];
// console.log(gridChallenge(grid));
