class AntrianUjian
 {
  constructor()
  {
    this.antrian = [];
  }

  antrekan(mahasiswa) 
  {
    this.antrian.push(mahasiswa);
  }

  dequeue() 
  {
    return this.isEmpty()
      ? "Antrian kosong."
      : this.antrian.shift();
  }

  depan() 
  {
    return this.isEmpty()
      ? "Antrian kosong."
      : this.antrian[0];
  }

  isEmpty() 
  {
    return this.antrian.length === 0;
  }

  ukuran() 
  {
    return this.antrian.length;
  }
}

// mrnu utama
const antrian = new AntrianUjian();

antrian.antrekan("Andi");
antrian.antrekan("Budi");
antrian.antrekan("Citra");

console.log(antrian.depan());   // Andi
console.log(antrian.ukuran());  // 3

console.log(antrian.dequeue()); // Andi
console.log(antrian.dequeue()); // Budi
console.log(antrian.dequeue()); // Citra

console.log(antrian.isEmpty()); // true
