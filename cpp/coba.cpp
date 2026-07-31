#include <iostream>
using namespace std;

int main() {

    int data[] = {10, 20, 30, 40, 50}; 
    int cari = 30;
    
    int kiri = 0;
    int kanan = 4;
    int temu = -1;

    while(kiri <= kanan) {
        int tengah = kiri + (kanan - kiri) / 2; 

        if(data[tengah] == cari) {temu = tengah; break;}  
        else if(data[tengah] < cari) {kiri = tengah + 1;} 
        else{kanan = tengah - 1;}
    }
           
    if (temu != -1) {cout << "Data " << cari <<" ditemukan Pada indeks: " << temu << endl;}
    else {cout << "Data gak ada " << endl;}
    
 }
