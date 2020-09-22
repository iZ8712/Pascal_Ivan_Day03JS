function product(array){
	var multi = 1;
	for(var i =0; i<array.length;i++){
		multi *= array[i];
	}
	return multi;
}
var x  = [2, 2, 5];
document.write(product(x));