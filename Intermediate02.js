


function calculate() {
	var mathGrade = document.getElementById('button1').value;
	var physicsGrade = document.getElementById('button2').value;
	var englishGrade = document.getElementById('button3').value;
	
	var sum = Number(mathGrade) + Number(physicsGrade) + Number(englishGrade);
	var avg = sum/3;
	document.write("Your grade Sum is: " + sum +"<br> Your grade Average is: " + avg)
};
document.getElementById("button").onclick = function() {calculate()};

