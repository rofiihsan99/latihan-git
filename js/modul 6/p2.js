const prompt = require("prompt-sync")({ sigint: true });

class Node {
    constructor(x) {
        this.data = x;
        this.children = [];
    }
}

function addChild(parent, child) { parent.children.push(child); }

function printParents(node, parent) {
    if (parent === null) { console.log(node.data + " > root"); }
    else { console.log(node.data + " > " + parent.data); }
    for (let child of node.children) { printParents(child, node); }
}

function printChildren(node) {
    let str = node.data + " > ";
    for (let child of node.children) { str += child.data + " "; }
    console.log(str);
    for (let child of node.children) { printChildren(child); }
}

function printLeafNodes(node) {
    if (node.children.length === 0) { process.stdout.write(node.data + " "); return; }
    for (let child of node.children) { printLeafNodes(child); }
}

function printDegrees(node, parent) {
    let degree = node.children.length;
    if (parent !== null) { degree++; }
    console.log(node.data + " > " + degree);
    for (let child of node.children) { printDegrees(child, node); }
}

console.log("=== PROGRAM 3 PROMPT-SYNC ===");
const totalNodes = parseInt(prompt("Masukkan jml node: "));
let nodes = [];

for (let i = 0; i < totalNodes; i++) {
    let value = prompt(`Masukkan nilai untuk node ke-${i + 1}: `);
    nodes.push(new Node(value));
}

console.log("\nMasukkan hubungan parent-child (tekan 'done' untuk selesai):");
while (true) {
    let parentVal = prompt("Parent: ");
    if (parentVal.toLowerCase() === "done") { break; }
    let childVal = prompt("Child: ");
    let parentNode = nodes.find(n => n.data === parentVal);
    let childNode = nodes.find(n => n.data === childVal);
    if (parentNode && childNode) { addChild(parentNode, childNode); }
    else { console.log("Node gak ada."); }
}

let root = nodes[0];
console.log("\n=== HASIL 3 ===");
console.log("\nParents of each node:");
printParents(root, null);
console.log("\nChildren of each node:");
printChildren(root);
process.stdout.write("\nLeaf nodes: ");
printLeafNodes(root);
console.log("\n\nDegrees of nodes:");
printDegrees(root, null);
