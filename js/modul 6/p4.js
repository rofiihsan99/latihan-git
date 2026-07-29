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

	// Menampilkan data secara berurut dari A ke Z, kiri - node - kanan
    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            process.stdout.write(node.data + " ");
            this.inOrder(node.right);
        }
    }

	// kunjungi root  dulu, sangat berguna jika membuat salinan pohon, node - kiri - kanan
    preOrder(node) {
        if (node) {
            process.stdout.write(node.data + " ");
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

	// kunjungi anak" dulu sebelum root, kiri - kanan - node
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
    console.log("\nMenu:\n1. Tambah data\n2. InOrder\n3. PreOrder\n4. PostOrder\n5. Keluar");
    const choice = prompt("Pilih menu (1-5): ");

    if (choice === "1") {
        tree.insert(prompt("Masukkan teks: "));
    } else if (["2", "3", "4"].includes(choice)) {
        console.log(`\nTraversal ${choice === "2" ? "InOrder" : choice === "3" ? "PreOrder" : "PostOrder"}:`);
        if (choice === "2") tree.inOrder(tree.root);
        else if (choice === "3") tree.preOrder(tree.root);
        else tree.postOrder(tree.root);
        console.log();
    } else if (choice === "5") {
        console.log("Program selesai.");
        break;
    } else console.log("Pilihan tidak valid!");
}
