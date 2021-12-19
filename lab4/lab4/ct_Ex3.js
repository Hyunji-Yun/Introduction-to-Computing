function equation() {
    
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    
    var d= Math.sqrt(b*b-4*a*c);
    var s= (-b+d)/(2*a);
    var q= (-b-d)/(2*a);
    var n= s.toFixed(2);
    var h= q.toFixed(2);

    document.getElementById("output").innerHTML = "one root: "+ n +"<br></br>"+"another: "+h;
    
 
 }
 