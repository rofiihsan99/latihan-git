#include <iostream>
using namespace std;

int main() {
	string huruf[2][4] = {
		{"A", "B", "C", "D"},
		{"E", "F", "G", "H"}
	};

	cout << huruf[0][0] << huruf[0][3] << huruf[0][0];
	for (int i = 0; i < 2; i++) {
		for (int y = 0; y < 4; y++) {
			cout << huruf[i][y] << " ";
		}
		cout << endl;
	}
	
}
