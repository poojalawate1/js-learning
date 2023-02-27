console.log(`------------------NUMERICSL STRING USED WITH + GIVES STRING TYPE---------------`);

var result ;
result = '3' + 2;
console.log( `result '3' + 2 is : ${result}`);

result = '3' + true;
console.log( `result '3' + true  is : ${result}`);

result = '3' + undefined;
console.log( `result '3' + undefined is : ${result}`);

result = '3' + null;
console.log( `result '3' + null is : ${result}`); 

console.log(`-----------------IF BOOLEAN IS USE ,TRUE IS 1 ,FALSE IS 0-------------------`);
var result = '4' - true;
console.log(`result '4' - true is ${result}`);

var result = 4 + true;
console.log(`result 4 + true is ${result}`);


var result = 4 + false;
console.log(`result 4 + false is ${result}`);

console.log(`---------------NUMERIC STRING USED WITH - , / , *---------------`);

result = '4'  - '2';
console.log( `result '4' - '2' is : ${result}`); 

result = '4'  * '2';
console.log( `result '4' * '2' is : ${result}`); 

result = '4'  / '2';
console.log( `result '4' / '2' is : ${result}`);

console.log(`---------------ARITHMETIC OPERATION OF UNDEFINED WITH NUMBER , BOOLEAN OR NULL GIVES NULL----------------------`);
var result = 4 + undefined;
console.log(`result 4 + undefined is ${result} `);

var result = 4 - undefined;
console.log(`result 4 - undefined is ${result} `);

var result = true + undefined;
console.log(`result true + undefined is ${result} `);

var result = null + undefined;
console.log(`result null + undefined is ${result} `);

console.log(`---------------INVALID STRING------------`);
var result ;
result = Number('hello');
console.log('result Number "hello" is ${result');

result = Number(undefined);
console.log('result Number "undefined" is ${result');

result = Number('NaN');
console.log('result Number "NaN" is ${result');

console.log(`-----------------EXPLICIT CONVERSION-------------`);
var numberInString = "100";
console.log( 'TyprOf is ' ,typeof numberInString);
var myNumber = +numberInString;
console.log( 'TyprOf is ' ,typeof myNumber);

console.log(`-----------------EXPLICIT CONVERSION toSTRING() METHOD-------------`); 
var  myNumber = 100;
console.log( 'TyprOf is ', typeof myNumber);
var afterConversion = myNumber.toString();
// cansole.log(typeof afterConversion  ); 












