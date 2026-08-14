class Stack
{
    constructor()
    {
        this.items = []; // simpan elemen
    }

    // + elemen k stack
    push(element)
    {
        this.items.push(element);
    }

    // hapus elemen teratas
    pop()
    {
        if (this.isEmpty())
        {
            return "Stack Kosong! ";
        }
        return this.items.pop();
    }

    // lihat Elemen Teratas
    peek()
    {
        if (this.isEmpty())
        {
            return "Stack Kosong! ";
        }
        return this.items[this.items.length - 1];
    }

    // cek apakah stack kosong
    isEmpty()
    {
        return this.items.length === 0;
    }

    // tampilkan seluruh isi stack
    printStack()
    {
        console.log(this.items.join(" <- "));
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();

console.log("Teratas:", stack.peek());

console.log("pop:", stack.pop());
stack.printStack();
