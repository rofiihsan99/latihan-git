#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

class Mhs
{
private:
	string nama, nim, jurusan;
	int angkatan;

public:
	// constructor
	Mhs (string pNama, string pNim, string pJurusan, int pAngkatan)
	{
		nama = pNama;
		nim = pNim;
		jurusan = pJurusan;
		angkatan = pAngkatan;
	}

	// tampil data
	void tampilData () const
	{
		cout << left;
		cout << setw(10) << "NAMA" << ": " << nama << endl;
		cout << setw(10) << "NIM" << ": " << nim << endl;
		cout << setw(10) << "JURUSAN" << ": " << jurusan << endl;
	}

	// rename jurusan
	void ubahJurusan (const string& jurusanBaru)
	{
		jurusan = jurusanBaru;
	}

	// run angkatan
	void tampilAngkatan () const
	{
		cout << setw(10) << "ANGKATAN" << ": " << angkatan << endl;
	}
};

int main ()
{
	Mhs mhs1("Andi", "12345", "Bisnis digital", 2000);
	Mhs mhs2("Ando", "678910", "Ekonomi Syari'ah", 2001);
	Mhs mhs3("Raldo", "111213", "Gizi", 2002);

	// panggil func
	mhs1.tampilData();
	mhs1.tampilAngkatan();


}
