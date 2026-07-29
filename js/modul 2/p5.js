// Inisialisasi array awal
let buah = ["Apel", "Mangga", "Pisang", "Jeruk"];
console.log("Array Awal:", buah);

// 1. push(): Menambahkan elemen ke posisi terakhir
buah.push("Semangka");
console.log("Setelah push (tambah di akhir):", buah);

// 2. unshift(): Menambahkan elemen ke posisi pertama
buah.unshift("Durian");
console.log("Setelah unshift (tambah di awal):", buah);

// 3. pop(): Menghapus satu elemen terakhir
buah.pop();
console.log("Setelah pop (hapus di akhir):", buah);

// 4. shift(): Menghapus satu elemen pertama
buah.shift();
console.log("Setelah shift (hapus di awal):", buah);
