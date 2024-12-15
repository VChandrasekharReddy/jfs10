function factorial(n){
    if(n>0){
        return n * factorial(n-1);
    } 
}

function even(){
    for(var i=0;i<=50;i+=2){
        console.log(i);
    }
}

function reverseString(str){
    return str.split("").reverse().join("");
}


// 1)
console.log(factorial(10));
// 3)
even();
// 5)
console.log(reverseString("Hello World"));


