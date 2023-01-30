/***
 * Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following 4 types:

append(W) - Append string to the end of S.
delete(k) - Delete the last k characters of S.
print(k)- Print the k index character of S.
undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation. 
 */

const processData = (input) => {
  input = input.split("\n");
  let S = "";
  let lastStateOfS = [S];

  for (let i = 1; i < input.length; i++) {
    let query = input[i].split(" ");
    if (query[0] === "1") {
      S += query[1];
      lastStateOfS.push(S);
    } else if (query[0] === "2") {
      let charsToDelete = +query[1];
      S = S.substring(0, S.length - charsToDelete);
      lastStateOfS.push(S);
    } else if (query[0] === "3") {
      console.log(S[+query[1] - 1]);
    } else {
      lastStateOfS.pop();
      S = lastStateOfS[lastStateOfS.length - 1];
    }
  }

  return S;
};

processData("2\n1 hello\n2 3");

export { processData };
