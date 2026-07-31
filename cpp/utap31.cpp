#include <iostream>
using namespace std; 

int main() {

    int matriks[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    int elemen = 2 * 3;
    double total = 0;

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {total += matriks[i][j];}                   
    }

    double rataRata = total / elemen;
    cout << "Rata-Rata Nilai Matriks: " << rataRata << endl;
}
