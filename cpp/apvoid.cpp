#include <iostream>
#include <iomanip>
using namespace std;

void tampilkanMenu()
{
    cout << "\n===== MENU ATM =====\n";
    cout << "1. Cek Saldo\n";
    cout << "2. Tarik Tunai\n";
    cout << "3. Setor Tunai\n";
    cout << "4. Transfer\n";
    cout << "5. Keluar\n";
    cout << "Pilih menu: ";
}

int main()
{
    const int PIN_BENAR = 1234;
    int pin, percobaan = 0;

    // Login PIN
    while (percobaan < 3)
    {
        cout << "Masukkan PIN: ";
        cin >> pin;

        if (pin == PIN_BENAR)
        {
            cout << "Login berhasil!\n";
            break;
        }
        else
        {
            percobaan++;
            cout << "PIN salah!\n";
        }
    }

    if (percobaan == 3)
    {
        cout << "Kartu diblokir.\n";
        return 0;
    }

    double saldo = 5000000; // saldo awal
    int pilihan;

    do
    {
        tampilkanMenu();
        cin >> pilihan;

        switch (pilihan)
        {
        case 1:
            cout << fixed << setprecision(2);
            cout << "Saldo Anda: Rp " << saldo << endl;
            break;

        case 2:
        {
            double tarik;
            cout << "Masukkan jumlah tarik tunai: Rp ";
            cin >> tarik;

            if (tarik <= 0)
            {
                cout << "Jumlah tidak valid.\n";
            }
            else if (tarik > saldo)
            {
                cout << "Saldo tidak mencukupi.\n";
            }
            else
            {
                saldo -= tarik;
                cout << "Penarikan berhasil.\n";
                cout << "Sisa saldo: Rp " << saldo << endl;
            }
            break;
        }

        case 3:
        {
            double setor;
            cout << "Masukkan jumlah setor tunai: Rp ";
            cin >> setor;

            if (setor <= 0)
            {
                cout << "Jumlah tidak valid.\n";
            }
            else
            {
                saldo += setor;
                cout << "Setor tunai berhasil.\n";
                cout << "Saldo sekarang: Rp " << saldo << endl;
            }
            break;
        }

        case 4:
        {
            string rekeningTujuan;
            double jumlahTransfer;

            cout << "Masukkan nomor rekening tujuan: ";
            cin >> rekeningTujuan;

            cout << "Masukkan jumlah transfer: Rp ";
            cin >> jumlahTransfer;

            if (jumlahTransfer <= 0)
            {
                cout << "Jumlah transfer tidak valid.\n";
            }
            else if (jumlahTransfer > saldo)
            {
                cout << "Saldo tidak mencukupi.\n";
            }
            else
            {
                saldo -= jumlahTransfer;
                cout << "Transfer ke rekening "
                     << rekeningTujuan
                     << " berhasil.\n";

                cout << "Sisa saldo: Rp "
                     << saldo << endl;
            }
            break;
        }

        case 5:
            cout << "Terima kasih telah menggunakan ATM.\n";
            break;

        default:
            cout << "Pilihan tidak tersedia.\n";
        }

    } while (pilihan != 5);

    return 0;
}
