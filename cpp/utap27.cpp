#include <iostream>
using namespace std;

int main() {

	int angka[] = {3, 8, 12, 7, 10, 15, 22};
	int cari;
	int ketemu = -1;

	cout << "Masukkan Angka Yang dicari: " << endl;
	cin >> cari;

	for(int i = 1; i < 7; i++) {
		if(angka[i] == cari) {ketemu = i; break;}
	}

    if(ketemu != -1) {cout << "Angka Ditemukan Pada indeks ke- " << ketemu << endl;}
	else {cout << "Data tidak ditemukan " << endl;}
}
