function factorialOfNumber(arg)
{
    if(arg == undefined || isNaN(arg) || arg == null)
    {
        return `Invalid input `;
    }
     
      let factorial = 1;   
      for (let i = 1; i <= arg ; i++)
    {
      factorial = factorial * i ;
 
    }
    return factorial;

}
console.log(` Factorial Of 5 is : ${factorialOfNumber(5)}`);
console.log(` Factorial Of 3 is : ${factorialOfNumber(3)}`);
console.log(` Factorial Of null is : ${factorialOfNumber(null)}`);
console.log(` Factorial Of 8 is : ${factorialOfNumber(8)}`);
console.log(` Factorial Of undefined is : ${factorialOfNumber(undefined)}`);
console.log(` Factorial Of 9 is : ${factorialOfNumber(9)}`);
console.log(` Factorial Of 0 is : ${factorialOfNumber(0)}`);


