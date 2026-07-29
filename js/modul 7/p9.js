const fs = require('fs');
const prompt = require('prompt-sync')();

// Input nama file csv
const fileName = prompt("Masukkan nama file CSV: ");

try {
    // Baca isi file
    const raw = fs.readFileSync(fileName, 'utf8');

    // Pisahkan baris csv
    const rows = raw.trim().split("\n");

    // Convert setiap baris csv menjadi objek
    let data = rows.slice(1).map(row => {
        const cols = row.split(","); 
        return {
            nama: cols[0],
            nim: cols[1], 
            matkul: cols[2],
            nilai: parseInt(cols[3])
        };
    });

    console.log("\n=== PILIH KOLOM UNTUK SELECTION SORT ===");
    console.log("1. Nama");
    console.log("2. NIM");
    console.log("3. Mata Kuliah");
    console.log("4. Nilai");

    const choice = parseInt(prompt("Pilihan: "));

    let key;
    if (choice === 1) key = "nama";
    else if (choice === 2) key = "nim";
    else if (choice === 3) key = "matkul"; 
    else key = "nilai";

    // Implementasi Selection Sort
    function selectionSort(arr, key) {
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i; 

            for (let j = i + 1; j < n; j++) {
               
                if (typeof arr[j][key] === 'string' 
                    ? arr[j][key].localeCompare(arr[minIndex][key]) < 0 
                    : arr[j][key] < arr[minIndex][key]) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                console.log(`Menukar ${arr[i][key]} dengan ${arr[minIndex][key]}`);
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }

    // Jalankan sorting
    selectionSort(data, key);

    // Tampilkan hasil
    console.log("\n=== HASIL SELECTION SORT ===");
   console.log("Nama".padEnd(10) + "NIM".padEnd(12) + "Makul".padEnd(25) + "Nilai");
   
   data.forEach(d => {
      
       console.log(
       	d.nama.padEnd(10) + 
        d.nim.padEnd(12) + 
        d.matkul.padEnd(25) + 
        d.nilai
       );
   });

} catch (err) {
    console.error("Terjadi kesalahan: ", err.message);
}
