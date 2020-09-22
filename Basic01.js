


function crystal_Gazer() {
	var title = document.getElementById('button1').value;
	var location = document.getElementById('button2').value;
	var name = document.getElementById('button3').value;
	var number = document.getElementById('button4').value;

	

	document.write("You will be a " + title+  " in " + location+  " and married to " + name + " with " +number +" childrens");
};
document.getElementById("button").onclick = function() {crystal_Gazer()};

