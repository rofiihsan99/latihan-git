#include <iostream>
using namespace std;

int main(){

	int angka;

	cout <<" Masukkan bilangan: " << endl;
	cin >> angka;

	if(angka > 0){
	cout <<" Bilangan Positif " << endl;
	}
	else if (angka < 0){
	cout <<" Bilangan Negatif " << endl;
	}
	else{
		cout <<" Bilangan Adalah 0 " << endl;
	}
	
}
