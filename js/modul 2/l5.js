// 1. array 5 nama teman
let temanSekelas = ["Alfi", "Alfin", "Kamal", "Pandu", "Pasha"];
console.log("Array awal:", temanSekelas);

// 2. Tambah 2 nama di akhir array
temanSekelas.push("Andika", "Arga");

// 3. Tambah 1 nama di awal array
temanSekelas.unshift("Zaki");
console.log("Setelah penambahan:", temanSekelas);

// 4. Hapus nama terakhir dg pop
let namaTerakhir = temanSekelas.pop();
console.log("Rizal", namaTerakhir);

// 5. output semua nama dg loop for of
console.log("--- Daftar Nama Teman ---");
for (let nama of temanSekelas) {
    console.log(nama);
}

// 6. Cari index dari salah satu teman,
let target = "Andika";
let indeks = temanSekelas.indexOf(target);
console.log(`Index dari "${target}" adalah: ${indeks}`);

// 7. Urutkan nama-nama
temanSekelas.sort();
console.log("Array setelah diurutkan", temanSekelas);
