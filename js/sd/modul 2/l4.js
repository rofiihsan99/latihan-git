// array nama mahasiswa
const daftarMahasiswa = ["Alfi", "Kamal", "Pasha", "Alvin", "Pandu"];

console.log("Nama Mahasiswa:", daftarMahasiswa);
console.log("====================================");

// 1. Menggunakan includes, periksa elemen di Array t/f
const cariAndika = daftarMahasiswa.includes("Andika");
console.log("Apakah ada nama: Andika ?", cariAndika);

// 2. Menggunakan indexOf, cari indeks Jika tidak ada, hasilnya -1
const indeksPertamaArga = daftarMahasiswa.indexOf("Arga");
console.log("Indeks pertama nama: Arga", indeksPertamaArga);

// 3. Menggunakan lastIndexOf, cari indeks akhir
const indeksTerakhirArga = daftarMahasiswa.lastIndexOf("Arga");
console.log("Indeks terakhir nama: Arga", indeksTerakhirArga);

// jika data tidak ada
const cariZaki = daftarMahasiswa.indexOf("Zaki");
console.log("Indeks nama: Zaki (tidak ada):", cariZaki);
