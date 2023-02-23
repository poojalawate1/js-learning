console.log(`----------------------Male Marriage Eligibility----------------------`);
function maleMarriageEligibility(gender , age , boyName){
    var genders = ( gender && age>=21 ) ? `Hey ${boyName} you are eligible for Marriage` :  `Hey ${boyName} you are Not eligible for Marriage` ;
    return genders ; 

}
var r = maleMarriageEligibility("Male" , 25 , "Billgates");
var r1 = maleMarriageEligibility("Male" , 17 , "Stew Jobs");

console.log(`Male Marriage Eligibility is: ${r}`);
console.log(`Male Marriage Eligibility is: ${r1}`); 


console.log(`----------------------Female Marriage Eligibility----------------------`);
function maleMarriageEligibility(gender , age , girlName){
    var genders = ( gender && age>=18 ) ? `Hey ${girlName} you are eligible for Marriage` :  `Hey ${girlName} you are Not eligible for Marriage` ;
    return genders ; 

}
var r = maleMarriageEligibility("Female" , 16 , "Jenifer");
var r1 = maleMarriageEligibility("Female" , 27 , "Malinda Gates");

console.log(`Female Marriage Eligibility is:  ${r}`);
console.log(`Female Marriage Eligibility is:  ${r1}`);