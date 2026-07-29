#include <iostream>
using namespace std;

int main(){
	int a, b, c;

	cout <<" Masukkan 3 sisi Segitiga: " << endl;
	cin >> a >> b >> c;

	if(a == b && b == c) {cout <<" Segitiga Sama sisi: " << endl;}
	else if(a == b || b == c || a == c) {cout <<" Segitiga Sama Kaki: " << endl;}
	else {cout <<" Segitiga Sembarang: " << endl;}
	
}
