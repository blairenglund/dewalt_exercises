window.addEventListener('load', function() {

	//variable that represents the button
	var button = document.getElementById('button');

	//variable that represents the progress window
	var modal = document.getElementById('modal');

	//variable that represents the progress bar
	var status = document.getElementById('status')

	//variable that represents the text field
	var text = document.getElementById('text')

	button.addEventListener('click', function() {
		modal.style.display = "block";
		status.style.animationName = "progress";
	});

	status.addEventListener('animationend', function(){
		modal.style.display = "none";
		status.style.animationName = "";
		text.innerHTML = "Your problem should now be fixed.<br><br>More problems? Press the Fix It button again.";

	});

})