#include <iostream>
using namespace std;

int main() {

	int n1 = 0;
	int n2 = 1;
	int next;

	for(int i = 1; i <= 10; i++) {
		if(i == 1) {cout << n1 << " "; continue;}
		if(i == 2) {cout << n2 << " "; continue;}

		next = n1 + n2;
		n1 = n2;
		n2 = next;

		cout << next << " ";
	}
}

