const fs = require('fs');
const prompt = require('prompt-sync')();

// input nama file csv
const fileName = prompt("Masukkan nama file CSV: ");

try {
    // baca file csv
    const raw = fs.readFileSync(fileName, 'utf8');

    // pisahkan baris
    const rows = raw.trim().split('\n');

    // parsing csv jadi array of objects
    let data = rows.slice(1).map(row => {
        const cols = row.split(','); 
        return {
            nama: cols[0],
            nilai: parseInt(cols[1]),
            umur: parseInt(cols[2])
        };
    });

    // pilih kolom untuk sorting 
    console.log("\nPilih kolom untuk Insertion Sort:");
    console.log("1. Nama");
    console.log("2. Nilai");
    console.log("3. Umur");

    let choice = parseInt(prompt("pilihan: "));
    let key = choice === 1 ? "nama" : choice === 2 ? "nilai" : "umur";

    // implementasi insertion sort
    function insertionSort(arr, key) {
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;

            // perbandingan
            while (j >= 0 && arr[j][key] > current[key]) {
                console.log(`Menggeser ${arr[j][key]} ke posisi ${j + 1}`);
                arr[j + 1] = arr[j];
                j--;
            }
            
            arr[j + 1] = current;
            console.log(`Menempatkan ${current[key]} pada posisi ${j + 1}`);
        }
    }

    // Jalankan sorting
    insertionSort(data, key);

    // Tampilkan hasil
    console.log("\n=== DATA SETELAH INSERTION SORT ===");
    console.log("Nama\tNilai\tUmur");
    data.forEach(d => {
        console.log(`${d.nama}\t${d.nilai}\t${d.umur}`);
    });

} catch (err) {
    console.error("Terjadi kesalahan: ", err.message);
}
