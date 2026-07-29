const prompt = require("prompt-sync")();

// Input jumlah vertex
let n = parseInt(prompt("Jumlah vertex: "));

let vertices = [];
let graph = {};

// Input nama vertex
for (let i = 0; i < n; i++) {
    let v = prompt(`Nama vertex ${i + 1}: `);
    vertices.push(v);
    graph[v] = [];
}

// Pilihan graph berarah atau tidak
let berarah = prompt("Graph berarah? (y/n): ").toLowerCase() === "y";

// Input jumlah edge
let m = parseInt(prompt("Jumlah edge: "));

console.log("\nMasukkan pasangan vertex yang terhubung:");

for (let i = 0; i < m; i++) {
    let data = prompt(`Edge ${i + 1} (contoh: A B): `).split(" ");
    let a = data[0];
    let b = data[1];

    graph[a].push(b);

    if (!berarah) {
        graph[b].push(a);
    }
}

// Vertex awal BFS
let start = prompt("\nVertex awal BFS: ");

// BFS
let queue = [start];
let visited = {};
let level = {};

visited[start] = true;
level[start] = 0;

while (queue.length > 0) {
    let current = queue.shift();

    for (let neighbor of graph[current]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            level[neighbor] = level[current] + 1;
            queue.push(neighbor);
        }
    }
}

// Output hasil BFS
console.log("\nLevel BFS:");
for (let v of vertices) {
    if (level[v] !== undefined) {
        console.log(`${v} : Level ${level[v]}`);
    } else {
        console.log(`${v} : Tidak terjangkau`);
    }
}
