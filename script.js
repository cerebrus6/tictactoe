// const win =	[
// 		[0, 1, 2], [0, 4, 8],
// 		[0, 3, 6], [1, 4, 7],
// 		[2, 5, 8], [3, 4, 5],
// 		[6, 7, 8], [2, 4, 6]
// 		];

//const grid = () => Array.from(document.getElementsByClassName('box'));

// var player1 = [];
// var player2 = [];

// function sort() {
// 	if(player2.length() >= 3) {
// 	for(i=0, i<=n;i++) {
// 		for()
// 		}
// 	}
// }

var x = 1;
var z = 0;
$('#b0, #b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8').on("click", function() {
	var y = $(this).attr("data-used")
	if(x == 1 && y == "false") {
	$(this).html("O");
	x = 0;
	z++;
	$(this).attr("data-used", "true");	
	} else if(x == 0 && y == "false") {
	$(this).html("X");
	x = 1;
	z++;
	$(this).attr("data-used", "true");
	}
	if(z == 9) {
		$("#center").html("<button id='new_Game' onclick='location.reload()'>New Game</button>");
	}
	console.log("click")
	console.log(y)
	console.log(x)
});