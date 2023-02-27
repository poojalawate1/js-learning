console.log(`-----------------Male Marriage Eligibility If-Else Block--------------------`);

function maleMarriageEligibility(gender, age ,boyName){
    if(gender == "Male" && age >=21) 
    {
     return `Hey ${boyName} you are eligible for Marriage`;
    }
    else
    {
        return`Hey ${boyName} you are Not eligible for Marriage `;
    }

}
console.log(`${maleMarriageEligibility("Male" ,25 ,"Billgates")}`);
console.log(`${maleMarriageEligibility("Male" ,17 ,"Stew Jobs")}`);

console.log(`----------------Female Marriage Eligibility If-Else Block-------------------`);

function femaleMarriageEligibility(gender, age ,girlName){
    if(gender == "Female" && age >=18) 
    {
        return `Hey ${girlName} you are eligible for Marriage `;
    }
    else
    {
        return `Hey ${girlName} you are Not eligible for Marriage  `;
    }

}
  console.log(`${femaleMarriageEligibility("Female" ,16 ,"Jenifer")}`);
  console.log(`${femaleMarriageEligibility("Female" ,27 ,"Malinda Gates")}`);


