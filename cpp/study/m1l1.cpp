#include <iostream>
#include <iomanip> 

using namespace std;

int main() {
	// var 2 angka
	int angka1 = 15;
	int angka2 = 4;

	// aritmatika
	cout << endl;
	cout << "        ----- OPERASI ARITMATIKA -----" << endl;
	cout << "========================================" << endl;
	cout << left << setw(20) << "Penjumlahan" << " : " << angka1 + angka2 << endl;
	cout << left << setw(20) << "Pengurangan" << " : " << angka1 - angka2 << endl;
	cout << left << setw(20) << "Perkalian" << " : " << angka1 * angka2 << endl;
	cout << left << setw(20) << "Pembagian" << " : " << (double)angka1 / angka2 << endl;
	cout << left << setw(20) << "Sisa Bagi (modulo)" << " : " << angka1 % angka2 << endl;

	// var hasil
	int hasil = 10;
	hasil = hasil + angka1;

	cout << endl;
	cout << "        ----- OPERATOR TUGAS -----" << endl;
	cout << "========================================" << endl;
	cout << "Nilai Hasil Setelah += angka1 : " << hasil << endl;

	// 2 angka pembanding
	cout << endl;
	cout << "        ----- OPERATOR BANDING -----" << endl;
	cout << "========================================" << endl;

	// pakai boolalpha = true & false
	cout << boolalpha;
	cout << angka1 << " == " << angka2 << " : " << (angka1 == angka2) << endl;
	cout << angka1 << " > " << angka2 << "  : " << (angka1 > angka2) << endl;
	cout << angka1 << " < " << angka2 << "  : " << (angka1 < angka2) << endl;	

	// var bool & logika
	bool benar = true;
	bool salah = false;

	cout << endl;
	cout << "        ----- OPERASI LOGIKA -----" << endl;
	cout << "========================================" << endl;
	cout << left << setw(22) << "Logic AND (&&)" << " : " << (benar && salah) << endl; 
	cout << left << setw(22) << "Logic OR (||)" << " : " << (benar || salah) << endl;   

}
