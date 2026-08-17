#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

int main() {

	for (int i = 1; i <= 20; ++i) {
		bool multipleOf3 = (i % 3 == 0);
		bool multipleOf5 = (i % 5 == 0);

		if (multipleOf3 && multipleOf5) {cout << setw(5) << "fizzBuzz"; } 
		else if (multipleOf3) {cout << setw(5) << "Fizz"; }
		else if (multipleOf5) {cout << setw(5) << "Buzz"; }
		else {cout << setw(5) << i;}
	}
	
}
