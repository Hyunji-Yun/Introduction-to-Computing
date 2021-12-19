function problem06(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var q = parseInt(a/b);
    var result;

    result= a-(q*b);

    

    document.getElementById("output").innerHTML=result;

}