#include <iostream>
using namespace std;

int main() {
	int jumlah = 0;
	int baris1 = 0;
	int baris2 = 0;

	int data[2][4] = {
		{2, 5, 10, 11},
		{6, 3, 5, 7}
	};

	int kecil = data[0][0];
	int besar = data[0][0];

	cout << "=== Data Matriks Asli ===" << endl;
	for (int i = 0; i < 2; i++) {
		for (int y = 0; y < 4; y++) {
			cout << data[i][y] << " ";

			jumlah += data[i][y];

			if (i == 0) baris1 += data[i][y];
			if (i == 1) baris1 += data[i][y];

			if (data[i][y] < kecil) kecil = data[i][y];
			if (data[i][y] < besar) besar = data[i][y];	
		}
		cout << endl;
	}
	float rataRata = (float)jumlah / 8;

	cout << "------------------------------" << endl;
	cout << "Total Data Array	:	" << endl;
	cout << "Total Data Baris 1	:	" << endl;
	cout << "Total Data Baris 2	:	" << endl;
	cout << "Nilai Terkecil 	:	" << endl;
	cout << "Nilai Terbesar		:	" << endl;
	cout << "Rata-rata Nilai	:	" << endl;
	cout << "------------------------------" << endl;

	cout << "Hasil Transpose (4x2):" << endl;
	int transpose[4][2];
	for (int i = 0; i < 4; i++) {
		for (int j = 0; j < 2; j++) {

			transpose[i][j] = data[j][i];
			cout << transpose[i][j] << " ";
		}
		cout << endl;
	}
	
}



