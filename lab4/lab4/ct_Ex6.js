function problem06(){
    var a = parseFloat(document.getElementById("num1").value);

    if(a>0){
        document.getElementById("output").innerHTML = 'positive';
    }
    else if (a<0){
        document.getElementById("output").innerHTML = 'negative';
    }
    else{
        document.getElementById("output").innerHTML = 'program ended';
        document.getElementById("num1").setAttribute("disabled", "true");
        document.getElementById("button")[0].setAttribute("disabled","true");

    }
    }