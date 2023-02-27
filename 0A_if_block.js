console.log(`--------------Greatest Number---------------`);
function greaterNumber(n1 , n2){
    if(n1 > n2 )
{
    console.log(`${n1} and ${n2} is number But greater number is: ${n1}`);
}
   if(n2>n1)
{
   console.log(`${n1} and ${n2} is number But greater number is: ${n2}`);
}
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`-----------------Even Odd Number------------`);
function isEvenOddNum(num){
    if(num % 2 == 0 )
    {
        return true ;
    }
     
    if(num % 2 == 1)
    {
       return false;
    }
}
 console.log('Number 29 is',isEvenOddNum(29));
 console.log('Number 44 is',isEvenOddNum(44));
 console.log('Number 0 is',isEvenOddNum(0));
 console.log('Number 101 is',isEvenOddNum(101));

 
console.log(`-----------------Even Odd Number (True or False)------------`);

function wordLength(word){
    var result = word.length;
    if( result% 2 == 0 )
    {
        return "Even";
    }
     
    if(result % 2 == 1)
    {
       return "Odd";
    }
}
console.log(`"Javascript" word length is ${wordLength("Javascript")}`);
console.log(`"developer" word length is ${wordLength("developer")}`);
console.log(`"Google" word length is ${wordLength("Google")}`);



