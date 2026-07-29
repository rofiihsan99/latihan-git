#include <iostream>
using namespace std;

int main() {

	for(int i = 1; i <= 50; i++) {
		if(i % 3 == 0 && i % 5 == 0) {cout << " FizzBuzz " << "\t";}
		else if(i % 3 == 0) {cout << " Fizz " << "\t";}
		else if(i % 5 == 0) {cout << " Buzz " << "\t";}
   	    else {cout << i << "\t";}	

   	    if(i % 15 == 0) { cout << endl;}
	}
}
