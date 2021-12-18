function p01Func() { 
  var problem="I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.";
   document.getElementById("problem").innerHTML= problem;
   document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
   document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
 }
 
 function checkUncheck1(){
   if (document.getElementById("check1").checked==true) {
    
      document.getElementById("flowchart");
      document.getElementById("flowchart").style.display="inline";
   }
   else {
      	 
      document.getElementById("flowchart");
      document.getElementById("flowchart").style.display="none";
   }
 }

 function checkUncheck2(){
   if (document.getElementById("check2").checked==true) {
     	 
      document.getElementById("js");
      document.getElementById("js").style.display="inline";
   }
   else {
      
      document.getElementById("js");
      document.getElementById("js").style.display="none";
   }
 }
 
 

