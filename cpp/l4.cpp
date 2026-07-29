#include <iostream>
using namespace std;

int main()
{
	// dex arr 2d
	int matriks[2][3] =
	{
		{1, 2, 3},
		{4, 5, 6},
	};
	cout << "--- Tampilan matriks 2x3 ---" << endl;
	// lop u/ baris
	for(int i = 0; i < 2; i++)
	{
		// ioop u/ kolom
		for(int j = 0; j < 3; j++)
		{
			cout << matriks[i][j] << " ";
		}
		// spasi
		cout << endl;
	}
	
}
