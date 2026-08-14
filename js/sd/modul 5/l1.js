class Stack
{
	constructor()
	{
		this.items = [];
	}

	// push, masukkan dat ke stack
	push(element)
	{
		this.items.push(element);
	}

	// pop, hapus data teratas
	pop()
	{
		if (this.isEmpty())
		{
			return "Stack kosong!";
		}
		return this.items.pop();
	}

	// peek, lihat data teratas tanpa menghapusnya
	peek()
	{
		if (this.isEmpty())
		{
			return "Stack kosong!"
		}
		return this.items[this.items.length - 1];
	}

	// cek apakah stack kosong
	isEmpty()
	{
		return this.items.length === 0;
	}

	// hit jml data di stack
	size()
	{
		return this.items.length;
	}

	// tampilkan semua isi stack
	print()
	{
		console.log("Isi Stack:", this.items.join(", "));
	}
}

	// coba program
	const lengkap = new Stack();

	// tambah data ke stack
	lengkap.push("Kursi");
	lengkap.push("Meja");
	lengkap.push("AC");
	lengkap.push("Server");
	lengkap.push("Laptop");

	// cetak isi stack
	lengkap.print();

	// hapus 1 el dg 
	console.log("Hapus elemen teratas:", lengkap.pop());

	// tampilkan el teratas dg
	console.log("Elemen teratas saat ini:", lengkap.peek());

	// tampilkan ukuran staack
	console.log("Ukuran stack sekarang:", lengkap.size());
