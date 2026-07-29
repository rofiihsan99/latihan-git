const prompt = require("prompt-sync")({ sigint: true });

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    constructor() { this.root = null; }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    search(node, data) {
        if (!node || node.data === data) return node;
        return data < node.data ? this.search(node.left, data) : this.search(node.right, data);
    }

    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            process.stdout.write(node.data + " ");
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (node) {
            process.stdout.write(node.data + " ");
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            process.stdout.write(node.data + " ");
        }
    }

    remove(data) { this.root = this.removeNode(this.root, data); }

    removeNode(node, key) {
        if (!node) return null;
        if (key < node.data) { node.left = this.removeNode(node.left, key); return node; }
        else if (key > node.data) { node.right = this.removeNode(node.right, key); return node; }
        else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            const aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) { return node.left ? this.findMinNode(node.left) : node; }
}

const bst = new BinarySearchTree();
console.log("=== PROGRAM BINARY SEARCH 3 ===");

const n = parseInt(prompt("Masukkan jumlah data yang ingin dimasukkan: "));
for (let i = 0; i < n; i++) bst.insert(parseInt(prompt(`Masukkan nilai data ke-${i + 1}: `)));

console.log("\n--- HASIL TRAVERSAL ---");
process.stdout.write("In-order: "); bst.inOrder(bst.root); console.log();
process.stdout.write("Pre-order: "); bst.preOrder(bst.root); console.log();
process.stdout.write("Post-order: "); bst.postOrder(bst.root); console.log();

let cari = parseInt(prompt("\nMasukkan nilai yang ingin dicari: "));
console.log(bst.search(bst.root, cari) ? "\nData ditemukan." : "\nData tidak ditemukan.");

let hapus = parseInt(prompt("\nMasukkan nilai yang ingin dihapus: "));
bst.remove(hapus);
console.log("\n--- TREE SETELAH PENGHAPUSAN ---");
process.stdout.write("In-order: "); bst.inOrder(bst.root); console.log();
