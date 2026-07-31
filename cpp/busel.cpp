#include <iostream>
#include <chrono>
using namespace std;

int acakAngka() {
    return (rand() % 1100) - 100;
}

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) swap(arr[j], arr[j + 1]);
}

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[min]) min = j;
        swap(arr[i], arr[min]);
    }
}

int main() {
    int n = 100;
    int arr1[n], arr2[n];

    for (int i = 0; i < n; i++) {
        arr1[i] = acakAngka();
        arr2[i] = arr1[i]; 
    }

    auto start = chrono::high_resolution_clock::now();
    bubbleSort(arr1, n);
    auto end = chrono::high_resolution_clock::now();
    cout << "Bubble Sort: " << chrono::duration<double, milli>(end - start).count() << " ms\n";

    start = chrono::high_resolution_clock::now();
    selectionSort(arr2, n);
    end = chrono::high_resolution_clock::now();
    cout << "Selection Sort: " << chrono::duration<double, milli>(end - start).count() << " ms\n";

}
