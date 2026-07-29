// Import modul
const fs = require("fs");
const prompt = require("prompt-sync")(); 

// Fungsi bubbleSort di kolom tertentu
function bubbleSortByKey(arr, key) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j][key] > arr[j + 1][key]) {
                // Tukar posisi antar objek
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// func baca file csv
function readCsvToObjects(filePath) {
    const content = fs.readFileSync(filePath, "utf8").trim();
    const lines = content.split("\n");
    const headers = lines[0].split(",").map((h) => h.trim());
    
    const data = lines.slice(1).map((line) => {
        const values = line.split(",").map((v) => v.trim());
        const obj = {};
        headers.forEach((h, i) => {
            obj[h] = isNaN(values[i]) || values[i] === "" ? values[i] : Number(values[i]);
        }); 
        return obj;
    }); 
    
    return { headers, data };
}

// Program utama
console.log("=== Program Bubble Sort Data Mahasiswa ===\n");

const fileName = prompt("Masukkan nama file CSV (contoh: namafile.csv): ");

try {
    const { headers, data } = readCsvToObjects(fileName);
    
    console.log("\nKolom yang tersedia:", headers.join(", "));
    const key = prompt("Masukkan nama kolom yang ingin diurutkan: ");
    
    if (!headers.includes(key)) {
        console.error("Kolom tidak ditemukan!");
        process.exit(1);
    }
    
    console.log("\nData sebelum diurutkan:");
    console.table(data);
    
    // Urutkan berdasarkan kolom yang dipilih
    const sorted = bubbleSortByKey(data, key);
    console.log("\nData setelah diurutkan berdasarkan kolom:", key);
    console.table(sorted);
    
} catch (err) {
    console.error("Terjadi kesalahan:", err.message);
}
