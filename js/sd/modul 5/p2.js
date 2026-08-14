const prompt = require("prompt-sync")();

class promptStack
{
	constructor(size)
	{
		this.size = size;
		this.stack = new Array(size);
		this.top = -1;
		this.count = 0; // jml dat distack
	}
	push(item)
	{
		this.top = (this.top + 1) % this.size;
		this.stack[this.top] = item;
		if(this.count < this.size)
		{
			this.count++;
		}
		console.log(`push: ${item}`);
	}
	pop()
	{
		if(this.count === 0)
		{
			console.log("Stack kosong!");
			return null;
		}
		let item = this.stack[this.top];
		this.stack[this.top] = undefined;
		this.top = (this.top - 1 + this.size) % this.size;
		this.count--;
		console.log(`pop: ${item}`);
		return item;
	}
	printStack()
	{
		console.log("\n=== isi prompt Stack ===");
		for(let i = 0; i < this.size; i++)
		{
			console.log(`${i}: ${this.stack[i] !== undefined ? this.stack[i] : "-"}`);
		}
		console.log("==============\n");
	}
}

// prog utama menu
const kapasitas = parseInt(prompt("Masukkan Kapasitas Stack :"));
let cs = new promptStack(kapasitas);
while(true)
{
	console.log("Menu");
	console.log("1. push data");
	console.log("2. pop data");
	console.log("3. Lihat isi Stack");
	console.log("4. Clossed");

	let pilihan = prompt("Pilih menu (1-4): ");

	if(pilihan === "1")
	{
		let data = prompt("Masukkan Data yang mau dipush: ");
		cs.push(data);
	}
	else if(pilihan === "2")
	{
		cs.pop();
	}
	else if(pilihan === "3")
	{
		cs.printStack();
	}
	else if(pilihan === "4")
	{
		console.log("Terima Kasih! Program selesai.");
		break;
	}
	else
	{
		console.log("Pilihan Tidak Valid.")
	}
}

