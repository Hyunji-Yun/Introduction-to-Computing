function mapping() {
                                   
    var a = document.getElementById("num1").value;

    switch (true){
     case (a>89): 
        answer="A+";
        break;
     case (a>79): 
        answer="A";
        break;
     case (a>69): 
        answer="B+";
        break;
     case (a>59): 
        answer="B";
        break;
     case (a>49): 
        answer="C+";
        break;
     case (a>39): 
        answer="C";
        break;
     case (a>29): 
        answer="D+";
        break;
     case (a>19): 
        answer="D";
        break;
        
     default:
        answer="F";
    }
       document.getElementById("output").innerHTML = answer;
 }
 