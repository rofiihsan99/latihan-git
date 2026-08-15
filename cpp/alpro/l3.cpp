#include <iostream>
using namespace std;

int main()
{
	int jumlahData;

	cout << "Masukkan Jumlah Elemen Array: " << endl;
	cin >> jumlahData;

	// arr sesuai input
	int angka[jumlahData];

	// pros input elemen arr
	for(int i = 0; i < jumlahData; i++)
	{
		cout << "Masukkan Angka ke-" << i + 1 << ": ";
		cin >> angka[i];
	}
	cout << "\nData berhasil Disimpan!" << endl;
	// car angka tertntu
	int cari;
	bool ketemu = false;

	cout << "Masukkan angka yang akan dicari: ";
	cin >> cari;

	for(int i = 0; i < jumlahData; i++)
	{
		if(angka[i] == cari)
		{
			cout << "Angka " << cari << " ditemukan diindex ke- " << i << endl;
			ketemu = true;
			break;
		}		
	}
	if(!ketemu)
	{
		cout << "Maaf, angka " << cari << " tidak ada dalam array." << endl;
	}
	
}
