// node
class Node {
    constructor(value) {
        this.value = value; // data yg disimpan
        this.next = null; // pointer ke node selanjutnya
    }
}

// linked list
class LinkedList {
    constructor() {
        this.head = null; // awal ll
        this.size = 0; // jml node
    }

    // function operasi

    // + node diakhir
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // insert di posisi tertentu
    insert(position, value) {
        if (position < 0 || position > this.size) {
            return false;
        }

        const newNode = new Node(value);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            newNode.next = current;
            prev.next = newNode;
        }

        this.size++;
        return true;
    }

    // cari index dari nilai
    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // hapus node berdasarkan posisi
    removeAt(position) {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.size--;
        return current.value;
    }
}
