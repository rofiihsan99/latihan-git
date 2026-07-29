class Queue 
{
    constructor() 
    {
        this.items = []; // Arr  save el queue
    }

    // + el ke antrean
    enqueue(element) 
    {
        this.items.push(element);
        console.log(`${element} telah ditambahkan ke antrean.`);
    }

    // hap el di depan antrean
    dequeue() 
    {
        if (this.isEmpty()) 
        {
            console.log("Antrean kosong! Tidak ada elemen yang bisa dihapus.");
            return null;
        }
        const removed = this.items.shift();
        console.log(`${removed} telah dihapus dari antrian.`);
        return removed;
    }

    // lihat el terdepan tanpa menghapus
    front() 
    {
        if (this.isEmpty()) 
        {
            console.log("Antrean kosong.");
            return null;
        }
        console.log(`Elemen Terdepan adalah: ${this.items[0]}`);
        return this.items[0];
    }

    // cek apakah antrean kosong
    isEmpty() 
    {
        return this.items.length === 0;
    }

    // tampil ukuran antrean
    size() 
    {
        console.log(`Ukuran antrian saat ini: ${this.items.length}`);
        return this.items.length;
    }

    // tampil semua el dalam antrean
    printQueue() 
    {
        if (this.isEmpty()) 
        {
            console.log("Antrian Kosong");
        }
         else 
        {
            console.log("Isi Antrian:", this.items.join(" < "));
        }
    }
}

// --- Percobaan ---
const queue = new Queue();


queue.enqueue("Mahasiswa A");
queue.enqueue("Mahasiswa B");
queue.enqueue("Mahasiswa C");

queue.printQueue();
queue.front();
queue.dequeue();
queue.printQueue();
queue.size();
