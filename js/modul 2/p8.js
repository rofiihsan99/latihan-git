var buah = ["Apel", "Mangga", "Pisang", "Jeruk"];

console.log("Loop dengan for: ");
for (let i = 0; i < buah.length; i++) {
    console.log(i + ":", buah[i]);
}

console.log("Loop dengan for of: ");
for (let b of buah) {
    console.log(b);
}
