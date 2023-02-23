function interview(gradScore , hscScore , sscScore , candidateName){
    var result = (gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ) ? `Congrates ${candidateName} you are eligible for TCS` : `Unfortunately ${candidateName} you are Not eligible for interview` 
    return result; 

}
var r1 = interview(80 , 86 , 90 , "Pooja");
var r2 = interview(70 , 65 , 55 , "Vidya");
var r3 = interview(60 , 79 , 88 , "Punam");

console.log(r1);
console.log(r2);
console.log(r3);

