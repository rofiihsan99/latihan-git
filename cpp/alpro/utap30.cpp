#include <iostream>
using namespace std;

int main() {

	int matriks[2][3] = {
		{12, 45, 7},
		{92, 31, 18}
	};
	
	int besar = matriks[0][0];

	for(int i = 0; i < 2; i++) {
		for(int j = 0; j < 3; j++) {
			if(matriks[i][j] > besar) {besar = matriks[i][j];}
		}
	}
	cout << "Nilai Terbesar Dalam Matriks: " << besar << endl;
}
