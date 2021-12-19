function equation() {
  
   var a = document.getElementById("num1").value;
   var b = document.getElementById("num2").value;
   var c = document.getElementById("num3").value;
  
   var d= Math.sqrt(b*b-4*a*c);
   var s= (-b+d)/(2*a);
   var q= (-b-d)/(2*a);
   var n= s.toFixed(2);
   var h= q.toFixed(2);

   if(d==0){
       document.getElementById("output").innerHTML = "Its roots are identical";
   }
   else{
       if(d>0){
       document.getElementById("output").innerHTML = "It has 2 distinct roots";
       }
       else{
       document.getElementById("output").innerHTML = "It has no roots in real numbers";
       }
   }
  
}
