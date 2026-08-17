#include <iostream>
#include <string>

using namespace std;

	//status
	void cekGrade(int nilai) {
		if (nilai < 0 || nilai > 100) {
			cout << "Nilai Tidak Valid, masukkan angka (0-100)\n";
		    return;
		}

		if (nilai >= 90) {
			cout << "Grade A: Lulus dengan sangat baik\n";
			
		} else if (nilai >= 80) {
			cout << "Grade B: Lulus dengan baik\n";
			
		} else if (nilai >= 70) {
			cout << "Grade C: Lulus dengan cukup\n";
			
		} else if (nilai >= 60) {
			cout << "Grade D: Lulus dengan kurang\n";
			
		} else {
			cout << "Grade E: Tidak Lulus\n";
		}
	}

int main() {
	int nilai = 95;

	cout << "fi " << nilai << endl;
	cekGrade(nilai);
	
}
