#include <iostream>
using namespace std;

int main(){

	int nilai;

	cout <<" Masukkan Nilai: " << endl;
	cin >> nilai;

	if(nilai >= 85){
		cout <<" Kategori A " << endl;
	}
	else if(nilai >= 70){
		cout <<" Kategori B " << endl;
	}
	else if(nilai >= 60){
		cout <<" Kategori C " << endl;
	}
	else{
		cout <<"Kategori D " << endl;
	}
}

