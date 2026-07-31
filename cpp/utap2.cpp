#include <iostream>
using namespace std;

int main(){
	int a, b;

	cout <<"Masukkan Angka 1: ";
	cin >> a;

	cout <<"Masukkan Angka 2: ";
	cin >> b;

	if(a < b){
		cout <<" Nilai besar: " << a << endl;
	}
	else if(b < a){
		cout <<" Nilai kecil: " << b << endl;
	}
	else{
		cout <<" Kedua Angka Sama: " << a << " dan " << b << endl;
	}
}
