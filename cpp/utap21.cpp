#include <iostream>
using namespace std;

int main() {

	int angka[] = {2, 4, 6, 8, 10};
	int total = 0;

	for(int i = 0; i < 5; i++) {total += angka[i];}
	cout << "Jumlah Seluruh Elemen Array : " << total << endl;
}
