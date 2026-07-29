#include <iostream> 
using namespace std;

int main() {

	int angka[] = {25, 14, 56, 9, 42};
	int kecil = angka[0];

	for(int i = 1; i < 5; i++) {
		if(angka[i] < kecil) {kecil = angka[i];}
	}

	cout << "Nilai Terkecil: " << kecil << endl;
}
