#include <iostream>
using namespace std;

int main(){
	int angka;

	cout << "Masukkan Angka: ";
	cin >> angka;

	if(angka % 2 == 0){
		cout << angka << " Adalah bilangan genap." << endl;
	} else{
		cout << angka << " Adalah Bilangan ganjil." << endl;
	}
	
}
