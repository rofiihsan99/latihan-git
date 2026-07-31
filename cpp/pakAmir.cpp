#include <iostream>
#include <locale>

using namespace std;

int main()
{
	// pakai seting default sistem
	cout.imbue(locale(""));
	
	// deklarasi
	int tahun;
	int harga = 1000000, total, diskon = 0;

	// tamilkan input
	cout << "KONTRAKAN PAK AMIR " << endl;
	cout << "============================" << endl;
	cout << "Masukkan Durasi Sewa (Tahun) :";

	// meminta user memasukkan angka
	cin >> tahun;

	// pentotalan kali
	total = tahun * harga;

	// perhitungan
	if (tahun >= 3)
	{
	 // diskon 20%
		diskon = total * 0.2;
		
	} else if (tahun == 2)
	{
		// diskon 10%
		diskon = total * 0.1;
	}
	cout << "Total Bayar: Rp " << total - diskon;
}
