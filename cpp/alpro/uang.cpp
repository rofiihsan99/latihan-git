#include <iostream>
using namespace std;

int main() {
	
double selisih = 7500.0;

// persamaan al jabar
double uangAli = selisih / 0.3;
double uangAldo = uangAli - selisih;
double jumlahUang = uangAli + uangAldo;

cout << "uang ali	: Rp " << uangAli << endl;
cout << "uang aldo	: Rp " << uangAldo << endl;
cout << endl;
cout << "Jumlah uang mereka : Rp " << jumlahUang << endl;

}
