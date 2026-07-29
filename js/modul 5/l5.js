const prompt = require('prompt-sync')({ sigint: true });

class Queue 
{
    constructor() 
    {
        this.items = [];
    }

    tambah(nama) 
    {
        this.items.push(nama);
        console.log(`[OK] ${nama} ditambahkan`);
    }

    ambil() 
    {
        return this.items.shift() || null;
    }

    kosong() 
    {
        return this.items.length === 0;
    }

    jumlah() 
    {
        return this.items.length;
    }

    tampil() 
    {
        if (this.kosong()) return console.log("[INFO] Antrian kosong");

        console.log("\nDaftar Antrian:");
        this.items.forEach((p, i) => console.log(`${i + 1}. ${p}`));
    }
}

// simulasi
function simulasi(nama) {
    console.log(`\nMemeriksa ${nama}...`);
    for (let i = 0; i <= 10; i++) 
    {
        process.stdout.write(`\rProgress: ${i * 10}%`);
        const t = Date.now() + 100;
        while (Date.now() < t) {}
    }
    console.log(`\nSelesai: ${nama}\n`);
}

function main() 
{
    const q = new Queue();

    while (true) 
    {
        console.log(`
1. Tambah pasien
2. Panggil pasien
3. Lihat antrian
4. Jumlah pasien
5. Keluar
        `);

        const pilih = prompt("Pilih: ");

        if (pilih === '1') {
            const nama = prompt("Nama: ");
            nama.trim() ? q.tambah(nama) : console.log("Nama kosong!");
        }

        else if (pilih === '2') {
            if (q.kosong()) console.log("Antrian kosong");
            else simulasi(q.ambil());
        }

        else if (pilih === '3') q.tampil();

        else if (pilih === '4') console.log(`Jumlah: ${q.jumlah()}`);

        else if (pilih === '5') break;

        else console.log("Pilihan salah");
    }

    console.log("Program selesai");
}

main();
