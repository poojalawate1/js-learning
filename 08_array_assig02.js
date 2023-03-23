const arrayNumber = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`1. Find the total elements available or length and log on console`);
let lengthOfArray = arrayNumber.length;
console.log(`Array : ${arrayNumber} & Total element available length : "${lengthOfArray}"`);

console.log(`2. Log the first element and last element in arrayNumbers and log on console`);
console.log(`First Element : "${arrayNumber[0]}" & Last Element "${arrayNumber[arrayNumber.length-1]}"`);

console.log(`3.Log the thirst last element using length property and log on console`);
let lastThirst = arrayNumber[arrayNumber.length-3];
console.log(`The thirst last element : "${lastThirst}"`);

console.log(`4. Find the all even numbers and log on console`);
for (let index = 0; index <  arrayNumber.length; index++) 
{
    const element = arrayNumber[index];
    if (element % 2==0) 
    {
        console.log(`Even numbers is : ${element}`);
    }   
}

console.log(`5.Find the odd numbers and log on console`);
for (let index = 0; index < arrayNumber.length; index++) 
{
    const element = arrayNumber[index];
    if (element % 2 == 1) 
    {
        console.log(`Odd numbers is : ${element}`);
    }  
}

console.log(`6.Find all the even positioned elements from arrayNumbers, sum it and log on console`);
let evenNumber = 0;
for (let index = 0; index <arrayNumber.length; index++) 
{
    if (index % 2 === 0 ) 
    {
      evenNumber = evenNumber + arrayNumber[index];
    }
}
console.log(evenNumber);

console.log(`7.Find all the odd positioned elements from arrayNumbers, sum it and log on console`);

console.log(`8.Find the sum of all elements from arrayNumbers, log on console`);
let sum= 0 ;
for (let index = 0; index <  arrayNumber.length; index++) 
{
    const element =  arrayNumber[index];
    sum = sum+element;
}
console.log(`Sum of all elements : ${sum}`);

console.log(`9.Find the numbers which are multiple of 5`);
for (let index = 0; index < arrayNumber.length; index++) 
{
    const element = arrayNumber[index];
    if(element % 5 == 0)
    {
        console.log(`Multiple of 5 : ${element}`);
    }  
}

console.log(`10.Is number 115 available in arrayNumbers`);
for (let index = 0; index <arrayNumber.length; index++) 
{
     console.log(`Is number 115 available :`, arrayNumber.includes(115));  
}

console.log(`11.Is number 23 available in arrayNumbers `);
for (let index = 0; index < arrayNumber.length; index++)
 { 
    console.log(`Is number 23 available :`,arrayNumber.includes(23));       
 }

console.log(`12.Insert numbers → 55, 66 before index 3 and log array on console`);
 arrayNumber.splice(3, 0, 55, 66);
console.log(arrayNumber );

console.log(`13.Delete 3 elements starting from index 4 and log arrayNumbers on console`);
let deleteElement = arrayNumber.splice(4,3);
console.log(deleteElement);