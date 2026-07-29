const prompt = require("prompt-sync")({ sigint: true });

class Graph {
  constructor() { this.adjacencyList = {}; }

  addVertex(v) { if (!this.adjacencyList[v]) this.adjacencyList[v] = []; }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) this.adjacencyList[v1].push(v2);
    else console.log("Vertex tidak ditemukan.");
  }

  printGraph() {
    console.log("\n=== Adjacency List ===");
    for (let v in this.adjacencyList) console.log(`${v} -> ${this.adjacencyList[v].join(", ")}`);
  }
}

let g = new Graph();
let numVertices = parseInt(prompt("Masukkan jumlah vertex: "));
for (let i = 0; i < numVertices; i++) g.addVertex(prompt(`Masukkan nama vertex ke-${i + 1}: `));

let numEdges = parseInt(prompt("Masukkan jumlah edge (sisi berarah): "));
for (let i = 0; i < numEdges; i++) {
  g.addEdge(prompt(`Edge ${i + 1} - Asal: `), prompt(`Edge ${i + 1} - Tujuan: `));
}
g.printGraph();
