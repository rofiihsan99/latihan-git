// 1. buat struktur node
class Node {
    constructor(value) {
        this.value = value; // data disimpan
        this.next = null; // link ke node berikutnya
        this.prev = null; // link ke node sebelumnya
    }
}

// 2. buat kelas dll
class DoublyLinkedList {
    constructor() {
        this.head = null; // node awal
        this.tail = null; // node akhir
        this.length = 0; // jml elemen
    }

    // 3. + elemen, append
    append(value) {
        let newNode = new Node(value);

        if (!this.head) { // jika list kosong
            this.head = newNode;
            this.tail = newNode;
        } else { // jika sudah ada elemen
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // 4. cetak list
    printForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // cetak list mundur
    printBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.prev;
        }
        console.log(result + "null");
    }
}

// tes program
let dll = new DoublyLinkedList();

dll.append("Ari");
dll.append("Bagus");
dll.append("Cantika");

console.log("cetak maju:");
dll.printForward();

console.log("cetak mundur:");
dll.printBackward();
