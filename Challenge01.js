var pname1 =prompt("Player 1 name: ");
var pname2 = prompt("Player 2 name");
document.getElementById('players').innerHTML = pname1+" Vs. "+pname2;


document.getElementById('leftbutton').onclick = function() {

	var x = Math.floor(Math.random()*6+1);
	var y = Math.floor(Math.random()*6+1);
	var z = Math.floor(Math.random()*6+1);
	sum1 = x+y+z; 

	document.getElementById('leftparagraph').innerHTML = "You rolled a: "+ x + ", "+ y +" and "+z+"<br>Your sum is: "+ sum1;


};
document.getElementById('rightbutton').onclick = function() {
	var x = Math.floor(Math.random()*6+1);
	var y = Math.floor(Math.random()*6+1);
	var z = Math.floor(Math.random()*6+1);
	var sum2 = x+y+z; 

	document.getElementById('rightparagraph').innerHTML = "You rolled a: "+ x + ", "+ y +" and "+z+"<br>Your sum is: "+ sum2;
};






