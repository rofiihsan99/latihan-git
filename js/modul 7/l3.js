const prompt = require('prompt-sync')();

const kurikulum = {
    "CS1": { nama: "Pengantar Multimedia", prasyarat: [] },
    "CS2": { nama: "Moderasi Beragama", prasyarat: ["CS1"] },
    "CS3": { nama: "Kewarganegaraan", prasyarat: ["CS2"] },
    "CS4": { nama: "Struktur Data", prasyarat: ["CS3"] },
    "CS5": { nama: "BTQ", prasyarat: ["CS4"] },
    "CS6": { nama: "PIBA", prasyarat: ["CS5"] },
    "CS7": { nama: "Matematika Diskrit", prasyarat: ["CS6"] }
};

//  Menampilkan hubungan mata kuliah dalam format teks
 function tampilkanGraf() {
    console.log("\n=== Diagram Hubungan Mata Kuliah ===");
    for (const [kode, data] of Object.entries(kurikulum)) {
        const pra = data.prasyarat.length > 0 ? ` <-- Prasyarat: ${data.prasyarat.join(", ")}` : "";
        console.log(`[${kode}] ${data.nama}${pra}`);
    }
    console.log("====================================\n");
}

 // Implementasi untuk Topological Sort
function kahnAlgorithm() {
    const inDegree = {};
    const adj = {};
    const mataKuliah = Object.keys(kurikulum);

    // Inisialisasi
    mataKuliah.forEach(mk => {
        inDegree[mk] = 0;
        adj[mk] = [];
    });

    // Membangun Graf (Adjacency List)
    mataKuliah.forEach(mk => {
        kurikulum[mk].prasyarat.forEach(pra => {
            adj[pra].push(mk);
            inDegree[mk]++;
        });
    });

    // Antrean mata kuliah yang siap diambil
    const queue = mataKuliah.filter(mk => inDegree[mk] === 0);
    const urutan = [];

    while (queue.length > 0) {
        const u = queue.shift();
        urutan.push(u);

        adj[u].forEach(v => {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        });
    }

    return urutan;
}

// runing
tampilkanGraf();

const hasil = kahnAlgorithm();

if (hasil.length === Object.keys(kurikulum).length) {
    console.log("Urutan pengambilan mata kuliah yang disarankan:");
    console.log(hasil.map(kode => `${kode} (${kurikulum[kode].nama})`).join(" -> "));
} else {
    console.log("Error: Terdeteksi siklus pada kurikulum! Urutan tidak valid.");
}

prompt("\nTekan Enter untuk keluar...");
