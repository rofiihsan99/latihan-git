// buat obj mhs
let mahasiswa =
{
    nama: "rofiihsan",
    nim: "60225018",
    jurusan: "Informatika",
    angkatan: 2024,
    alamat: "Jl. Angkatan 66 No.421, Pekalongan",
    wa: "087719778703",
};

// tampile s field dg console
console.log("\n--- Data Lengkap Mahasiswa ---");
console.log("Nama :", mahasiswa.nama);
console.log("Alamat :", mahasiswa.alamat)

// + new field
mahasiswa.gmail = "rofiihsan@gmail.com";

// rubah angkatan
mahasiswa.angkatan = 2025;

// hapus field jurusan
delete mahasiswa.jurusan;

// hasil akhir setelah dirubah
console.log("\n--- Data Mahasiswa Terbaru ---");
console.log(mahasiswa);
