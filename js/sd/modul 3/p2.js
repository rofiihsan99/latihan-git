var mahasiswa =
{
    nama: "Indra Kurniawan",
    npm: "06110111",
    jurusan: "Teknologi Informasi",
    angkatan: 2020
};

// akses field di record
console.log("Nama: " + mahasiswa.nama);
console.log("NPM: " + mahasiswa.npm);

// + new field
mahasiswa.email = "indra.kurnia@yahoo.com";

// ubah n field
mahasiswa.angkatan = 2021;

// tam record
console.log(mahasiswa);
