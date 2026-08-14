class Graph {
  constructor() { this.adjList = new Map(); }

  addVertex(v) { if (!this.adjList.has(v)) this.adjList.set(v, []); }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  bfs(start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    console.log("Hasil BFS mulai dari vertex:", start);
    
    while (queue.length) {
      let current = queue.shift();
      console.log(current);

      for (let neighbor of this.adjList.get(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

let g = new Graph();
["A", "B", "C", "D", "E", "F", "G"].forEach(v => g.addVertex(v));
[["A", "B"], ["A", "C"], ["B", "D"], ["C", "E"], ["D", "E"], ["E", "F"], ["E", "G"]]
  .forEach(edge => g.addEdge(...edge));
g.bfs("A");
