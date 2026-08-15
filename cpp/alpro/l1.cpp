#include <iostream>
using namespace std;

int main()
{

	int angka = 10;

	cout << "Masukkan Angka: " << endl;
	cin >> angka;

	int i;
	for( i = 1; i < 10; i++) {
	cout << i << endl;

	if(i == angka) {cout << " Ketemu " << i << endl;}
	} 

	cout << "Angka Yang Anda Masukkan Adalah Angka : " << angka <<  endl;
}
