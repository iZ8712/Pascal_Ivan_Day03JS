function randomColor () {
    
    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);
    
    a = rgbToHex(a);
    b = rgbToHex(b);
    c = rgbToHex(c);
    
    document.getElementById("box").style.backgroundColor = "#"+a+b+c;
    
    console.log(a,b,c);
    
}



var rgbToHex = function (rgb) {
    
    var hex = Number(rgb).toString(16);
    
    if (hex.length < 2) {
        
        hex = "0" + hex;
        
        }
        
        return hex;
        
        };


randomColor();



