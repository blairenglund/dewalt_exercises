window.addEventListener('load', function() {

	button.addEventListener("mouseup", function(){
		//following variable is the button to be clicked
		var button = document.getElementById('button');

		//following array is a list of colors to be chosen randomly
		var colors = ['#f53e05', 
					  '#4876ff', 
					  '#800080', 
					  '#b6fcd5', 
					  '#7ac5cd', 
					  '#fa8072', 
					  '#7e235b', 
					  '#84bf41', 
					  '#ffce00'];

		var randomnumber = Math.floor(Math.random()*10);

		document.body.style.backgroundColor = colors[randomnumber];
	})


})