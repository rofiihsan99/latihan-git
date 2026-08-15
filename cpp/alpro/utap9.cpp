#include <iostream>
using namespace std;

int main(){

	int a, b, c;

	cout <<" Masukkan 3 Bilangan: " << endl;
	cin >> a >>  b >> c;

	int besar = a;
	if(b > besar) {besar = b;}
	if(c > besar) {besar = c;}

	int kecil = a;
	if(b < kecil) {kecil = b;}
	if(c < kecil) {kecil = c;}

	cout <<" Nilai Terbesar: " << besar << endl;
	cout <<" Nilai Terkecil: " << kecil << endl;
	
}
