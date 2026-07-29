#include <iostream>
using namespace std;

int main() {

	int n;

	cout <<"Masukkan Nilai n: " << endl;
	cin >> n;

	cout <<"Bilangan Genap dari 1 sampai " << n << " adalah " << endl;
	for(int i = 2; i <= n;  i += 2) {cout << i << " ";}
	cout << endl;
	
}

