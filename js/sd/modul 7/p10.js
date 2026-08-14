const fs = require("fs");
const prompt = require("prompt-sync")();

// fungsi mergesort
function mergeSort(arr, key) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), key);
    const right = mergeSort(arr.slice(mid), key);

    return merge(left, right, key);
}

function merge(left, right, key) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i][key] < right[j][key]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j)); 
}

// input file csv
const fileName = prompt("Masukkan nama file CSV: ");

try {
    const data = fs.readFileSync(fileName, "utf-8");

    // parsing csv secara sederhana
    const lines = data.trim().split("\n");
    
    const dataset = lines.slice(1).map(row => {
        const cols = row.split(",");
        return {
            nama: cols[0],
            nim: cols[1],
            matkul: cols[2],
            nilai: parseInt(cols[3])
        };
    });

    // pilih kolom u/ sorting
    console.log("\nKolom yang dapat di-Sort: nama | nim | matkul | nilai");
    const key = prompt("Urutkan Berdasarkan: ");

    if (!["nama", "nim", "matkul", "nilai"].includes(key)) {
        console.log("kolom tidak valid!");
        process.exit();
    }

    // 4. Proses Merge Sort
    const sortedData = mergeSort(dataset, key);
    console.log(`\nData setelah Merge Sort berdasarkan '${key}':`);
    console.table(sortedData);

} catch (err) {
    console.error("Error membaca file:", err.message);
}
