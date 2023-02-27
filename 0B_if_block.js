console.log(`-----------Number is Even------------`);
function evenOdd(num){
    if(num % 2 == 0){
        return `${num} is Even number`;

    }
    if(num % 2 == 1)
    {
        return `${num} is Odd number`;
    }
    

}
 console.log( `${evenOdd(45)}`);
 console.log( `${evenOdd(70)}`);
 console.log( `${evenOdd(67)}`);
 console.log( `${evenOdd(97)}`);


console.log(`-----------Vote Eligible------------`);
function votEligible(n){
    if(vote>=18)
    {
        return `You are Eligible to vote`;
    }
    if(vote<18)
    {
        return `You are NOT Eligible to vote`;
     }
}
console.log(`${votEligible(18)}`); 
console.log(`${votEligible(20)}`);
console.log(`${votEligible(17)}`);
console.log(`${votEligible(40)}`);



