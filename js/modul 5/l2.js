const prompt = require('prompt-sync')();

class Stack 
{
    constructor() 
    {
        this.items = [];
    }

    push(element) 
    {
        this.items.push(element);
    }

    pop() 
    {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    isEmpty() {
    
        return this.items.length === 0;
    }
}

// fungsi balik kata
function membalikKata(teks) 
{
    return teks.split("").reverse().join("");
}

// func cekkurung
function cekKurung(ekspresi) 
{
    let s = [];
    let pasangan = { ')': '(', ']': '[', '}': '{' };

    for (let c of ekspresi) 
    {
        if (pasangan[c]) 
        {
            if (s.pop() !== pasangan[c]) return false;
        } else if ("([{".includes(c)) 
        {
            s.push(c);
        }
    }
    return s.length === 0;
}

function desimalKeBiner(angka) 
{
    let n = parseInt(angka);
    if (isNaN(n)) return "Input harus angka!";
    if (n === 0) return "0";

    let s = [];
    while (n > 0) 
    {
        s.push(n % 2);
        n = Math.floor(n / 2);
    }

    return s.reverse().join("");
}

// menu
while (true) 
{
    console.log("\n=== Menu Praktik Stack ===");
    console.log("1. Membalik Kata");
    console.log("2. Pengecekan Kurung");
    console.log("3. Konversi Desimal ke Biner");
    console.log("4. Keluar");

    let pilihan = prompt("Pilih menu: ");

    switch (pilihan)
     {
        case '1':
            console.log("Hasil: " + membalikKata(prompt("Masukkan kata: ")));
            break;

        case '2':
            let hasil = cekKurung(prompt("Masukkan ekspresi: "));
            console.log(hasil ? "Kurung Valid/Seimbang" : "Kurung Tidak Valid");
            break;

        case '3':
            console.log("Biner: " + desimalKeBiner(prompt("Masukkan angka: ")));
            break;

        case '4':
            console.log("Program selesai, Terima kasih!");
            return;

        default:
            console.log("Pilihan tidak valid!");
    }
}
