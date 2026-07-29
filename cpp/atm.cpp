#include <iostream>
using namespace std;

int main()
{
	int saldo = 1000000;
	int pinBenar = 1234;
	int pin;
	int pilih = 0;

	while (pilih != 3) 
	{
		cout << "----- MENU ----" << endl;
		cout << "1.Tarik Uang\t ";
		cout << "2.Setor Uang\t ";
		cout << "3.Keluar" << endl; 
		
		cout << "Pilih:\t ";
		cin >> pilih;

		if (pilih == 3) 
		{
			break;
		}

		cout << "Masukkan PIN: ";
		cin >> pin;

		if (pin == pinBenar){
			if (pilih == 1) {
				int uang;
				cout << "Tarik:\t ";
				cin >> uang;
				saldo = saldo - uang;
				cout << "Selesai. Sisa saldo: " << saldo << endl;
			}
			else if (pilih == 2)
			{
				int uang;
				cout << "Setor:\t "; 
				cin >> uang;
				saldo = saldo + uang;
				cout << "Selesai. Saldo sekarang: " << saldo << endl;
			}
		}
		else 
		{
			cout << "PIN Salah" << endl;
		}
	}
   
}
