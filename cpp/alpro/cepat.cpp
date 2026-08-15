#include <iostream>
using namespace std;

int main() {
	double jarak = 30.0; // km
	double wnormal = 60.0; // menit
	double wtelat = 10.0; // menit

	// hit waktu yg ada di jam
	double waktuBaruMenit = wnormal - wtelat;
	double waktuBaruJam = waktuBaruMenit / 60.0;

	// hit kecepatan baru
	double kecepatanBaru = jarak / waktuBaruJam;

	cout << "=== PROGRAM HITUNG KECEPATAN ===" << endl;
	cout << "jarak ke kantor	: " << jarak << " km" << endl;
	cout << "waktu normal	: " << wnormal << " menit" << endl;
	cout << "Keterlambatan	: " << wtelat << " menit" << endl;
	cout << endl;
	cout << "Waktu yang tersisa : " << waktuBaruMenit << " menit (" << waktuBaruJam << " jam)" << endl;
	cout << "--------------------------------------" << endl;
	cout << "Kecepatan yang harus digunakan:	" << kecepatanBaru << " km/jam" << endl;
	
	 
}
