const prompt = require("prompt-sync")({ sigint: true });

// Class Queue
class Queue 
{
    constructor() 
    {
        this.items = [];
    }

    // Tambah mahasiswa ke antrean
    enqueue(element) 
    {
        this.items.push(element);
        console.log(`\n[+] ${element} sudah masuk di antrean seminar.`);
    }

    // Mahasiswa maju seminar
    dequeue() 
    {
        if (this.isEmpty()) 
        {
            console.log("\n[!] Tidak ada mahasiswa dalam antrean.");
            return null;
        }
        const removed = this.items.shift();
        console.log(`\n[-] ${removed} sedang maju buat seminar.`);
        return removed;
    }

    // Tampilkan mahasiswa di depan antrean
    front() 
    {
        if (this.isEmpty()) 
        {
            console.log("\n[!] Tidak ada mahasiswa yang menunggu.");
            return null;
        }
        console.log(`\n[i] Mahasiswa berikutnya: ${this.items[0]}`);
        return this.items[0];
    }

    // Cek apakah antrean kosong
    isEmpty() {
        return this.items.length === 0;
    }

    // Jumlah antrean
    size() 
    {
        console.log(`\n[i] Jumlah mahasiswa dalam antrean: ${this.items.length}`);
        return this.items.length;
    }

    // Tampilkan semua antrean
    printQueue() 
    {
        if (this.isEmpty()) {
            console.log("\n[!] Antrean Kosong!");
        }
        else 
        {
            console.log("\n=== Daftar Antrean Seminar ===");
            this.items.forEach((mhs, index) => 
            {
                console.log(`${index + 1}. ${mhs}`);
            });
        }
    }
}

	// Program Utama
	const queue = new Queue();
	let running = true;

	while (running) 
{
    console.log("\n============================================");
    console.log("   ANTREAN SEMINAR MAHASISWA INFORMATIKA ");
    console.log("============================================");
    console.log("1. Tambah mahasiswa ke antrean");
    console.log("2. Mahasiswa maju seminar");
    console.log("3. Lihat mahasiswa paling depan");
    console.log("4. Lihat semua daftar antrean");
    console.log("5. Lihat jumlah total antrean");
    console.log("6. Keluar");

	const choice = prompt("Pilihan (1-6): ");

    switch (choice) 
    {
        case "1":
            const name = prompt("Masukkan nama mahasiswa: ");
            if (name) queue.enqueue(name);
            break;

        case "2":
            queue.dequeue();
            break;

        case "3":
            queue.front();
            break;

        case "4":
            queue.printQueue();
            break;

        case "5":
            queue.size();
            break;

        case "6":
            console.log("\nTerima kasih. Program seminar ditutup.");
            running = false;
            break;

        default:
            console.log("\n Pilihan tidak valid, silakan pilih 1-6.");
    }
}
