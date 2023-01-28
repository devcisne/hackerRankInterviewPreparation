const truckTour = (petrolpumps) => {
  // Write your code here
  let sum = 0;
  let r = 0;
  for (let i = 0; i < petrolpumps.length; i++) {
    sum += petrolpumps[i][0] - petrolpumps[i][1];
    if (sum < 0) {
      sum = 0;
      r = i + 1;
      continue;
    }
  }

  return r;
};

export { truckTour };
