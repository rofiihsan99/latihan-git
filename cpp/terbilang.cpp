#include <iostream>
#include <string>

using namespace std;

string bilang(long long n)
{
    string satuan[] = {"", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"};
    
    if (n < 12)
        return " " + satuan[n];
    else if (n < 20)
        return bilang(n - 10) + " Belas";
    else if (n < 100)
        return bilang(n / 10) + " Puluh" + bilang(n % 10);
    else if (n < 200)
        return " Seratus" + bilang(n - 100);
    else if (n < 1000)
        return bilang(n / 100) + " Ratus" + bilang(n % 100);
    else if (n < 2000)
        return " Seribu" + bilang(n - 1000);
    else if (n < 1000000) //  Ribuan
        return bilang(n / 1000) + " Ribu" + bilang(n % 1000);
    else if (n < 1000000000) //  Jutaan
        return bilang(n / 1000000) + " Juta" + bilang(n % 1000000);
    
    return "";
}

int main()
{
    long long angka;

    cout << "Masukkan angka: ";
    cin >> angka;

    cout << "Hasil:";
    if (angka == 0)
    {
        cout << " Nol";
    }
     else
    {
        cout << bilang(angka);
    }
    cout << endl;

}
