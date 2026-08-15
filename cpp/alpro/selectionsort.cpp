#include <iostream>
#include <chrono>
using namespace std;

int acakAngka() {
    int max = 1000;
    int min = -100;
    int range = max - min + 1;
    int num = rand() % range + min;
    return num;
}

// Fungsi Selection Sort
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        // Cari i l kecil di sisa array
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Tukar l kecil dg l di  pos i
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int jumlah = 10000; // merubah angka
    int nilai[jumlah];

    for (int i = 0; i < jumlah; i++) {
        nilai[i] = acakAngka();
    }

    cout << "---- ARRAY SEBELUM DI-SORT -----" << endl;
   // delete baris jika data 1jt
    for (int i = 0; i < jumlah; i++) {
        cout << "Nilai ke-" << i << " adalah " << nilai[i] << endl;
    }

    // Mulai hitung waktu
    auto start = chrono::high_resolution_clock::now();

    // Jalankan Selection Sort
    selectionSort(nilai, jumlah);

    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double, milli> duration = end - start;

    cout << "\n---- ARRAY SETELAH DI-SORT (SelectionSort) -----" << endl;
    for (int i = 0; i < jumlah; i++) {
        cout << "Nilai ke-" << i << " adalah " << nilai[i] << endl;
    }

    cout << "\nWaktu eksekusi: " << duration.count() << " ms" << endl;

    return 0;
}
