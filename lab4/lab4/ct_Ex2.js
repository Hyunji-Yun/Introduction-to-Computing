function area() {
   
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
   
    var s = (a+b+c)/2;
    var h = Math.sqrt (s*(s-a)*(s-b)*(s-c));
    var n= h.toFixed(2);

    document.getElementById("output").innerHTML = "area: " + n;
 
 }
 