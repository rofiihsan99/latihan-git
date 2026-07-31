#include <iostream>
using namespace std;

int main() {

	int n, total = 0;

	cout << "Masukkan Angka n: " << endl;
	cin >> n;

	for(int i = 1; i < n; i++) {total += i;}
	cout << "Penjumlahan dari 1 Sampai n, " << n << " adalah: " << total << endl;
	
}
