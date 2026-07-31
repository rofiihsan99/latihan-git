#include <iostream>
using namespace std;

int main()
 {
    int tinggi;

    cout << "Masukkan tinggi segitiga: ";
    cin >> tinggi;

    for (int i = 1; i <= tinggi; i++)
     {
        // Spasi
        for (int j = 1; j <= tinggi-i ; j++)
         {
            cout << " ";
        }
        // Bintang
        for (int k = 1; k <= i; k++) {
            cout << "* ";
        }
        cout << endl;
    }

}
