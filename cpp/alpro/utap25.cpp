#include <iostream>
using namespace std;

int main() {

	int angka[] = {3, 8, 12, 7, 10, 15, 22};
	int genap = 0;

	for(int i = 0; i < 7; i++) {
		if(angka[i] % 2 == 0) {genap++;}
	}

	cout << "Jumlah Bilangan Genap: " << genap << endl;
}
