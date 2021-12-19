function problem06(){
    var a = parseFloat(document.getElementById("num1").value);

    if((a%2==0)&&(a%3==0)){
        document.getElementById("output").innerHTML = 'yes, this is divisible by 6';
        var cnt = parseFloat(document.getElementById("divBy6").innerHTML);
        cnt = cnt +1;
        document.getElementById("divBy6").innerHTML = cnt;
    }
   
    else{
        document.getElementById("output").innerHTML = 'this is not divisible by 6';
    }
    if(a==0){
        document.getElementById("output").innerHTML = 'program ended';
        document.getElementById("num1").setAttribute("disabled", "true");
        document.getElementsByTagName("button")[0].setAttribute("disable", "true");
        document.getElementById("ex_8").style.display = "inline";
    }
}
