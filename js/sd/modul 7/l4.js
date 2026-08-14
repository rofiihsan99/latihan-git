const fs = require('fs');
const prompt = require('prompt-sync')();

// 1. Fungsi Sorting
function bubbleSort(arr, ascending = true) {
    let data = [...arr];
    let n = data.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let condition = ascending ? data[j] > data[j + 1] : data[j] < data[j + 1];
            if (condition) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];
            }
        }
    }
    return data;
}

function selectionSort(arr, ascending = true) {
    let data = [...arr];
    let n = data.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            let condition = ascending ? data[j] < data[minIdx] : data[j] > data[minIdx];
            if (condition) minIdx = j;
        }
        [data[i], data[minIdx]] = [data[minIdx], data[i]];
    }
    return data;
}

// 2. Input dan Eksekusi
const fileName = prompt('Masukkan nama file CSV: ');
const order = prompt('Pilih urutan (asc/desc): ').toLowerCase() === 'asc';

try {
    const rawData = fs.readFileSync(fileName, 'utf8');
    const dataset = rawData.split('\n').map(row => parseFloat(row.trim())).filter(val => !isNaN(val));

    if (dataset.length < 1000) {
        console.log("Peringatan: Data kurang dari 1000.");
    }

    // Benchmark
    console.time('Bubble Sort Time');
    const resBubble = bubbleSort(dataset, order);
    console.timeEnd('Bubble Sort Time');

    console.time('Selection Sort Time');
    const resSelection = selectionSort(dataset, order);
    console.timeEnd('Selection Sort Time');

    // 4. Tabel Hasil
    console.table([
        { Algoritma: 'Bubble Sort', 'Jumlah Data': dataset.length },
        { Algoritma: 'Selection Sort', 'Jumlah Data': dataset.length }
    ]);

    // 5. Export CSV
    fs.writeFileSync('sorting.csv', resSelection.join('\n'));
    console.log('Hasil telah disimpan ke sorting.csv');

} catch (err) {
    console.error('Error membaca file:', err.message);
}
