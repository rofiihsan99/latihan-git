// stack dg class
class Stack
{
	constructor()
	{
		this.items = [];
	}
	// + elemen ke stack
	push(element)
	{
		this.items.push(element);
	}
	// hapus elemen teratas
	pop()
	{
		if(this.isEmpty());
		{
			return "Stack kosong!";
		}
		return this.items.pop();
	}
	// lihat elemen teratas
	peek()
	{
		if(this.isEmpty())
		{
			return "Stack kosong!";
		}
		return this.items[this.items.length - 1];
	}
	// cek apa stack kosong
	isEmpty()
	{
		return this.items.length === 0;
	}
	// ukuran stack
	size()
	{
		return this.items.length;
	}
	// hapus semua elemen
	clear()
	{
		this.items = [];
	}
	// tampilkan isi stack
	print()
	{
		return items.join(" > ");
	}
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.pop();
console.log(stack);
console.log(stack.pop());
