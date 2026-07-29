// function mhs
function Mahasiswa(nama, nim, jurusan, angkatan)
{
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.angkatan = angkatan;

    // tampil Data
    this.tampilData = function()
    {
        console.log("Nama: " + this.nama);
        console.log("NIM: " + this.nim);
        console.log("Jurusan: " + this.jurusan);
    };

    // ubah jurusan
    this.ubahJurusan = function(jurusanBaru)
    {
        this.jurusan = jurusanBaru;
    };

    // tampil Angkatan
    this.tampilkanAngkatan = function()
    {
        console.log("Angkatan: " + this.angkatan);
    };
}

let mhs1 = new Mahasiswa("Ageng", "12345", "Ekonomi", 2023);
let mhs2 = new Mahasiswa("Alieyt", "67890", "Sistem Informasi", 2024);
let mhs3 = new Mahasiswa("Ihsan", "5018", "Informatika", 2025);

// Panggil fungsi
mhs1.tampilData();
mhs1.tampilkanAngkatan();
