#include <iostream>
using namespace std;

int main() {
    int data[] = {5, 7, 10, 60, 75, 91, 68, 77, 11, 52, 22, 1, 33};
    int n = 13;

    float total = 0;

    // Hitung total
    for (int i = 0; i < n; i++) {
        total += data[i];
    }

    float rata = total / n;

    cout << "Rata-rata: " << rata << endl;

    // Cek setiap nilai
    for (int i = 0; i < n; i++) {
        if (data[i] > rata)
            cout << data[i] << " : Diatas rata-rata\n";
        else
            cout << data[i] << " : Dibawah rata-rata\n";
    }

}

/*
Program ini digunakan untuk menganalisis data berupa angka-angka dalam sebuah array.

Pertama, saya menyimpan data ke dalam array bernama `data` yang berisi 13 angka, lalu variabel `n` menyimpan jumlah datanya.

Selanjutnya, saya menghitung total semua nilai menggunakan perulangan `for`. Setiap angka dijumlahkan ke dalam variabel `total`.

Setelah itu, saya menghitung rata-rata dengan cara membagi total dengan jumlah data, lalu hasilnya disimpan di variabel `rata`.

Kemudian, program menampilkan nilai rata-rata tersebut.

Langkah terakhir, saya melakukan perulangan lagi untuk mengecek setiap nilai dalam array.
Jika nilai lebih besar dari rata-rata, maka ditampilkan "Diatas rata-rata".
Jika tidak, maka ditampilkan "Dibawah rata-rata".

Jadi, program ini bisa menunjukkan posisi setiap nilai apakah berada di atas atau di bawah rata-rata.
