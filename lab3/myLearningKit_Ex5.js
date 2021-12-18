function p01Func() { 
    
   var problem="I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.";
     document.getElementById("problem").innerHTML= problem;
   
  
   document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
    
   document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");
    
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
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
  
  function p02Func() { 
    
    var problem="I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It'ss one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.";
      document.getElementById("problem").innerHTML= problem;
    
   
    document.getElementById("flowchart").setAttribute("src","images/jujeh/jujehDesign.jpg");
     
    document.getElementById("js").setAttribute("src","images/jujeh/jujeh1.jpg");

    document.getElementById("jc").setAttribute("src","images/jujeh/jujeh2.jpg");
     
     document.getElementById("check1").checked=false;
     document.getElementById("check2").checked=false;
     document.getElementById("check3").checked=false;
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

  function checkUncheck3(){
    if (document.getElementById("check3").checked==true) {
      
       document.getElementById("jc");
       document.getElementById("jc").style.display="inline";
    }
    else {
          
       document.getElementById("jc");
       document.getElementById("jc").style.display="none";
    }
  }
  
  
  /* in Ex5, create functions zoomIn() and zoomOut() */
  function zoomIn(){
   document.getElementById("flowchart").style.width="200%";
  }
  function zoomOut(){
   document.getElementById("flowchart").style.width="100%";
  }