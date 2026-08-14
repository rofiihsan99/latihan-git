const prompt = require('prompt-sync')({ sigint: true });

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() { this.root = null; }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        const lowerData = newNode.data.toLowerCase();
        const lowerNode = node.data.toLowerCase();
        if (lowerData < lowerNode) {
            if (!node.left) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // 1. Fitur Pencarian
    search(node, data) {
        if (!node) return false;
        if (data.toLowerCase() === node.data.toLowerCase()) return true;
        return data.toLowerCase() < node.data.toLowerCase() 
            ? this.search(node.left, data) 
            : this.search(node.right, data);
    }

    // 2. Jumlah Total Node
    countNodes(node) {
        if (!node) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    // 3. Menghapus Node
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(node, data) {
        if (!node) return null;

        if (data.toLowerCase() < node.data.toLowerCase()) {
            node.left = this.deleteNode(node.left, data);
        } else if (data.toLowerCase() > node.data.toLowerCase()) {
            node.right = this.deleteNode(node.right, data);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let temp = this.findMinNode(node.right);
            node.data = temp.data;
            node.right = this.deleteNode(node.right, temp.data);
        }
        return node;
    }

    // 4. Nilai Terkecil dan Terbesar
    findMinNode(node) {
        return !node.left ? node : this.findMinNode(node.left);
    }

    findMaxNode(node) {
        return !node.right ? node : this.findMaxNode(node.right);
    }

    // Traversal
    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            process.stdout.write(node.data + " ");
            this.inOrder(node.right);
        }
    }
}

const tree = new BinaryTree();
console.log("=== PROGRAM BINARY 3 ===");

while (true) {
    console.log("\nMenu:\n1. Tambah\n2. InOrder\n3. Cari\n4. Hitung Node\n5. Hapus\n6. Min & Max\n7. Keluar");
    const choice = prompt("Pilih menu: ");

    if (choice === "1") {
        tree.insert(prompt("Masukkan teks: "));
    } else if (choice === "2") {
        tree.inOrder(tree.root); console.log();
    } else if (choice === "3") {
        const key = prompt("Cari teks: ");
        console.log(tree.search(tree.root, key) ? "Data ditemukan" : "Data tidak ditemukan");
    } else if (choice === "4") {
        console.log("Total node: " + tree.countNodes(tree.root));
    } else if (choice === "5") {
        tree.delete(prompt("Masukkan teks yang akan dihapus: "));
    } else if (choice === "6") {
        if (!tree.root) console.log("Tree kosong");
        else {
            console.log("Terkecil: " + tree.findMinNode(tree.root).data);
            console.log("Terbesar: " + tree.findMaxNode(tree.root).data);
        }
    } else if (choice === "7") break;
}
