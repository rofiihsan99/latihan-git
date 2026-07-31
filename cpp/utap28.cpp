#include <iostream>
using namespace std;

int main() {

	int matriks[2][3] = {
		{3, 5, 1},
		{2, 4, 6}
	};
	int total = 0;

	for(int i = 0; i < 2; i++) {
		for(int j = 0; j < 2; j++) {total += matriks[i][j];}
	}

	cout << "Jumlah Seluruh Elemen Matriks: " << total << endl;
}
