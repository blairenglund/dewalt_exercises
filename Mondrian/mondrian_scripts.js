window.addEventListener("load", function(){

	//create a variable for each color selector. Clicking these will change current color
	var bluebutton = document.getElementById('bluebutton')
	var redbutton = document.getElementById('redbutton')
	var yellowbutton = document.getElementById('yellowbutton')
	var whitebutton = document.getElementById('whitebutton')

	//create a variable for the squares in the canvas
	var squares = document.querySelectorAll("div.canvas div");

	var currentcolor = "";

	//creates event listeners for each square
	//
	//c is the selected color
	function makeListeners(x) {
		squares[x].addEventListener('click', function() {
			squares[x].style.backgroundColor = currentcolor;
		});
	};

	bluebutton.addEventListener('click', function(){
		currentcolor = "blue";
		for (var i = 0; i < squares.length; i++) {
			makeListeners(i);
		}
	});

	redbutton.addEventListener('click', function(){
		currentcolor = "red";
		for (var i = 0; i < squares.length; i++) {
			makeListeners(i);
		}
	});

	yellowbutton.addEventListener('click', function(){
		currentcolor = "yellow";
		for (var i = 0; i < squares.length; i++) {
			makeListeners(i);
		}
	});

	whitebutton.addEventListener('click', function(){
		currentcolor = "white";
		for (var i = 0; i < squares.length; i++) {
			makeListeners(i);
		}
	});

})