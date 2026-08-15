// produk toko
const daftarProduk = {
	"P001": { nama: "Beras 5kg", harga: 65000 },
	"P002": { nama: "Minyak Goreng 2L", harga: 38000 },
	"P003": { nama: "Gula Pasir 1kg", harga: 14500 },
	"P004": { nama: "Telur 1kg", harga: 28000 },
	"P005": { nama: "Mie instan (dus)", harga: 110000 },
};

// transaksi toko
class kasirToko {
	constructor() {
		this.keranjang = [];
	}
	
	// + produk -> keranjang
	tambahItem(kodeProduk, jumlah) {
		const produk = daftarProduk[kodeProduk];
		if (!produk) {
			console.log(`produk dengan kode ${kodeProduk} tidak ditemukan!`);
			return;
		}

		// fix produk -> keranjang
		const itemAda = this.keranjang.find(item => item.kode === kodeProduk);
		if (itemAda) {
			itemAda.jumlah += jumlah;
			
		} else {
			this.keranjang.push({
				kode: kodeProduk,
				nama: produk.nama,
				hargaSatuan: produk.harga,
				jumlah: jumlah
			});
		}
		console.log(`ditambahkan: ${jumlah}x ${produk.nama}`);
	}

	// hitung total belanja
	hitungTotal() {
		return this.keranjang.reduce((total, item) => total + (item.hargaSatuan * item.jumlah), 0);
	}

	// struk pembayaran
	prosesPembayaran(uangBayar) {
		const totalBelanja = this.hitungTotal();

		console.log("=======================================");
		console.log("           === STRUK BELANJA ===       ");
		console.log("=======================================");

		this.keranjang.forEach((item, index) => {
			const subtotal = item.hargaSatuan * item.jumlah;
			console.log(`${index + 1}. ${item.nama}`);
			console.log(`   ${item.jumlah} x Rp ${item.hargaSatuan.toLocaleString().padEnd(6, ' ')} = Rp ${subtotal.toLocaleString()}`);
		});

		console.log("---------------------------------------");
		console.log(`TOTAL BELANJA  : Rp ${totalBelanja.toLocaleString()}`);
		console.log(`UANG BAYAR     : Rp ${uangBayar.toLocaleString()}`);

		if (uangBayar < totalBelanja) {
			const kekurangan = totalBelanja - uangBayar;
			console.log(`Uang Tidak Cukup! Kurang Rp ${kekurangan.toLocaleString()}`);
			console.log("=======================================");
			return false;
			
		} else {
			const kembalian = uangBayar - totalBelanja;
			console.log(`KEMBALIAN      : Rp ${kembalian.toLocaleString()}`);
			console.log("=======================================");
			console.log("     TERIMA KASIH TELAH BERBELANJA     ");
			console.log("=======================================\n");

			// selesai = keranjang harus kosong
			this.keranjang = [];
			return true;
		}
	}
}

// output program
const kasir = new kasirToko();

// pelanggan masukkan yang dibeli
kasir.tambahItem("P001", 1);
kasir.tambahItem("P002", 2);
kasir.tambahItem("P003", 3);

// proses bayar
kasir.prosesPembayaran(200000);
