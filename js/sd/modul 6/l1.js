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
        if (!this.root) {
            this.root = newNode;
            console.log(`"${data}" menjadi root tree.`);
        } else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        const lowerData = newNode.data.toLowerCase();
        const lowerNode = node.data.toLowerCase();

        if (lowerData < lowerNode) {
            if (!node.left) {
                node.left = newNode;
                console.log(`"${newNode.data}" ditambahkan ke kiri dari "${node.data}"`);
            } else this.insertNode(node.left, newNode);
        } else {
            if (!node.right) {
                node.right = newNode;
                console.log(`"${newNode.data}" ditambahkan ke kanan dari "${node.data}"`);
            } else this.insertNode(node.right, newNode);
        }
    }

    // Mencari nilai terkecil paling kiri
    findMin(node = this.root) {
        if (!node) return null;
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    // Mencari nilai terbesar paling kanan
    findMax(node = this.root) {
        if (!node) return null;
        let current = node;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
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
}

const tree = new BinaryTree();
console.log("=== PROGRAM BINARY 3 ===");

while (true) {
    console.log("\nMenu:\n1. Tambah data\n2. InOrder\n3. PreOrder\n4. PostOrder\n5. Cari Nilai Terkecil\n6. Cari Nilai Terbesar\n7. Keluar");
    const choice = prompt("Pilih menu (1-7): ");

    if (choice === "1") {
        tree.insert(prompt("Masukkan teks: "));
    } else if (["2", "3", "4"].includes(choice)) {
        console.log(`\nTraversal ${choice === "2" ? "InOrder" : choice === "3" ? "PreOrder" : "PostOrder"}:`);
        if (choice === "2") tree.inOrder(tree.root);
        else if (choice === "3") tree.preOrder(tree.root);
        else tree.postOrder(tree.root);
        console.log();
    } else if (choice === "5") {
        const min = tree.findMin();
        console.log(min ? `\nNilai terkecil: ${min}` : "\nTree kosong.");
    } else if (choice === "6") {
        const max = tree.findMax();
        console.log(max ? `\nNilai terbesar: ${max}` : "\nTree kosong.");
    } else if (choice === "7") {
        console.log("Program selesai.");
        break;
    } else console.log("Pilihan tidak valid!");
}
