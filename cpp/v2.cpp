#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
	char lanjut = 'y';
	string nama, usia, ttl;
	int orang = 0;

	do {
		orang++;

		cout << "===== INPUT IDENTITAS =====" << endl;
		cout << "NAMA : ";
		getline(cin, nama);

		cout << "USIA : ";
		getline(cin, usia);

		cout << "TTL : ";
		getline(cin, ttl);

		cout << "\n===== DATA TERSIMPAN =====" << endl;
		cout << "Data ke-" << orang << endl;
		cout << "NAMA	: " << nama << endl;
		cout << "USIA	: " << usia << endl;
		cout << "TTL	: " << ttl << endl;

		cout << "\nTambah identitas lagi? (y/n): ";
		cin >> lanjut;
		lanjut = tolower(lanjut);
		cin.ignore(1000, '\n');

		cout << endl;
		
	} while (lanjut == 'y');
	cout << "===========================" << endl;
	cout << "Total ada " << orang << " orang yang terdata" << endl;
	cout << "===== PROGRAM SELESAI =====" << endl;
	
}
