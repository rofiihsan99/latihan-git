#include <iostream>
using namespace std;

int main(){

	double totalBelanja;

	cout <<" Masukkan Total belanja: " << endl;
	cin >> totalBelanja;

	if(totalBelanja >= 100000){
		double diskon = totalBelanja * 0.1;
		totalBelanja = totalBelanja - diskon;
		cout <<" Selamat Anda Dapat Diskon 10% " << endl;
	}
	else{
		cout <<" Anda Tidak dapat Diskon " << endl;
	}
	
}
