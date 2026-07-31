#include <iostream>
#include <limits>

using namespace std;

int main() {
	int pilihan, jenis, lama;
	int pendapatan = 0;
	int jmotor = 0;
	int jmobil = 0;

	do {
		cout << "\n=== PROGRAM PARKIR SEDERHANA ===" << endl;
		cout << " 1, Masuk parkir" << endl;
		cout << " 2. Lihat rekap & keluar" << endl;
		cout << " Pilihan (1/2): ";

		if (!(cin >> pilihan)) {
			cout << "Input tidak valid! harap masukkan angka." << endl;
			cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n');
			continue;
		}

		if (pilihan == 1) {
			cout << "\npilih jenis kendaraan: " << endl;
			cout << "1. Motor (Rp 2.000 perjam) " << endl;
			cout << "2. Mobil (Rp 5.000 perjam) " << endl;
			cout << "Masukkan Pilihan (1/2): ";

			if (!(cin >> jenis)) {
				cout << "Input tidak valid! kembali ke menu utama." << endl;
				cin.clear();
				cin.ignore(numeric_limits<streamsize>::max(), '\n');
				continue; 
			}

			cout << "Masukkan lama parkir (jam): ";
			if (!(cin >> lama) || lama < 0) {
				cout << "Lama parkir tidak valid! kembali ke menu utama." << endl;
				cin.clear();
				cin.ignore(numeric_limits<streamsize>::max(), '\n');
				continue;
			}
			
			if (jenis == 1) {
				int bayar = lama * 2000;
				pendapatan = pendapatan + bayar;
				jmotor++;
				cout << "Biaya parkir motor: Rp " << bayar << endl;
			}

			else if (jenis == 2) {
				int bayar = lama * 5000;
				pendapatan = pendapatan + bayar;
				jmobil++;
				cout << "Biaya parkir mobil Rp. " << bayar << endl;
			}

			else { cout << "Pilihan anda salah, pilihlah (1/2): " << endl;}
		}

		else if (pilihan == 2) {
			cout << "\n=== REKAP PARKIR === " << endl;
			cout << "Total Motor masuk : " << jmotor << endl;
			cout << "Total mobil masuk : " << jmobil << endl;
			cout << "Total pendapatan Rp : " << pendapatan << endl;
			cout << "Terima Kasih, Atas Kunjungan Anda! " << endl;
		}

		else { cout << "Pilihan Tidak Valid! " << endl;}
	}
	
	while (true);
}
