// def node
class Node
{
	constructor(value)
	{
		this.value = value;
		this.next = null;
	}
}
// def ll & antr queue
class LinkedList
{
	constructor()
	{
		this.head = null;
	}
	// + data kebelakang
	append(value)
	{
		const newNode = new Node(value);
		if(!this.head)
		{
			this.head =newNode;
		}
		else
		{
			let curr = this.head;
			while(curr.next) curr = curr.next;
			curr.next = newNode;
		}
	}
	// hapus data
	remove(value)
	{
		if(!this.head) return;
		if(this.head.value === value)
		{
			this.head = this.head.next;
			return;
		}
		let curr = this.head;
		while(curr.next && curr.next.value !== value) curr.next;
		if(curr.next) curr.next = curr.next.next;
	}
	// mencari data
	search(value)
	{
		let curr = this.head;
		while(curr)
		{
			if(curr.value === value) return "Ditemukan";
			curr = curr.next;
		}
		return "Tidak ada";
	}
	// hapus dari depan
	dequeue()
	{
		if(this.head)
		 {
		 	
		 }
	}
	// tampilkan data
	print(label)
	{
		let curr = this.head;
		let hasil = [];
		while(curr)
		{
			hasil.push(curr.value);
			curr = curr.next;
		}
		console.log(`${label}: [${hasil.join(" -> ")}]`);
	}
}
// run kode
// daft mahasiswa
console.log("--- Program Daftar Mahasiswa ---");
const mhs = new LinkedList();
mhs.append("Andi");
mhs.append("Budi");
mhs.append("Caca");
mhs.print("Daftar Awal");

mhs.remove("Budi");
mhs.print("Setelah budi dihapus");
console.log("Cari Cara:", mhs.search("Caca"));

console.log("\n--- Antrian Konsultasi ---");

// antrian konsultasi
const antrian = new LinkedList();
antrian.append("Siti");
antrian.append("Wawan");
antrian.print("Antrian Masuk");

antrian.dequeue();
antrian.print("Antrian Sisa");
