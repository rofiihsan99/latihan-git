#include <iostream>
#include <iomanip>
using namespace std;

int main() {
	int pilih, jumlah, harga, total;
	string barang;
	
	cout << "=== TOKO SAN ===" << endl;
	cout << "1. Buku, 10.000 " << endl;
	cout << "2. Bolpoin, 5.000 " << endl;
	cout << "3. Tipe-x, 7.000 " << endl;

	cout << "\nPilih barang, 1-3: ";
	cin >> pilih;

	cout << "Jumlah Beli: ";
	cin >> jumlah;

	if (jumlah <= 0) {
		cout << "Jumlah beli tidak valid." << endl;
		return 0;
	}
	
	switch(pilih) {
		case 1:
			barang = "Buku";
			harga = 10000;
			break;

		case 2:
			barang = "Bolpoin";
			harga = 5000;
			break;

		case 3:
			barang = "Tipe-X";
			harga = 7000;
			break;

		default:
			cout << "barang tidak tersedia." << endl;
			return 0;	
	}

	total = harga * jumlah;

	cout <<"===== STRUK PEMBELIAN =====" << endl;
	cout << left <<  setw(10) << "Barang" << ": " << barang << endl;
	cout << left << setw(10) << "Harga" << ": " << harga << endl;
	cout << left << setw(10) << "Jumlah" << ": " << jumlah << endl;
	cout << "============================" << endl;
	cout << "Terima Kasih Telah Berbelanja di TOKO SAN";
}
