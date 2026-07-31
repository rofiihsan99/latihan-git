#include <iostream>
using namespace std;

int main() {
	int jumlah = 0;
	int baris1 = 0;
	int baris2 = 0;
	int data[2][4] = {
		{2, 5, 10, 11},
		(6, 3, 5, 7)
	};

	for (int i = 0; i < 2; i++) {
		for (int y = 0; y < 4; y++) {
			cout << data[i][y] << " ";
			if (i == 0) {
				baris1 += data[i][y];
			}
			if ( i == 1) {
				baris2 += data[i][y];
			}
			jumlah += data[i][y];
		}
		cout << endl;
	}
	cout << "Total Data Array   : " << jumlah << endl;
	cout << "Total Data Baris 1 : " << baris1 << endl;
	cout << "Total Data Baris 2 : " << baris2 << endl;
	
}


