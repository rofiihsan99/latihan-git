const fs = require('fs');
const prompt = require('prompt-sync')();

// func linier search
function linearSearch(dataset, key) {
	for (let i = 0; i < dataset.length; i++) {
		if (
			dataset[i].nama.toLowerCase() === key.toLowerCase() ||
			dataset[i].nim === key ||
			dataset[i].matkul.toLowerCase() === key.toLowerCase() ||
			dataset[i].nilai === key
		) {
			return i; // pos dat ditemukn
		}
	}
	return -1; // data tidak ditemukan
} 

// baca file csv dan rubah ke arr obj
function readCSV(filePath) {
	const data = fs.readFileSync(filePath, 'utf-8');
	const rows = data.trim().split('\n');
	const headers = rows[0].split(',');
	const dataset = [];

	for (let i = 1; i < rows.length; i++) {
		const values = rows[i].split(',');
		const record = {};

		headers.forEach((h, idx) => {
		record[h.trim()] = values[idx] ? values[idx].trim() : "";
		});
		dataset.push(record);
	}
	return dataset;
}

// runing
console.log("=== SEARCH LINEAR DATA MAHASISWA (CSV) ===");

const dataset = readCSV('data.csv');
console.log("dataset berhasil dibaca.");

// input user
const key = prompt("Masukkan kata pencarian (nama, nim, makul, nilai):");

// pros runing
const result = linearSearch(dataset, key);

// hasil
if (result !== -1) {
	console.log("\nData ditemukan pada index:", result);
    console.log("Detail:");
    console.table(dataset[result]);
} else {
	console.log("\nData Tidak Ditemukan dalam Dataset.");
}

