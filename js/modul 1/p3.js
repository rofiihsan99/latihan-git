var mid = 25;
var month = 2;
var num = 0;
var high = 50;
var low = 1;
var current = 13;
var found = -1;

if (current < mid) {
    mid = (current - low) / 2;
    console.log(mid);
}

if (num === 1) {
    console.log("Angka Sama Dengan 1");
} else {
    console.log("num tidak sama dengan 1, nilai num adalah " + num);
}

if (month === 1) {
    console.log("Januari");
} else if (month === 2) {
    console.log("Februari");
} else if (month === 3) {
    console.log("Maret");
} else {
    console.log("Bulan ini bukan Januari, Februari, atau Maret.");
}
