/***
 * Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.

You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph. After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using the breadth-first search algorithm (BFS). Return an array of distances from the start node in node number order. If a node is unreachable, return -1 for that node. 
 */

const bfs = (n, m, edges, s) => {
  // Write your code here
  // we use this map to iterate edges in both directions
  const edgesMap = new Map();
  // map to keep track of the minimum distance between nodes
  const distanceMap = new Map();
  // Array of distances, should include whatever is in the distanche Map
  // plus the nodes that are unreachable
  const distanceArray = [];

  // fills maps
  edges.forEach(([firstNode, secondNode]) => {
    // fills positive direction
    if (edgesMap.has(firstNode)) {
      const targetNodes = edgesMap.get(firstNode);
      targetNodes.add(secondNode);
    } else {
      // target nodes
      const targetNodes = new Set();
      targetNodes.add(secondNode);
      edgesMap.set(firstNode, targetNodes);
    }
    // fills negative direction
    if (edgesMap.has(secondNode)) {
      const targetNodes = edgesMap.get(secondNode);
      targetNodes.add(firstNode);
    } else {
      // target nodes
      const targetNodes = new Set();
      targetNodes.add(firstNode);
      edgesMap.set(secondNode, targetNodes);
    }
  });
  getMinimumDistances(edgesMap, distanceMap, s, n);
  for (let i = 1; i <= n; i++) {
    if (i !== s) {
      distanceArray.push(distanceMap.get(i) || -1);
    }
  }
  return distanceArray;
};

const getMinimumDistances = (edgesMap, distances, start, numberOfNodes) => {
  const targetNodes = edgesMap.get(start) || new Set();
  const nodesQueue = Array.from(targetNodes);
  // cleans the entry to avoid an infinity loop
  edgesMap.set(start, new Set());
  let nextLevelQueue = [];
  let level = 1;
  let nodeDistancesToSet = numberOfNodes;
  while (nodesQueue.length > 0 && nodeDistancesToSet > 0) {
    const nextNode = nodesQueue.shift();
    const nextTargetNodes = edgesMap.get(nextNode) || new Set();
    const nextNodesArray = Array.from(nextTargetNodes);
    nextLevelQueue.push(...nextNodesArray);
    edgesMap.set(nextNode, []);
    if (!distances.get(nextNode)) {
      // Once all distances have been set
      // we no longer need to keep looking
      // as deeper levels will only mean more distance between nodes
      // This fixes test case 5
      nodeDistancesToSet--;
    }
    const currentMinDistance = distances.get(nextNode) || Infinity;
    distances.set(nextNode, Math.min(currentMinDistance, level * 6));
    if (nodesQueue.length === 0) {
      nodesQueue.push(...nextLevelQueue);
      nextLevelQueue = [];
      level++;
    }
  }
  return level;
};

export { bfs };
