function problem06(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var sum = 0;
    if(a<b){
    for(i=a; i<=b; i++){
        sum +=i;
    }
    document.getElementById("output").innerHTML = sum;
    }
    else if(a>b){
        for(i=b; i<=a; i++){
            sum += i;
        }
        document.getElementById("output").innerHTML = sum;
    }
    else{
        sum = 0;
  
    document.getElementById("output").innerHTML = sum;  
}
}