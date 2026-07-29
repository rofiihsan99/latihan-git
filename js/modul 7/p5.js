const prompt = require("prompt-sync")({ sigint: true });

class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(v) {
    this.list[v] = this.list[v] || [];
  }

  addEdge(from, to) {
    if (this.list[from]) {
      this.list[from].push(to);
    }
  }

  topSort() {
    let visited = {};
    let stack = [];

    const helper = (v) => {
      visited[v] = true;

      const neighbors = this.list[v] || [];
      neighbors.forEach((n) => {
        if (!visited[n]) {
          helper(n);
        }
      });

      stack.push(v);
    };

    for (let v in this.list) {
      if (!visited[v]) {
        helper(v);
      }
    }

    console.log("\n=== Hasil Topological Sort ===");
    console.log(stack.reverse().join("\n"));
  }
}

const g = new Graph();

console.log("=== Program Topological Sort ===\n");

const n = parseInt(prompt("Masukkan jumlah mata kuliah: "));
for (let i = 1; i <= n; i++) {
  g.addVertex(prompt(`Mata kuliah ke-${i}: `));
}

const e = parseInt(prompt("\nMasukkan jumlah syarat: "));
console.log("Format: MK_A MK_B (A adalah prasyarat B)");

for (let i = 1; i <= e; i++) {
  const input = prompt(`Prasyarat ke-${i}: `);
  const [from, to] = input.split(" ");
  g.addEdge(from, to);
}

console.log("\nMenghitung...");
g.topSort();
