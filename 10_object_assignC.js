console.log(`1.Perform shallow clone on arrayNums, Update cloned array with values → 55, 66 using push () `);
const arrayNums = [ 20, 3, 4, 56, 90, 400, 49 ];
console.log(`  Given Array is : ${arrayNums}`);
const shallowArray =  arrayNums;
shallowArray.push(55,66);
console.log(`  Shallow Array is : ${shallowArray}`);

console.log(`2.Perform deep clone using spread operator, Update original array i.e arrayNums with values 10, 25 at last position `);
const deepCloneArray = [...arrayNums]; //Deep cloning
arrayNums.push(10,20);
console.log(`  Origninal Array : ${arrayNums}`); 
console.log(`  Cloned Array ${deepCloneArray}`);

console.log(`3.Given other array → arrayEven = [ 2, 30, 14, 8], Merge or concat this array with ‘arrayNums’ using spread operator`);
console.log(`  Given Array [2, 30, 14, 8]`);
const  arrayEven = [2, 30, 14, 8];
const mergeArray = [...arrayEven,...arrayNums ];
console.log(`  Concat the arrayEven and arrayNums : ${mergeArray}  `);

console.log(`4.Create the employee_info object`);
const employee_info ={
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month :"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street: "Kanch Pokli ,431202",

        },
        city: "Mumbai",
        state:"Maharashtra",
        country:"India",
    },
    mobiles:[`+91 8600 3456 88, 1800-4567 32, +91 9096 5678 77` ]
}
console.log(`5.Employee details `);
console.log(`  a.Address`);
const address1 = employee_info.address.locality.colony;
const address01 = employee_info.address.locality.street;

const address2 = employee_info.address.city;
const address3 = employee_info.address.state;
const address4 = employee_info.address.country;
console.log(`    Address :Locality : ${address1} , Street : ${address01}, City : ${address2} ,State : ${address3}, Conutry : ${address4}`);
console.log(`  b.Mobile numbers`);
const mobile1 = employee_info.mobiles;
console.log(`    Mobile numbers : ${mobile1}`);

console.log(`6.Perform deep copy using JSON.stringfy( )`);
const clonedObject = JSON.parse(JSON.stringify(employee_info)); //Cloned Object

console.log(`  a.Update property july_month salary to 80K on cloned object`);
clonedObject.salary.july_month = '80,000INR';
clonedObject.country = "UK"; //Origibnal Object
console.log(`     Orignal property month salary: ${employee_info.salary.july_month}`);
console.log(`     Updated property month salary: ${clonedObject.salary.july_month}`);
console.log(`     Orignal property country: ${employee_info.address.country}`);
console.log(`     Updated property country: ${clonedObject.country}`);





 


