const graph = {
  1: ["2"],
  2: ["1", "8"],
  6: ["7"],
  9: ["8"],
  7: ["6", "8"],
  8: ["9", "7", "2"],
};

function depthFirstPrint(graph, start, visited, nodes) {
  console.log(start);
  const node = graph[start];
  for (neighbor of node) {
    depthFirstPrint(graph, neighbor);
  }
}

function breadthFirstPrint(graph, start) {
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
    console.log(current);
  }
}

function hasPath(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);

  const neighbors = graph[src];
  for (neighbor of neighbors) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
}

function buildGraph(edges) {
  const graph = {};

  for (const [nodeA, nodeB] of edges) {
    if (!(nodeA in graph)) {
      graph[nodeA] = [];
    }
    if (!(nodeB in graph)) {
      graph[nodeB] = [];
    }
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
}

function undirectedPath(edges, src, target) {
  const graph = buildGraph(edges);
  return hasPath(graph, src, target, new Set());
}

function explore(graph, current, visited) {
  if (visited.has(String(current))) return;

  visited.add(String(current));

  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
}

function connectedComponentsCount(graph) {
  const visited = new Set();
  let count = 0;

  for (const node in graph) {
    if (!visited.has(node)) {
      explore(graph, node, visited);
      ++count;
    }
  }

  return count;
}

function getComponents(graph) {
  const components = [];
  const visited = new Set();

  for (const node in graph) {
    if (!visited.has(node)) {
      explore(graph, node, visited);
      components.push(node);
    }
  }

  return components;
}

function getSizeOfComponent(graph, component) {
  let size = 0;
  const visited = new Set();

  function getSize(graph, current, visited) {
    if (visited.has(current)) return;
    visited.add(current);
    ++size;
    for (neighbor of graph[current]) {
      getSize(graph, neighbor, visited);
    }
  }

  getSize(graph, component, visited);

  return size;
}

function largestComponent(graph) {
  let maximumComponentSize = -1;
  const components = getComponents(graph);
  for (const component of components) {
    const componentSize = getSizeOfComponent(graph, component);
    if (componentSize > maximumComponentSize) {
      maximumComponentSize = componentSize;
    }
  }

  return maximumComponentSize;
}

function shortestPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  if (nodeA === nodeB) return 0;

  const visited = new Set();
  const queue = [{ node: nodeA, distance: 0 }];

  while (queue.length > 0) {
    const { node, distance } = queue.shift();
    visited.add(node);

    if (nodeB === node) {
      return distance;
    }

    for (neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push({ node: neighbor, distance: distance + 1 });
      }
    }
  }

  return -1;
}

function isWater(node, grid) {
  const [row, col] = node.split("-");
  return grid[row][col] === "W";
}

function findIsland(graph, grid, node, visited, island) {
  if (isWater(node, grid)) return;
  visited.add(node);

  for (neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      findIsland(graph, grid, neighbor, visited, island);
    }
  }

  island.push(node);

  return island;
}

function getIslands(graph, grid) {
  const islands = [];
  const visited = new Set();
  const nodes = Object.keys(graph);

  for (const node of nodes) {
    if (!visited.has(node)) {
      const island = findIsland(graph, grid, node, visited, []);
      if (island) {
        islands.push(island);
      }
    }
  }

  return islands;
}

function getIslandsCount(islands = []) {
  return islands.length;
}

function buildGraphFromGrid(grid) {
  const graph = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; ++j) {
      const nodeKey = `${i}-${j}`;
      const node = !graph[nodeKey] ? (graph[nodeKey] = []) : graph[nodeKey];

      if (grid[i][j + 1]) {
        node.push(`${i}-${j + 1}`);
      }

      if (grid[i][j - 1]) {
        node.push(`${i}-${j - 1}`);
      }

      if (grid[i + 1]?.[j]) {
        node.push(`${i + 1}-${j}`);
      }

      if (grid[i - 1]?.[j]) {
        node.push(`${i - 1}-${j}`);
      }
    }
  }
  return graph;
}

function islandCount(grid) {
  const graph = buildGraphFromGrid(grid);
  const islands = getIslands(graph, grid);
  const count = getIslandsCount(islands);

  return count;
}

console.log(
  islandCount([
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
  ])
);
