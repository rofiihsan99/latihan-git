// 1. Menambah elemen gak dihapus
let nums = [1, 2, 3, 7, 8, 9];
// splice(index mulai, jumlah dihapus, elemen baru...)
nums.splice(3, 0, 5, 6);
console.log("Nums setelah ditambah:", nums);

// 2. Ganti elemen
let warna = ["merah", "kuning", "hijau"];
// Menghapus 1 elemen di index 1 ("kuning") dan menggantinya dengan "biru"
warna.splice(1, 1, "biru");
console.log("Warna setelah diganti:", warna);

// 3. pisahkan Array, hapus & ambil
let itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];

// hapus 3 elemen, dari index 3 & simpan di variabel baru
let dmpDept = itDiv.splice(3, 3);
let cisDept = itDiv; // Sisa elemen, ada di array asli

console.log("dmpDept (Elemen yang diambil):", dmpDept);
// Output: Raymond, Cynthia, Danny
console.log("cisDept (Sisa elemen asli):", cisDept);
// Output: Mike, Clayton, Terrill, Jennifer
