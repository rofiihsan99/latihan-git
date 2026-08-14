class Node
{
	constructor(val)
	{
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList
{
	constructor()
	{
		this.head = null;
		this.tail = null;
	}

	// + data keakhir
	add(val)
	{
		let node = new Node(val)
		if(!this.head)
		{
			this.head = this.tail = node;
		}
		else
		{
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
	}
	// sisip berdasarkan posisi , m dar 0
	insertAt(pos, val)
	{
		let node = new Node(val);
		if(pos === 0)
		{
			node.next = this.head;
			if(this.head) this.head.prev = node;
			this.head = node;
			return;
		}
		let curr = this.head;
		for(let i = 0; i < pos && curr; i++) curr = curr.next;
		if(!curr) return this.add(val); // jik pos diluar nurul
		node.prev = curr.prev;
		node.next = curr;
		curr.prev.next = node;
		curr.prev = node;
	}
	// hap brdsrkn pos
	removeAt(pos)
	{
		let curr = this.head;
		for(let i = 0; i < pos && curr; i++) curr = curr.next;
		if(!curr) return;
		if(curr.prev) curr.prev.next = curr.next;
		else this.head = curr.next;
		if(curr.next) curr.next.prev = curr.prev;
		else this.tail = curr.prev;
	}
	// car dat
	find(val)
	{
		let curr = this.head;
		while(curr)
		{
			if(curr.val === val) return "Ditemukan: " + curr.val;
			curr = curr.next;
		}
		return "Tidak Ditemukan";
	}
	print(forward = true)
	{
		let res = [];
		let curr = forward ? this.head : this.tail;
		while(curr)
		{
			res.push(curr.val);
			curr = forward ? curr.next : curr.prev;
		}
		console.log(forward ? "Maju:" : "Mundur:", res.join(" > "));
	}
}
	// pakai
 let list = new LinkedList();

// 1, + 5 nama
list.add("Nabil");
list.add("Pandu");
list.add("Alpi");
list.add("Lepi");
list.add("Kuhkuh");

// cetak maju & durr
list.print(true);
list.print(false);

// hap pos 3 , dex 2, alpi
console.log("\n--- Hapus Posisi ke-3 ---");
list.removeAt(2);

// cet ul
list.print(true);

// car dar
console.log(list.find("Kuhkuh"));
