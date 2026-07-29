// import modul
const fs = require("fs");
const prompt = require("prompt-sync")();

// func bubble sort
function bubbleSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// tukar l jika crash urut
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

// baca file CSV dari user
let fileName = prompt("Masukkan nama file CSV (contoh: namafile.csv):");

// baca file 
try {
	const data = fs.readFileSync(fileName, "utf8");
	let arr = data
	.split("\n")
	.map((x) => x.trim())
	.filter((x) => x !== "")
	.map(Number);

	console.log("\nData sebelum diurutkan:");
	console.log(arr);

	// run bubble Sort
	let sorted =bubbleSort(arr);

	console.log("\nData setelah diurutkan:");
	console.log(sorted);
	
} catch (err) {
	console.error("Terjadi kesalahan saat membaca file:",err.message);
}
