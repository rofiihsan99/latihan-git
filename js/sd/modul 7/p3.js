const prompt = require("prompt-sync")({ sigint: true });

// Graph menggunakan Adjacency List
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
    this.adjList.get(w).push(v); // Jika ingin graf berarah, hapus baris ini
  }

  bfs(start) {
    let visited = {};
    for (let vertex of this.adjList.keys()) {
      visited[vertex] = false;
    }

    let queue = [];
    visited[start] = true;
    queue.push(start);

    console.log("\nHasil BFS mulai dari vertex:", start);
    while (queue.length !== 0) {
      let current = queue.shift();
      console.log(current);
      for (let tetangga of this.adjList.get(current)) {
        if (!visited[tetangga]) {
          visited[tetangga] = true;
          queue.push(tetangga);
        }
      }
    }
  }
}

let g = new Graph();
let jumlahVertex = parseInt(prompt("Masukkan jumlah vertex: "));

console.log("Masukkan nama vertex (misal: A, B, C):");
for (let i = 0; i < jumlahVertex; i++) {
  let v = prompt(`Vertex ${i + 1}: `);
  g.addVertex(v);
}

let jumlahEdge = parseInt(prompt("\nMasukkan jumlah edge (sisi): "));
console.log("Masukkan edge dengan format: V1 V2 (misal: A B)");
for (let i = 0; i < jumlahEdge; i++) {
  let edge = prompt(`Edge ${i + 1}: `).split(" ");
  g.addEdge(edge[0], edge[1]);
}

let start = prompt("\nMasukkan vertex awal BFS: ");
console.log();
g.bfs(start);
