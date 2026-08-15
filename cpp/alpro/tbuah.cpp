#include <iostream>
#include <iomanip>

using namespace std;

int main() {

	// jumlah
	const int japel = 4;
	const int jjeruk = 6;
	const int jpisang = 8;
	// harga
	const int hapel = 80000;
	const int hjeruk = 5000;
	const int hpisang = 3000;
	// uang ygbeli
	const int bayar = 150000;
	// sub total
	int tapel = japel * hapel;
	int tjeruk = jjeruk * hjeruk;
	int tpisang = jpisang * hpisang;
	// total semuanya
	int tsDiskon = tapel + tjeruk + tpisang;
	// hitung diskon jika 100k
	double diskon = 0.0;
	if (tsDiskon > 100000) {
		diskon = 0.10 * tsDiskon;
	}
	// jml setelah diskon
	double total = tsDiskon - diskon;
	// hitubg kembalian
	double kembalian = bayar - total;
	// output
	cout << "===== TOKO BUAH BAHAGIA ===== " << endl;
	cout << "Rincian Pembelian:" << endl;
	cout << "1. Apel		: " << japel << " x Rp " << hapel << " x Rp " << tapel << endl;
	cout << "2. jeruk	: " << jjeruk << " x Rp " << hjeruk << " x Rp " << tjeruk << endl;
	cout << "3. Pisang	: " << jpisang << " x Rp " << hpisang << " x Rp " << tpisang << endl;
	cout << endl;
	cout << "Total Sebelum Diskon	: Rp " << tsDiskon << endl;
	cout << "Diskon (10%)		: Rp " << diskon << endl;
	cout << "Total Harus Dibayar	: Rp " << total << endl;
	cout << "Uang Tunai Pelanggan	: Rp " << bayar << endl;
	cout << endl;
	cout << "Uang Kembalian		: Rp " << kembalian << endl;	
	cout << "Terima kasih Atas kunjungan Anda" << endl;
	
}
