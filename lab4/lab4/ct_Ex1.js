function add() {
  
    var w = parseInt(document.getElementById("num1").value);
    var h = parseInt(document.getElementById("num2").value);
   
    var s = w + h;

    document.getElementById("output").innerHTML = "sum: " + s;
 
 }
 