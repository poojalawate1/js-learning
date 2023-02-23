
function squareOfWordLength(word){
   let le = word.length;
   var squre = le * le
   return squre;

}
console.log(`Square of the length of "JavaScript": ${squareOfWordLength("JavaScript")}`);
console.log(`Square of the length of "Google Chrome": ${squareOfWordLength("Google Chrome")}`);
console.log(`Square of the length of "Developer Smart": ${squareOfWordLength("Developer Smart")}`);


function n(){
   var nameIs = "I am Angular Developer" ;
   var word = nameIs.split(" ");
   var wordLength = word.length;
   var charCount = nameIs.length;
   console.log(`-------------------------------------------------`);

   var result = charCount / wordLength ;
   var result1 = charCount * wordLength ;
   console.log(`String length is divide by ${result}`);
   console.log(`String length is multiply by ${result1 }`);
}
n();