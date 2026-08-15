#include <iostream>
using namespace std;

int main() {
	double hargaBajuAwal = 100000;
	double hargaCelanaAwal = 100000;

	// diskon baju 25% + 40%
	double hargaSetelahDiskonPertama = hargaBajuAwal - (hargaBajuAwal * 0.25);
	double a = hargaSetelahDiskonPertama - (hargaSetelahDiskonPertama * 0.40);

	// diskon celana 55%
	double b = hargaCelanaAwal - (hargaCelanaAwal * 0.5);

	cout << "=== HASIL DISKON ===" << endl;
	cout << "Harga baju setelah diskon (a)	: Rp " << a << endl;
	cout << "Harga celana setelah diskon (b)	: Rp " << b << endl;

	cout << "\nKesimpulan: " << endl;
	if (a == b) {
		cout << "Nilai a = b " << endl;
	} else if (a < b) {
		cout << "Nilai a < b " << endl;
	} else {
		cout << "Nilai a > b " << endl;
	}
	
}

