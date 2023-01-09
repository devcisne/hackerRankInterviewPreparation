/**
 * It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
 *  Each person wears a sticker indicating their initial position in the queue from 1 to n.
 *
 * Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
 * One person can bribe at most two others.
 * Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
 * Example:
 *q=[1,2,3,5,4,6,7,8]
 * If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.
 * q=[4,1,2,3]
 * Person 4 had to bribe 3 people to get to the current position. Print Too chaotic
 */

const minimumBribes = (q) => {
  let count = q.length;
  let bribes = 0;
  let tooCha = false;

  for (let i = count - 1; i > 0; i--) {
    let expected = i + 1;

    if (q[i] == expected) {
      continue;
    } else if (i - 1 >= 0 && q[i - 1] == expected) {
      bribes++;
      // reorder array
      q[i - 1] = q[i];
      q[i] = expected;
      continue;
    } else if (i - 2 >= 0 && q[i - 2] == expected) {
      bribes += 2;
      // reorder array
      q[i - 2] = q[i - 1];
      q[i - 1] = q[i];
      q[i] = expected;
      continue;
    }

    // bribed more than twice - break loop
    tooCha = true;
    break;
  }

  console.log(tooCha ? "Too chaotic" : bribes.toString());
};

module.exports = { minimumBribes };
