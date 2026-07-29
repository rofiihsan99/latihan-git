const prompt = require('prompt-sync')();

// Input jumlah vertex
const numVertices = parseInt(prompt('Masukkan jumlah vertex: '));

// Input nama vertex
const vertices = [];
for (let i = 0; i < numVertices; i++) {
  vertices.push(prompt(`Masukkan nama vertex ke-${i + 1}: `));
}

// Buat adjacency list
const graph = {};
vertices.forEach(v => graph[v] = []);

// Input jumlah edge
const numEdges = parseInt(prompt('Masukkan jumlah edge: '));

// Input edge
for (let i = 0; i < numEdges; i++) {
  const from = prompt(`Edge ${i + 1} - dari vertex: `);
  const to = prompt(`Edge ${i + 1} - ke vertex: `);

  if (graph[from] !== undefined && graph[to] !== undefined) {
    graph[from].push(to);
    graph[to].push(from); // undirected graph
  } else {
    console.log('Vertex tidak ditemukan, edge diabaikan.');
  }
}

// Input vertex awal
const start = prompt('Masukkan vertex awal untuk DFS: ');

// Algoritma DFS
const visited = new Set();
const order = [];

function dfs(node) {
  visited.add(node);
  order.push(node);
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor);
    }
  }
}

if (graph[start] !== undefined) {
  dfs(start);
} else {
  console.log('Vertex awal tidak ditemukan!');
  process.exit(1);
}

// Tampilkan hasil
console.log('\n=== HASIL DFS ===');
console.log('Urutan kunjungan:', order.join(' -> '));

// Node tidak terjangkau
const unreachable = vertices.filter(v => !visited.has(v));
if (unreachable.length > 0) {
  console.log('Node tidak terjangkau:', unreachable.join(', '));
} else {
  console.log('Semua node terjangkau!');
}
