const prompt = require('prompt-sync')();

// stack
class Stack 
{
	constructor() 
	{
		this.items = [];
	}
	
	push(x) { this.items.push(x); }
	pop() { return this.items.length ? this.items.pop() : "Stack kosong"; }
	peek() { return this.items[this.items.length - 1]; }
	isEmpty() { return this.items.length === 0; }
}

// membalik string
const reverseString = str => str.split('').reverse().join('');

// program utama
function main() 
{
	const stack = new Stack();

	while (true) 
	{
	console.log(`
1. push
2. pop
3. peek
4. balik
5. info
6. keluar
		`);

		const p = prompt("Pilih: ");

		if (p === '1') {
			const item = prompt("Data: ");
			stack.push(item);
		}
		else if (p === '2') {
			console.log("Keluar:", stack.pop());
		}
		else if (p === '3') {
			console.log(stack.isEmpty() ? "Kosong" : stack.peek());
		}
		else if (p === '4') {
			console.log("Hasil:", reverseString(prompt("Kata: ")));
		}
		else if (p === '5') {
			console.log(`Jumlah: ${stack.items.length}`);
		}
		else if (p === '6') {
			break;
		}
		else {
			console.log("Tidak Valid!");
		}
	}
}

main();
