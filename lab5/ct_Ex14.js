// in Ex9 to Ex15, change the name of the following function properly
function  fibonacci() {
  
    /* this statement defines an object reference to the 
       html element that its ID is "output".
       Every time you want to output something, use outputObj */
    var outputObj=document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
   
  
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML="number: "+a+"<br></br> Fibonacci: ";
  
    // translate rest of your flowcharts to js here:
    
    var secondLast=0;
    var last=1;
    var newValue;
   var i=1;
   
   while(i<=a){
      newValue= secondLast + last;
     
       outputObj.innerHTML= outputObj.innerHTML + secondLast +"," ;
       secondLast=last;
       last=newValue;
         i++;
       
   
       
   }
 
   
    
   
    
    

        
           
    
      
      
   
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }