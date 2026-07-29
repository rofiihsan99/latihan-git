const prompt = require("prompt-sync")();

// representasi maze
let maze =
[
	['S', '0', '1', '0'],
	['1', '0', '1', '0'],
	['0', '0', '0', '0'],
	['1', '1', '0', 'E']
];

// posisi awal , s
let pos = { x: 0, y: 0};

// stack u/ save jejak langkah
let stack = [];
stack.push([pos.x, pos.y]);

// func tampil maze
function printMaze()
{
	console.clear();
	for(let i = 0; i < maze.length; i++)
    {
		let row = "";
		for(let j = 0; j < maze[0]. length; j++)
	    {
	  		if(i === pos.x && j === pos.y)
	    {
			row += " p "; // player
		}
	   	 else
	  	 {
			row += " " + maze[i][j] + " ";
	   	}
	}
		console.log(row);
	}
	console.log("\nPakai printah: W = atas, A = kiri, S = bawah, D = kanan, Q = quit");
}

// func cek langkah valid
function isValid(x, y)
{
	return (
		x >= 0 &&
		y >= 0 &&
		x < maze.length &&
		y < maze[0].length &&
		maze[x][y] !== '1'
 );
}

// game loop
let running = true;
while(running)
{
	printMaze();

	if(maze[pos.x][pos.y] === 'E')
	{
		console.log(" Selamat! kamu menemukan EXIT!");
		console.log(" Jejak langkah (stack):", stack);
		break;
	}
	let move = prompt("Langkahmu (W/A/S/D): ").toUpperCase();

	let newX = pos.x;
	let newY = pos.y;

	if(move === "W") newX--;
	else if(move === 'S') newX++;
	else if(move === 'A') newY--;
	else if(move === 'D') newY++;
	else if(move === "Q"){
		console.log(" Keluar Dari Game.");
		break;
	}
	else
	{
		console.log("Input tidak Valid! pakai W/A/S/D.");
		continue;
	}

	if(isValid(newX, newY))
	{
		pos.x = newX;
		pos.y = newY;
		stack.push([pos.x, pos.y]); // save jalur
	}
	else
	{
		console.log("Tidak bisa ke sana, ada tembok!");
	}
}
