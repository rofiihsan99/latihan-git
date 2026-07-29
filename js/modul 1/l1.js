// var 2 angka
let angka1 = 15;
let angka2 = 4;

// operasi mtk
console.log("--- Operasi Arimatic ---");
console.log("Penjumlahan:", angka1 + angka2);
console.log("Pengurangan:", angka1 - angka2);
console.log("Perkalian:", angka1 * angka2);
console.log("Pembagian:", angka1 / angka2);
console.log("Sisa Bagi (Modulo):", angka1 % angka2);

// Var hasil & Tugas
let hasil = 10;
hasil += angka1 // =hasil =hasil + angka1
console.log("\n--- Operator Tugas ---");
console.log("Nilai hasil setelah += angka1:", hasil);

// banding 2 angka pembanding
console.log("\n--- Operator Banding ---");
console.log(angka1, "==", angka2, ":", angka1 == angka2);
console.log(angka1, ">", angka2, ":", angka1 > angka2);
console.log(angka1, "<", angka2, ":", angka1 < angka2);

// Var bool & logic
let benar = true;
let salah = false;

console.log("\n--- Operasi Logic ---");
console.log("Logic AND (&&):", benar && salah); // false
console.log("Logic OR (||):", benar || salah); // true
