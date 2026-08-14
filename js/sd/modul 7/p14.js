const fs = require('fs');
const prompt = require('prompt-sync')();


// read file csv
function readCSV(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.trim().split('\n');

    // Header off, baris pertama dilewati
    return lines.slice(1).map(line => {
        const [nama, nim, makul, nilai] = line.split(',');

        return {
            nama: nama.trim(),
            nim: nim.trim(),
            makul: makul.trim(),
            nilai: Number(nilai.trim())
        };
    });
}

// Mengembalikan Semua Hasil
function binarySearchAll(arr, target, key) {
    let left = 0;
    let right = arr.length - 1;
    let foundIndex = -1;

    // Mencari satu posisi target
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid][key] === target) {
            foundIndex = mid;
            break;
        } else if (arr[mid][key] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Jika tidak ditemukan
    if (foundIndex === -1) {
        return [];
    }

    const results = [];

    // Scan ke kiri untuk mencari data duplikat
    let i = foundIndex;
    while (i >= 0 && arr[i][key] === target) {
        results.push(arr[i]);
        i--;
    }

    // Scan ke kanan untuk mencari data duplikat
    i = foundIndex + 1;
    while (i < arr.length && arr[i][key] === target) {
        results.push(arr[i]);
        i++;
    }

    return results;
}

// program utama
const filename = "data.csv";
let data = readCSV(filename);

console.log("Data berhasil dibaca:", data.length, "baris");

// Memilih field pencarian
let key = prompt(
    "Cari berdasarkan field (nama/nim/makul/nilai): "
).trim();

// Validasi field
if (!['nama', 'nim', 'makul', 'nilai'].includes(key)) {
    console.log("Field tidak valid!");
    process.exit();
}

// Input nilai yang dicari
let target = prompt("Masukkan nilai pencarian: ").trim();

if (key === "nilai") {
    target = Number(target);
}

// Mengurutkan data sesuai field yang dipilih
data.sort((a, b) => {
    if (typeof a[key] === "number") {
        return a[key] - b[key];
    }

    return a[key].localeCompare(b[key]);
});

console.log("\nData telah diurutkan berdasarkan:", key);

// Melakukan Binary Search
const results = binarySearchAll(data, target, key);

// Menampilkan hasil pencarian
if (results.length === 0) {
    console.log("\nData tidak ditemukan");
} else {
    console.log(`\nDitemukan ${results.length} hasil:\n`);
    console.table(results);
}
