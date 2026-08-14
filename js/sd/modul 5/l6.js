const prompt = require('prompt-sync')();

class AntrianCS
{
    constructor()
    {
        this.items = [];
    }

    // Menambah pelanggan 
    tambahPelanggan(nama, prioritas)
    {
        let pelangganBaru = { nama, prioritas };
        let ditambahkan = false;

        for (let i = 0; i < this.items.length; i++)
        {
            if (pelangganBaru.prioritas < this.items[i].prioritas)
            {
                this.items.splice(i, 0, pelangganBaru);
                ditambahkan = true;
                break;
            }
        }

        if (!ditambahkan)
        {
            this.items.push(pelangganBaru);
        }
        
        this.tampilkanAntrian();
    }

    // Melayani pelanggan dengan prioritas tertinggi 
    layaniPelanggan()
    {
        if (this.items.length === 0)
        {
            console.log("\n[!] Antrian kosong, tidak ada pelanggan untuk dilayani.");
            return;
        }

        let diproses = this.items.shift();
        console.log(`\n>>> Melayani: ${diproses.nama} (Prioritas: ${diproses.prioritas})`);
        this.tampilkanAntrian();
    }

    // Menampilkan daftar antrian saat ini
    tampilkanAntrian()
    {
        console.log("\n========= DAFTAR ANTRIAN SAAT INI =========");
        if (this.items.length === 0)
        {
            console.log("( Kosong )");
        }
        else
        {
            this.items.forEach((p, index) => 
            {
                console.log(`${index + 1}. [Prio: ${p.prioritas}] ${p.nama}`);
            });
        }
        console.log("============================================\n");
    }
}

function main()
{
    const cs = new AntrianCS();
    let berjalan = true;

    while (berjalan)
    {
        console.log("--- SIMULASI TOKO ONLINE MAS SAN ---");
        console.log("1. Tambah Pelanggan");
        console.log("2. Layani Pelanggan");
        console.log("3. Keluar");
        
        let pilihan = prompt("Pilih menu: ");

        if (pilihan === "1")
        {
            let nama = prompt("Nama Pelanggan: ");
            console.log("Tingkat Keluhan:");
            console.log("1 = Error Sistem (Urgent)");
            console.log("2 = Produk Rusak");
            console.log("3 = Pertanyaan Umum");
            let prio = parseInt(prompt("Pilih tingkat (1-3): "));

            if (prio >= 1 && prio <= 3)
            {
                cs.tambahPelanggan(nama, prio);
            }
            else
            {
                console.log("[!] Prioritas tidak valid.");
            }
        }
        else if (pilihan === "2")
        {
            cs.layaniPelanggan();
        }
        else if (pilihan === "3")
        {
            console.log("Program selesai, Sampai jumpa good bye!");
            berjalan = false;
        }
        else
        {
            console.log("[!] Pilihan tidak ada.");
        }
    }
}

main();
