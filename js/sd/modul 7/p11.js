const fs = require("fs");
const prompt = require("prompt-sync")();

// Implementasi Quick Sort
function quickSort(arr, key) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][key] < pivot[key]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
}

// Baca file CSV
const fileName = prompt("Masukkan nama file CSV: ");

try {
    const data = fs.readFileSync(fileName, "utf-8");

    const lines = data.trim().split("\n"); 
    
    // Parsing csv mnjd obj
    const dataset = lines.slice(1).map(row => {
        const cols = row.split(",");
        return {
            nama: cols[0],
            nim: cols[1],
            matkul: cols[2],
            nilai: parseInt(cols[3])
        };
    });

    console.log("\nData Awal: ");
    console.table(dataset);

    // Pilih kolom u/ sorting
    console.log("\nKolom yang bisa di-sorting: nama | nim | matkul | nilai");
    const key = prompt("Urutkan berdasarkan: ");

    if (!["nama", "nim", "matkul", "nilai"].includes(key)) {
        console.log("Kolom Tidak Valid!");
    } else {
        // Proses Quick Sort
        const sortedData = quickSort(dataset, key);

        console.log(`\nData setelah Quick Sort berdasarkan ${key}:`);
        console.table(sortedData);
    }
} catch (err) {
    console.error("Error membaca file:", err.message); 
}
