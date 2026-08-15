#include <iostream>
using namespace std;

int main() {

	int angka[] = {12, 45, 7, 92, 31};
	int besar = angka[0];

	for(int i = 1; i < 5; i++) {
		if(angka[i] > besar) {besar = angka[i];}	
	}
		cout << "Nilai Terbesar: " << besar << endl;
}
