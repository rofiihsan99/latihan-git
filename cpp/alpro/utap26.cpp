#include <iostream>
using namespace std;

int main() {

	int angka[] = {3, 8, 12, 7, 10, 15, 22};
	int ganjil = 0;

	for(int i = 0; i < 7; i++) {
		if(angka[i] % 2 != 0) {cout << angka[i] << " "; ganjil++;}
	}

	cout << "\nTotal ada " << ganjil <<" Bilangan Ganjil " << endl;

}
