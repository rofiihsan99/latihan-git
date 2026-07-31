#include <iostream>
using namespace std;

int main() {

	int matriks[3][3] = {
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9}
	};
	
	int duaBaris = 0;

	for(int j = 0; j < 3; j++) {duaBaris += matriks[1][j];}

	cout << "Jumlah Elemen Baris Kedua: " << duaBaris << endl;
}
