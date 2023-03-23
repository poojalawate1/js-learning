const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("--------Find gretest number greater than 50 -------------");
const greaterNum = arrayNumbers.filter((element) => {
  return element >= 50;
});
console.log(`Number Greater than 50  :`, greaterNum);

console.log("------------Even Number-------------");
const evenNum = arrayNumbers.filter((element) => {
  return element % 2 == 0;
});
console.log(`Even Number :`, evenNum);

console.log("-------------Odd Number-------------");
const oddNum = arrayNumbers.filter((element) => {
  return element % 2 == 1;
});
console.log(`Odd Number : `, oddNum);

console.log(`-------------Number multiple of 5 -------------`);
const multiple = arrayNumbers.filter((element) => {
  return element % 5 == 0;
});
console.log("Number multiple of 5 :", multiple);

console.log("-------------Number which are between 20 and 50----------------");
const number20 = arrayNumbers.filter((element) => {
  return element >= 20 && element <= 50;
});
console.log("Number which are between 20 and 5:", number20);
