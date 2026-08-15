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

void bubblySort(int arr[], int n) {
	for (int i = 0; i < n - 1; i++) {
		for (int j = 0; j < n - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// tukar nilai
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j = 1] = temp;
			}
		}
	}
}

int main() {

	int jumlah = 100000; // nilai yg berubah rubah
	int nilai[jumlah];

	for (int i = 0; i < jumlah; i++) {
		nilai[i] = acakAngka();
	}

	cout << "---- ARRAY SEBELUM DI-SORT -----" << endl;
	for (int i = 0; i < jumlah; i++) {
		cout << "Nilai ke-" << i << " adalah " << nilai[i] << endl;
	}

	// hitung time sorting
	auto start = chrono::high_resolution_clock::now();

	// run func pengurutan
	bubblySort(nilai, jumlah);

	auto end = chrono::high_resolution_clock::now();
	chrono::duration<double, milli> duration = end - start;

	// end hitung waktu
	cout  << "\n---- ARRAY SETELAH DI-SORT (BubbleSort) -----" << endl;
	for (int i = 0; i < jumlah; i++) {
		cout <<"Nilai ke-" << i << " adalah " << nilai[i] << endl;
	}

	// displays the execution time duration
	cout << "\nWaktu eksekusi: " << duration.count() << " ms" << endl;
}
