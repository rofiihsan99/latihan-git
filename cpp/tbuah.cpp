#include <iostream>
using namespace std;

int main() {

	// jumlah
	int japel = 4;
	int jjeruk = 6;
	int jpisang = 8;
	// harga
	int hapel = 80000;
	int hjeruk = 5000;
	int hpisang = 3000;
	// uang ygbeli
	int bayar = 150000;
	// harga sebelum diskon, total
	int tapel = japel * hapel;
	int tjeruk = jjeruk * hjeruk;
	int tpisang = jpisang * hpisang;
	int tsDiskon = tapel +tjeruk + tpisang;
	// diskon + bayar
	double diskon = 0.0;
	double total = 0.0;
	// cek syaratDiskon
	if (tsDiskon > 100000) {
		diskon = 0.10 * tsDiskon;
	} else {diskon = 0.0;}  
	total = 0.10 * tsDiskon; 
	// hitung kembalian
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
	cout << "Total Harus Dibayar	: Rp " << diskon << endl;
	cout << "Uang Tunai Pelanggan	: Rp " << total << endl;
	cout << endl;
	cout << "Uang Kembalian		: Rp " << total << endl;	
	cout << "Terima kasih Atas kunjungan Anda" << endl;
	
}
