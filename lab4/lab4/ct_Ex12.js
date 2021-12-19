function problem06(){
    var a = parseFloat(document.getElementById("num1").value);
    var output = a.toString(2);
    output = Number(output);
    document.getElementById("output").innerHTML=output;
}
