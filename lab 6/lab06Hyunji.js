function problem01() { 
    
    var outputobj = document.getElementById("output");
    var a = parseInt(prompt("Please enter a number:"));
var prime=true;
var d=2;

while(prime==true && d<=a/2){
    if(a%d==0){
        prime=false;
        d = d+1;
    }
    else{
        d= d+1;
    }
}
if(prime==true){
   alert (a + " is prime");

}
else{
   alert(a+ " is not prime");
}
}


function problem02() { 
    
    var outputobj = document.getElementById("output");
    var a = parseInt(prompt("Please enter a number:"));
    var sum1= 0;
    var sum2= 0;

    for(i=1; i<=4; i++){
        sum1= sum1 + a;
    }
    for(i=1; i<=4; i++){
        sum2= sum2 + a;
    }
    if(sum1==sum2){
        alert("yes");
    }
    else{
       alert("no");
    }

}

function problem03() { 
    
    var outputobj = document.getElementById("output");
    var p=0;
    var n=0;

    do{
        var a = parseInt(prompt("Please enter a number:"));
        if(a>0){
            p = p+1;
        }
        else if(a<0){
            n = n+1;
        }
    
    }
    while(num=!0 && p <= 2*n);
    
}

function problem04() { 
    
    var outputobj = document.getElementById("output");
    var a = parseInt(prompt("Please enter a number:"));

    var cnt1=0;
    var cnt2=0;

    for(i=1;i<=4; i++){
        if(a<0){
            cnt1=cnt1+1;
        }
    }
    for(i=1;i<=4; i++){
        if(a>0){
            cnt2=cnt2+1;
        }
    }
    if(cnt1==cnt2){
      alert("yes");
    }
    else{
      alert("no");
    }
}
function problem05(){

    var outputobj = document.getElementById("output");
    var a = parseInt(prompt("Please enter a number:",""));
    

    for(i=2;i<=a; i++){
     
        if (prime(i)==ture){

            var flag=true;
            var d=2;

            while(flag==true && d<=i/2){

                if(i%d==0){
                    flag=flase;
                    d = d+1;
                }
                else{
                    d = d+1;
                }
            }
            return flag;
        }
        
         alert(i);           
        }    
      
}



function problem06(){

    var outputobj = document.getElementById("output");
    var a = parseInt(prompt("Please enter a number:"));
    
    for(i=2; i<=a; i=i+1){
        function prime(i){
            var flag = true;
            var d = 2;

            while(flag==true && d<=i/2){
                if (i%d == 0){
                    flag = false;
                    d = d+1;
                }
                else{
                    d = d+1;
                }
            }
            return flag;
        }
        function has7(i){
            while(i>0){
                if(i%10==7){
                    return true;
                }
                else{
                    i = parseInt(i/10);
                }
            }
            return false;
        }
        if(prime(i)==true && has7(i)==true){
           alert(i);
        }
    }
}