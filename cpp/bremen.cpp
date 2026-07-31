#include <iostream>
using namespace std;

struct Pelanggan{
    string nama;
    string alamat;
};

int main(){

    Pelanggan user;

    int menu, pilihHP, jumlah, bank, konfirmasi;
    long long harga=0, total=0, transfer;
    string namaHP, namaBank, va; //va = virtual account

    cout<<"=============================================\n";
    cout<<"          CHRISTIANPHONE STORE\n";
    cout<<"=============================================\n";
    cout<<"1. Beli iPhone\n";
    cout<<"2. Jual iPhone\n";
    cout<<"3. Keluar\n";
    cout<<"=============================================\n";
    cout<<"Pilih Menu : ";
    cin>>menu;

    switch(menu){

    case 1:{

        cout<<"\n=============================================\n";
        cout<<"             DAFTAR iPHONE\n";
        cout<<"=============================================\n";
        cout<<"1. iPhone 13 128GB             Rp 8.500.000\n";
        cout<<"2. iPhone 13 256GB             Rp 9.500.000\n";
        cout<<"3. iPhone 14 128GB             Rp10.500.000\n";
        cout<<"4. iPhone 14 256GB             Rp11.500.000\n";
        cout<<"5. iPhone 15 128GB             Rp13.500.000\n";
        cout<<"6. iPhone 15 256GB             Rp15.000.000\n";
        cout<<"7. iPhone 16 128GB             Rp16.500.000\n";
        cout<<"8. iPhone 16 256GB             Rp18.000.000\n";
        cout<<"9. iPhone 16 Pro 256GB         Rp21.000.000\n";
        cout<<"10. iPhone 16 Pro Max 512GB    Rp25.000.000\n";
        cout<<"=============================================\n";
        cout<<"Pilih iPhone : ";
        cin>>pilihHP;

        // nentuin nama & harga sesuai pilihan
        if(pilihHP==1){ namaHP="iPhone 13 128GB"; harga=8500000; }
        else if(pilihHP==2){ namaHP="iPhone 13 256GB"; harga=9500000; }
        else if(pilihHP==3){ namaHP="iPhone 14 128GB"; harga=10500000; }
        else if(pilihHP==4){ namaHP="iPhone 14 256GB"; harga=11500000; }
        else if(pilihHP==5){ namaHP="iPhone 15 128GB"; harga=13500000; }
        else if(pilihHP==6){ namaHP="iPhone 15 256GB"; harga=15000000; }
        else if(pilihHP==7){ namaHP="iPhone 16 128GB"; harga=16500000; }
        else if(pilihHP==8){ namaHP="iPhone 16 256GB"; harga=18000000; }
        else if(pilihHP==9){ namaHP="iPhone 16 Pro 256GB"; harga=21000000; }
        else if(pilihHP==10){ namaHP="iPhone 16 Pro Max 512GB"; harga=25000000; }
        else{
            cout<<"Pilihan tidak tersedia!\n";
            return 0;
        }

        cout<<"Jumlah Pembelian : ";
        cin>>jumlah;

        if(jumlah<=0){
            cout<<"Jumlah pembelian tidak valid!\n";
            return 0;
        }

        cin.ignore(); //biar getline ga kelewat

        cout<<"Nama Pembeli : ";
        getline(cin,user.nama);

        cout<<"Alamat : ";
        getline(cin,user.alamat);

        total = harga * jumlah;

        cout<<"\n=============================================\n";
        cout<<"          METODE PEMBAYARAN\n";
        cout<<"=============================================\n";
        cout<<"Transfer Bank\n\n";
        cout<<"1. BCA\n";
        cout<<"2. BNI\n";
        cout<<"3. BRI\n";
        cout<<"4. Mandiri\n";
        cout<<"=============================================\n";
        cout<<"Pilih Bank : ";
        cin>>bank;

        if(bank==1){ namaBank="BCA"; va="8800123456789"; }
        else if(bank==2){ namaBank="BNI"; va="8800987654321"; }
        else if(bank==3){ namaBank="BRI"; va="8800456123789"; }
        else if(bank==4){ namaBank="Mandiri"; va="8800789456123"; }
        else{
            cout<<"Bank tidak tersedia!\n";
            return 0;
        }

        cout<<"\n=============================================\n";
        cout<<"      VIRTUAL ACCOUNT PEMBAYARAN\n";
        cout<<"=============================================\n";
        cout<<"Bank            : "<<namaBank<<endl;
        cout<<"Virtual Account : "<<va<<endl;
        cout<<"Total Bayar     : Rp "<<total<<endl;

        cout<<"\nApakah Anda sudah melakukan transfer?\n";
        cout<<"1. Sudah\n";
        cout<<"2. Belum\n";
        cout<<"Pilih : ";
        cin>>konfirmasi;

        if(konfirmasi==2){
            cout<<"\nPembayaran belum diterima.\n";
            cout<<"Silakan transfer terlebih dahulu.\n";
            return 0;
        }

        cout<<"\nMasukkan nominal transfer : Rp ";
        cin>>transfer;

        if(transfer!=total){
            cout<<"\nNominal transfer tidak sesuai!\n";
            cout<<"Transaksi dibatalkan.\n";
            return 0;
        }

        cout<<"\nPembayaran berhasil diverifikasi.\n";

        // hitung pake integer aja biar ga desimal aneh pas ditampilin
        long long ppn = total*11/100;
        long long diskon = 0;
        if(total>=20000000) diskon = total*5/100;
        long long grandTotal = total+ppn-diskon;

        string kodeTransaksi = "CP0001";

        cout<<"\n=============================================\n";
        cout<<"          STRUK CHRISTIANPHONE\n";
        cout<<"=============================================\n";
        cout<<"Kode Transaksi : "<<kodeTransaksi<<endl;
        cout<<"Nama Pembeli   : "<<user.nama<<endl;
        cout<<"Alamat         : "<<user.alamat<<endl;
        cout<<"---------------------------------------------\n";
        cout<<"Produk         : "<<namaHP<<endl;
        cout<<"Jumlah         : "<<jumlah<<endl;
        cout<<"Harga Satuan   : Rp "<<harga<<endl;
        cout<<"Subtotal       : Rp "<<total<<endl;
        cout<<"PPN 11%        : Rp "<<ppn<<endl;
        cout<<"Diskon         : Rp "<<diskon<<endl;
        cout<<"---------------------------------------------\n";
        cout<<"Grand Total    : Rp "<<grandTotal<<endl;
        cout<<"---------------------------------------------\n";
        cout<<"Metode Bayar   : Transfer Bank"<<endl;
        cout<<"Bank           : "<<namaBank<<endl;
        cout<<"Virtual Acc.   : "<<va<<endl;
        cout<<"Status         : LUNAS"<<endl;
        cout<<"=============================================\n";
        cout<<" Garansi Resmi Apple Indonesia 1 Tahun\n";
        cout<<" Terima kasih telah berbelanja di ChristianPhone Store\n";
        cout<<"=============================================\n";

        break;
    }

    case 2:{

        string tipe;
        int kondisi, kapasitas;
        long long hargaJual=0;

        cin.ignore();

        cout<<"\n=============================================\n";
        cout<<"          JUAL IPHONE\n";
        cout<<"=============================================\n";
        cout<<"Masukkan Tipe iPhone : ";
        getline(cin,tipe);

        cout<<"Pilih Kondisi\n";
        cout<<"1. Mulus\n";
        cout<<"2. Bekas Pemakaian\n";
        cout<<"Pilih : ";
        cin>>kondisi;

        if(kondisi!=1 && kondisi!=2){
            cout<<"Pilihan kondisi tidak valid!\n";
            return 0;
        }

        cout<<"Kapasitas Penyimpanan\n";
        cout<<"1. 128 GB\n";
        cout<<"2. 256 GB\n";
        cout<<"3. 512 GB\n";
        cout<<"Pilih : ";
        cin>>kapasitas;

        if(kapasitas!=1 && kapasitas!=2 && kapasitas!=3){
            cout<<"Pilihan kapasitas tidak valid!\n";
            return 0;
        }

        //harga beda2 tergantung kondisi & kapasitas
        if(kondisi==1){
            if(kapasitas==1) hargaJual=8000000;
            else if(kapasitas==2) hargaJual=10000000;
            else hargaJual=12000000;
        }else{
            if(kapasitas==1) hargaJual=6000000;
            else if(kapasitas==2) hargaJual=7500000;
            else hargaJual=9000000;
        }

        cin.ignore();
        cout<<"Nama Penjual : ";
        getline(cin,user.nama);
        cout<<"Alamat : ";
        getline(cin,user.alamat);

        cout<<"\n=============================================\n";
        cout<<"      HASIL PENAWARAN CHRISTIANPHONE\n";
        cout<<"=============================================\n";
        cout<<"Nama Penjual : "<<user.nama<<endl;
        cout<<"Alamat       : "<<user.alamat<<endl;
        cout<<"Tipe iPhone  : "<<tipe<<endl;

        if(kondisi==1) cout<<"Kondisi      : Mulus"<<endl;
        else cout<<"Kondisi      : Bekas Pemakaian"<<endl;

        if(kapasitas==1) cout<<"Kapasitas    : 128 GB"<<endl;
        else if(kapasitas==2) cout<<"Kapasitas    : 256 GB"<<endl;
        else cout<<"Kapasitas    : 512 GB"<<endl;

        cout<<"---------------------------------------------\n";
        cout<<"Harga Penawaran : Rp "<<hargaJual<<endl;
        cout<<"---------------------------------------------\n";
        cout<<"Silakan datang ke toko ChristianPhone\n";
        cout<<"untuk proses pengecekan fisik perangkat.\n";
        cout<<"=============================================\n";

        break;
    }

    case 3:
        cout<<"\nTerima kasih telah menggunakan aplikasi ChristianPhone Store.\n";
        cout<<"Sampai jumpa kembali.\n";
        break;

    default:
        cout<<"\nMenu yang Anda pilih tidak tersedia.\n";
        break;
    }

    return 0;
}
