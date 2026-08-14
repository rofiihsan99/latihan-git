// 1. Menyimpan 3 nilai ujian ke dalam array menggunakan assignment statement
let nilaiUjian = [];
nilaiUjian[0] = 80; // 1 = 0
nilaiUjian[1] = 90; // 2 = 1
nilaiUjian[2] = 75; // 3 = 2

// 2. akses ke array u/ menghitung semua nilai & memanggil indeks 1 per 1
let totalNilai = nilaiUjian[0] + nilaiUjian[1] + nilaiUjian[2];

// 3. Hitung Rata
let rataRata = totalNilai / nilaiUjian.length;

// output
console.log("Daftar Nilai:", nilaiUjian);
console.log("Total Nilai:", totalNilai);
console.log("Rata-rata Nilai:", rataRata);
