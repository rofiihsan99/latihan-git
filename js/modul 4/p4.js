// Node untuk Circular Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Circular LinkedList
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Tambah node di akhir
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Bentuk lingkaran
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.length++;
    }

    // Sisip node di posisi tertentu
    insert(position, value) {
        if (position < 0 || position > this.length) {
            return false;
        }

        const newNode = new Node(value);

        if (position === 0) {
            if (!this.head) {
                this.head = newNode;
                newNode.next = this.head;
            } else {
                let last = this.head;
                while (last.next !== this.head) {
                    last = last.next;
                }
                newNode.next = this.head;
                last.next = newNode;
                this.head = newNode;
            }
        } else {
            let index = 0;
            let current = this.head;
            let previous = null;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = newNode;
            newNode.next = current;
        }
        this.length++;
        return true;
    }

    // Hapus node di posisi tertentu
    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }

        let current = this.head;
        let removedValue;

        if (position === 0) {
            removedValue = current.value;
            if (this.length === 1) {
                this.head = null;
            } else {
                let last = this.head;
                while (last.next !== this.head) {
                    last = last.next;
                }
                this.head = current.next;
                last.next = this.head;
            }
        } else {
            let index = 0;
            let previous = null;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            removedValue = current.value;
            previous.next = current.next;
        }
        this.length--;
        return removedValue;
    }

    // Cari elemen berdasarkan value
    search(value) {
        if (!this.head) return -1;

        let current = this.head;
        let index = 0;
        do {
            if (current.value === value) return index;
            current = current.next;
            index++;
        } while (current !== this.head);

        return -1;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    // Cetak isi list
    print() {
        if (!this.head) {
            console.log("List kosong");
            return;
        }
        let result = "";
        let current = this.head;
        do {
            result += current.value + " -> ";
            current = current.next;
        } while (current !== this.head);

        console.log(result + "(kembali ke head: " + this.head.value + ")");
    }
}

// Tes coba
let cll = new CircularLinkedList();

console.log("=== Tambah pemain ke lingkaran ===");
cll.append("Andra");
cll.append("Bagas");
cll.append("Citra");
cll.append("Luthfi");
cll.print();

console.log("\n=== Sisipkan Eko pada posisi 2 ===");
cll.insert(2, "Eko");
cll.print();

console.log("\n=== Hapus diposisi 3 ===");
let terhapus = cll.removeAt(3);
console.log("Terhapus:", terhapus);
cll.print();
