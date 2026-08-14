const prompt = require("prompt-sync")({ sigint: true });

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  DFS(start) {
    let visited = {};
    console.log("\nTraversal DFS:");
    this.DFSUtil(start, visited);
  }

  DFSUtil(vertex, visited) {
    visited[vertex] = true;
    process.stdout.write(vertex + " -> ");
    let neighbors = this.adjList.get(vertex);
    for (let next of neighbors) {
      if (!visited[next]) {
        this.DFSUtil(next, visited);
      }
    }
  }
}

let g = new Graph();

// Input node
let total = prompt("Masukkan jumlah vertex: ");
for (let i = 0; i < total; i++) {
  let v = prompt(`Nama vertex ke-${i + 1}: `);
  g.addVertex(v);
}

// Input edge
let edges = prompt("Masukkan jumlah edge: ");
for (let i = 0; i < edges; i++) {
  let from = prompt(`Edge dari: `);
  let to = prompt(`Menuju: `);
  g.addEdge(from, to);
}

// Mulai DFS
let start = prompt("Mulai DFS dari vertex: ");
console.log();
g.DFS(start);
console.log("Selesai.\n");
