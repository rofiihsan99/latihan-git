#include <iostream>
using namespace std;

int main() {

	int n, total = 0;

	cout << "Masukkan nilai n: " << endl;
	cin >> n;

	for(int i = 2; i <= n; i += 2) {total += i;}
	cout <<"Jumlah Bilangan Genap dari 1 sampai " << n << " adalah " << total << endl;
	
}
