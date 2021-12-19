function problem06(a, b){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var answer = a;
    for(i=0; i<b-1; i++){
        answer += a;
    }
   
document.getElementById("output").innerHTML = answer;
}
