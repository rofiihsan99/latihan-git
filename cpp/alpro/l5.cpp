#include <iostream>
#include <string>
using namespace std;

struct profil { string nama; int umur; double tinggiBadan; };

int main() {
profil me;
		
	cout << "===== INPUT IDENTITAS =====" << endl;

	cout << "Masukkan Nama: ";
	getline(cin, me.nama);

	cout << "Masukkan Umur: ";
	cin >> me.umur;

	cout << "Masukkan Tinggi Badan: ";
	cin >> me.tinggiBadan;

	cout << endl;

	cout <<"===== IDENTITAS ANDA =====" << endl;
	cout << "Nama	: " << me.nama << endl;
	cout << "Umur	: " << me.umur << " Tahun" << endl;
	cout << "Tinggi	: " << me.tinggiBadan << " Cm" << endl;
}
