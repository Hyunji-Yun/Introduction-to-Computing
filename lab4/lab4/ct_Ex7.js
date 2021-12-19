function problem06(){
    var a = parseFloat(document.getElementById("num1").value);

    if(a>0){
        document.getElementById("output").innerHTML = 'positive';
        var cnt = parseFloat(document.getElementById("positives_counter").innerHTML);
        cnt = cnt +1;
        document.getElementById("positives_counter").innerHTML = cnt;
    }
    else if (a<0){
        document.getElementById("output").innerHTML = 'negative';
        var cnt = parseFloat(document.getElementById("negatives_counter").innerHTML);
        cnt = cnt +1;
        document.getElementById("negatives_counter").innerHTML = cnt;
    }
    else{
        document.getElementById("output").innerHTML = 'program ended';
        document.getElementById("num1").setAttribute("disabled", "true");
        document.getElementById("button")[0].setAttribute("disabled","true");
        document.getElementById("ex_7").style.display = "inline";
    }
    }
