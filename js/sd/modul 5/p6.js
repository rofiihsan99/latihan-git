const fs = require('fs');

// Jembatan agar fungsi prompt() bisa jalan di terminal
function prompt(question) {
    process.stdout.write(question);
    const buffer = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, buffer, 0, 1024);
    return buffer.toString('utf8', 0, bytesRead).trim();
}

class PriorityQueue 
{
    constructor() 
    {
        this.items = [];
    }

    // + el berdasarkan prioritas
    enqueue(element, priority) 
    {
        const queueElement = { element, priority };
        let added = false;

        // Sisipkan: angka kecil = prioritas tinggi
        for (let i = 0; i < this.items.length; i++) 
        {
            if (queueElement.priority < this.items[i].priority) 
            {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        // Jika rendah, masuk ke belakang
        if (!added) 
        {
            this.items.push(queueElement);
        }
    }

    // Menghapus el dg prio tertinggi 
    dequeue() 
    {
        if (this.isEmpty()) 
        {
            console.log("Antrian kosong!");
            return null;
        }

        const removed = this.items.shift();
        console.log(`\nPasien "${removed.element}" (prioritas ${removed.priority}) sedang dilayani....`);
        return removed;
    }

    // Menampilkan daftar antrian
    printQueue() 
    {
        console.log("\n=== DAFTAR ANTRIAN IGD ===");
        if (this.isEmpty()) 
        {
            console.log("Tidak ada pasien dalam antrian.");
        }

        else 
        {
            this.items.forEach((item, index) => 
            {
                console.log(`${index + 1}. ${item.element} (Prioritas: ${item.priority})`);
            });
        }
    }

    isEmpty() 
    {
        return this.items.length === 0;
    }

    size() 
    {
        return this.items.length;
    }
}

// Simulasi Antrian
const queue = new PriorityQueue();
let pilihan;

do 
{
    console.log("\n=== SISTEM ANTRIAN IGD ===");
    console.log("1. Tambah pasien");
    console.log("2. Pelayanan pasien");
    console.log("3. Lihat antrian");
    console.log("4. Keluar");

    pilihan = prompt("Pilihan (1-4): ");

    switch (pilihan) 
    {
        case "1":
            const nama = prompt("Masukkan nama pasien: ");
            const inputPrio = prompt("Masukkan prioritas (1 = Darurat, 2 = Sedang, 3 = Ringan): ");
            const prio = parseInt(inputPrio);
            if (!isNaN(prio)) 
            {
                queue.enqueue(nama, prio);
                console.log(`Pasien "${nama}" ditambahkan.`);
            } 

            else 
            {
                console.log("Input prioritas harus berupa angka!");
            }
            break;

        case "2":
            queue.dequeue();
            break;

        case "3":
            queue.printQueue();
            break;

        case "4":
            console.log("Program selesai. Semoga lekas membaik!");
            break;

        default:
            console.log("Pilihan tidak valid!");
    }
} while (pilihan !== "4");
