let professor = {
  firstName : 'Pooja',
  lastName : 'Lawate',
  age : 23,
  deparment : 'CSE',
  salary : 300000,

 //Neated objest in degree. 
 degree : {
    degree1 : 'CSE',
    degree2 : 'Adv Computing',
    degree3 : 'Civil', 
 },

//  Add a array 
certificates :['Hack Rank Participation', 'Certificate in IFE course', 'Certification in Adv Programming'],

// Add function
 teacher : function(){
  this.professor
  return `Degree is degree1 : ${this.degree.degree1} , degree2 : ${this.degree.degree2}  , degree3 : ${this.degree.degree3}}`
},
totalExperince : '14 year',

};
console.log('---------------------------------------1. Object properties ---------------------------------------------- ');
console.log('Object Properties : ', professor);
console.log('---------------------------------------2. Nested object add ---------------------------------------------- ');
console.log(professor.degree);
console.log('---------------------------------------3. Add one array  -------------------------------------------------- ');
console.log(professor.certificates);
console.log('---------------------------------------4. Add function ---------------------------------------------------- ');
let result = professor.teacher();
console.log(result);
console.log('---------------------------------------5. Add new property like totalExperience -----------------------------');
console.log('Total Experience :',professor.totalExperince);

console.log('---------------------------------------6. Modify any existing property ---------------------------------------');
console.log(' Modify  property :', professor.salary = 400000);

console.log('---------------------------------------7. Add one new certificate  -------------------------------------------');
console.log('Add one new certificate :' ,professor.certificates.push("Oracale Certified"));
console.log(professor.certificates);

console.log('---------------------------------------8. last element of the array certificates   -------------------------------------------');
console.log(professor.certificates[professor.certificates.length-1]);
