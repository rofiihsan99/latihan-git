const fs = require('fs');
const prompt = require('prompt-sync')();

// baca dan parsing csv 
function readCSV(filePath) {
	const data = fs.readFileSync(filePath, 'utf-8');
	const rows = data.trim().split('\n');
	const headers = rows[0].split(',');

	const dataset = [];

	for (let i = 1; i < rows.length; i++) {
		const values = rows[i].split(',');

		const record = {};
		headers.forEach((h, idx) => {
		record[h.trim()] = values[idx].trim();
		});

		dataset.push(record);
	} 
	return dataset;
}

// func binarySearch berdasarkan data tertentu
function binarySearch(sortedData, key, field) {
	let left = 0;
	let right = sortedData.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		let midVal = sortedData[mid][field].toLowerCase();
		let searchKey = key.toLowerCase();

		if (midVal === searchKey) {
			return mid; // conected
		}

		if (searchKey < midVal) {
			right = mid -1;
		} else {
			left = mid + 1;
		}
	}
	return -1; // disconected
}

// KODE
console.log("=== BINARY SEARCH DATA MAHASISWA (CSV) ===");

// baca csv
let dataset = readCSV("data.csv");

console.log("Data berhasil dibaca! Total data:",
dataset.length);

// input field search
console.log("\nSearch Berdasarkan");
console.log("1. nama");
console.log("2. nim");
console.log("3. matkul");
console.log("4. nilai");

let pilihan = prompt("Masukkan pilihan (1-4):");

// map input ke nama f.ield csv
let fieldMap = {
	"1": "nama",
	"2": "nim",
	"3": "matkul",
	"4": "nilai"
};

let field = fieldMap[pilihan];
if (!field) {
	console.log("Pilihan tidak valid!");
	process.exit();
}

// input nilai search
let key = prompt(`Masukkan ${field} yang ingin dicari:`);

// sort data berdasarkan field
dataset.sort((a, b) =>
a[field].toLowerCase().localeCompare(b[field].toLowerCase()));

// lakukan binary search
let resultIndex = binarySearch(dataset, key, field);

// tampilkan output
if (resultIndex !== -1) {
	console.log("\nDATA KETEMU!");
	console.table(dataset[resultIndex]);
} else {console.log("\nData tidak ditemukan di dataset.");}
