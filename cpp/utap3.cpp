#include <iostream>
using namespace std;

int main(){
	int a, b, c;

	cout << "Masukkan 3 Angka:" << endl;
	cin >> a >> b >> c;

	int besar = a; 

	if(b > besar){
	besar = b;
	} 
	if(c > besar){
	besar = c;
	}
	
	cout <<" Nilai besar: " << besar << endl;
	
}
