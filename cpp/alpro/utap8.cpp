#include <iostream>
using namespace std;

int main(){

	int tahun;

	cout <<" Masukkan Tahun: " << endl;
	cin >> tahun;

	if((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0)){
		cout << tahun << " Adalah Tahun Kabisat " << endl;
	} else{
		cout << tahun << " Bukan Tahun Kabisat " << endl;
	}
}
