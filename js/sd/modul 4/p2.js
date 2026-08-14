function DoublyLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    // + node diposisi tertentu
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) { // posisi awal
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) { // posisi akhir
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else { // posisi tengah
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                node.prev = previous;
                previous.next = node;
                current.prev = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    // hapus node posisi tertentu
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;

            if (position === 0) { // hapus pertama
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) { // hapus akhir
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else { // hapus tengah
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    // cetak maju
    this.printForward = function() {
        let current = head;
        let result = "";
        while (current) {
            result += current.element + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    };

    // cetak mundur
    this.printBackward = function() {
        let current = tail;
        let result = "";
        while (current) {
            result += current.element + " <-> ";
            current = current.prev;
        }
        console.log(result + "null");
    };

    // info tambahan
    this.size = function() {
        return length;
    };

    this.Empty = function() {
        return length === 0;
    };
}

// percobaan
let dll = new DoublyLinkedList();

dll.insert(0, "Andi");
dll.insert(1, "Budi");
dll.insert(2, "Citra");
dll.insert(1, "Dewi"); // sisipkan ditengah

console.log("Cetak maju: ");
dll.printForward();

console.log("Cetak Mundur: ");
dll.printBackward();

let dihapus = dll.removeAt(2);
console.log(`\n--- Menghapus [${dihapus}] di posisi 2 ---`);

console.log("Hasil Akhir :");
dll.printForward();
