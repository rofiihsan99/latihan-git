#include <iostream>
using namespace std;

int main() {

	int genap = 2;
	int kelipatan = 3;

	for(int i = 1; i <= 14; i++) {
		if(i % 2 != 0) {cout << genap << " "; genap += 2;}
		else {cout << kelipatan << " "; kelipatan += 3;}
	}
}
