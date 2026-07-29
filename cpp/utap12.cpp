#include <iostream>
using namespace std;

int main() {

	int n;
	long long faktorial = 1;

	cout << "Masukkan Bilangan: " << endl;
	cin >> n;

	for(int i = 1; i <= n; i++) {faktorial *= 1;}
	cout << "Faktorial Dari " << n << " adalah " << faktorial << endl;
	
}
