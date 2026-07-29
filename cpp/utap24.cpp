#include <iostream>
using namespace std;

int main() {

	int nilai[] = {80, 75, 90, 85, 70};
	int elemen = 5;
	double total = 0;

	for(int i = 1; i < elemen; i++) {total += nilai[i];}
	double rataRata = total / elemen;
	cout << "Rata-Rata Nilai: " << rataRata << endl;
}
