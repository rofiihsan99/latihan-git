#include <iostream>
using namespace std;

int main()
{
	int angka[6] = {12, 45, 7, 89, 44, 22};

	int max = angka[0];
	int min = angka[0];

	cout << "Isi Array: " << endl;
	for (int i = 0; i < 6; i++)
	{
		cout << angka[i] << " ";

		// car n besar
		if (angka[i] > max)
		{
			max = angka[i];
		}

		// car n kecil
		if (angka[i] < min)
		{
			min = angka[i];
		}
	}
	cout << endl;
	cout << "Nilai Terbesar : " << max << endl;
	cout << "Nilai Terkecil : " << min << endl;
	//cout << "-------------------" << endl;
	
}
