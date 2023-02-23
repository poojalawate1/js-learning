
console.log(`-------------------Greater Number------------------`);
function greaterNumber(a, b){

    var result = a>b ? `A: ${a}` : `B: ${b}`;
    return result;

}
var num1 = greaterNumber(10, -10);
var num2 = greaterNumber(800, 899);

console.log(`Greater Number Is ${num1}`);
console.log(`Greater Number Is ${num2}`);


console.log(`-------------------Even Or Odd------------------`);
function isEvenOrOddNum(a){ 

    var result = (a % 2 == 0) ? 'True' : 'False' ;
    return result;

 } 
 var num = isEvenOrOddNum(29);
 var num1 = isEvenOrOddNum(44); 
 var num2 = isEvenOrOddNum(0);
 var num3 = isEvenOrOddNum(101);

 console.log(`Number is: ${num}`);
 console.log(`Number is: ${num1}`);
 console.log(`Number is: ${num2}`);
 console.log(`Number is: ${num3}`);


 console.log(`-------------------Even Or Odd------------------`);
 function wordLength(word){

    var value = word.length;
    var r = (value  % 2 == 0) ? "Even" : 'Odd';
    return r;
  

 
 }
 var num = wordLength('Javascript');
 var num1 = wordLength('developer');
 var num2 = wordLength('Google');

 console.log(`Word "Javascript" has : ${num} length`);
 console.log(`Word "Developer" has : ${num1} length`);
 console.log(`Word "Google" has : ${num2} length`);
