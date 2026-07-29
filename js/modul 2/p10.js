let nilai = [60, 85, 90, 45, 70];

// map = buat array baru dg hasil operasi
let nilaiPlus10 = nilai.map(n => n + 10);
console.log("Nilai setelah ditambah 10:", nilaiPlus10);

// filter = meng ambil nilai >= 70
let lulus = nilai.filter(n => n >= 70);
console.log("Nilai yang lulus:", lulus);

// reduce = menjumlahkan semua nilai
let total = nilai.reduce((acc, n) => acc + n, 0);
console.log("Total nilai:", total);
