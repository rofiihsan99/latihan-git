class Node
{
	constructor(value)
	{
	 	this.value = value;
   		this.next = null;
		this.prev = null;	
	}
}
class CircularDoublyLinkedList
{
	constructor()
	{
		this.head = null;
		this._size = 0;
	}
	isEmpty()
	{
		return this.head === null;
	}
	size()
	{
		return this._size;
	}
	// + pemain diakhir list
	append(value)
	{
		const newNode = new Node(value);
		if(this.isEmpty())
		{
			this.head = newNode;
			newNode.next = newNode;
			newNode.prev = newNode;
		}
		else
		{
			const tail = this.head.prev;
			tail.next = newNode;
			newNode.prev = tail;
			newNode.next = this.head;
			this.head.prev = newNode;
		}
		this._size++;
	}
	// car pos index
	search(value)
	{
		if(this.isEmpty()) return -1;
		let current = this.head;
		let index = 0;
		do
		{
			if(current.value === value)
			{
				return index;
			}
			current = current.next;
			index++;
		}
		while (current !== this.head);
		return -1;
	}
	// hapus node ,saat pemain kalah
	removeNode(node)
	{
		if(this._size === 1)
		{
			this.head = null;
		}
		else
		{
			node.prev.next = node.next;
			node.next.prev = node.prev;
			if(node === this.head)
			{
				this.head = node.next;
			}
		}
		this._size--;
	}
}
// sim gm operbenda
function mainGame(daftarPemain, hitungan)
{
	const list = new CircularDoublyLinkedList();
	//nama pemain
	daftarPemain.forEach(p => list.append(p));
	console.log("Permainan dimulai Dg pemain: " + daftarPemain.join(", "));
	let current = list.head;
	while(list.size() > 1)
	{
		// oper bnd sbyk hitungan X
		for(let i = 0; i < hitungan; i++)
		{
			current = current.next;
		}
		console.log(`Benda Berhenti di: ${current.value}. ${current.value} keluar!`);
		let temp = current.next; // simpan posisi pemain berktnya
		list.removeNode(current);
		current = temp;
	}
	console.log("------------------------");
	console.log(`Pemenangnya adalah: ${list.head.value}`);
}
// run simulasi
const daftarPemain = ["Nabil", "Alpi", "Alpin", "Pasha", "Lepi"];
const hitungan = 3; // dioper 3x setiap putaran
mainGame(daftarPemain, hitungan);

