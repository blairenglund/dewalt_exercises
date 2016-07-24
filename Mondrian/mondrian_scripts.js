window.addEventListener("load", function(){

	//create a variable for each color selector. Clicking these will change current color
	var bluebutton = document.getElementById('bluebutton')
	var redbutton = document.getElementById('redbutton')
	var yellowbutton = document.getElementById('yellowbutton')
	var whitebutton = document.getElementById('whitebutton')

	//create a variable for the squares in the canvas
	var squares = document.querySelectorAll("div.canvas div");


	bluebutton.addEventListener('click', function(){
		debugger;
		for (var i = squares.length - 1; i >= 0; i--) {
			squares[i].addEventListener('click', function(){
				squares[i].style.backgroundColor = "blue";
			});
		};
	});

	redbutton.addEventListener('click', function(){
		currentcolor = "red";
		debugger;
	});

	yellowbutton.addEventListener('click', function(){
		currentcolor = "yellow";
		debugger;
	});

	whitebutton.addEventListener('click', function(){
		currentcolor = "white";
		debugger;
	});

})