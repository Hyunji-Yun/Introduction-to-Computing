function reverseRecursively(){

    var s = prompt("Enter a string:", " ");

    alert(reverse(s));
}
function reverse(s){

    if(s.length <2){
        return s;
    }
    var newString = s.slice(1);
    return reverse(newString)+s[0];
}



function count7srecursively(){

    var n = parseInt(prompt("Enter a number:", " "));

    alert(howMany7(n));
}

function howMany7(n){

    if (n ==0){
        return 0;
    }
    else if (n%10==7){
        return 1+ howMany7(Math.floor(n/10));
    }
    else{
        return howMany7(Math.floor(n/10));
    }
    
}

function recursivemultiply(){
    
    var m = parseInt(prompt("Enter a number:"," "));
    var n = parseInt(prompt("Enter another number", " "));
    
    alert(multiply(m,n));
}

function multiply(m,n){

    if(n==0 || m==0){
        return 0;
    }
    
    else if(n==1){
        return m;
    }

    else if(m==1){
        return n;
    }

    else{
        return multiply(m,n-1)+m;
    }
}

function finditrecursively(){
    
    var arr=[8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 1000, 5001, 20000, 20000, 34511];
    var x = parseInt(prompt("Enter a number:", " "))
   
    if(find(x, arr, 0, arr.length-1)){
        alert("True");
    }
    else{
        alert("False");
    }
}
function find(x,A,i,j){

    var mid = Math.floor((i+j)/2);
    console.log(i,j,mid);
    if(i>j){
        return false;
    }
    else if(i==j){
        if(A[i]==x){
        return true;
    }
    else{
        return false;
    }
 }
   
    else{
    if(A[mid]>=x){
        return find(x,A,i,mid);
    }
    else{
        return find(x,A,mid+1,j);
    }
   } 
}


/*
function button04(){
    var x = parseInt(prompt("Enter a numver you need:", ""));
    var i = parseInt(prompt("Enter the first index of array:",""));
    var j = parseInt(prompt("Enter the last index of array:", ""));
    var A = [8,9,9,12,13,...];
    alert(find(x,A,i,j));
}

function find(x,A,i,j){

    var mid = Math.floor((i+j)/2);

    if(j<=i){
        return false;
    }
    
    if(x==a[mid]){
        return true;
    }
    else if (x<A[mid]){
        return find(x,A,i,mid);
    }
    else if(x>A[mid]){
        return find(x,A,mid+1,j);
    }
    else{
        return false;
    }
} */