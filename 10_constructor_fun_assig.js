function Bank (bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
};
 const yesBank = new Bank ("Yes Bank","Pune", "YESB0000568", "0569");
 const sbiBank = new Bank ("SBI Bank","Mumbai", "SBI0000474", "6398");
 const mahBank = new Bank ("Mah Bank","Pandharpur", "MAH0000698", "2597");
 const axisBank = new Bank ("Axi Bank","Kolapur", "AXIS0000568", "0269");

console.log(`Bank name is: ${yesBank.bankName}, location: ${yesBank.location}, ifscCode:  ${yesBank.ifscCode}, branchCode: ${yesBank.branchCode}`);
console.log(`Bank name is: ${sbiBank.bankName}, location: ${sbiBank.location}, ifscCode: ${sbiBank.ifscCode}, branchCode: ${sbiBank.branchCode}`);
console.log(`Bank name is: ${mahBank.bankName}, location: ${mahBank.location}, ifscCode: ${mahBank.ifscCode}, branchCode: ${mahBank.branchCode}`);
console.log(`Bank name is: ${axisBank.bankName}, location: ${axisBank.location}, ifscCode: ${axisBank.ifscCode}, branchCode: ${axisBank.branchCode}`);


 Bank.prototype.openTime = "9 AM IST";
 Bank.prototype.closeTime = "6 PM IST";

  console.log(`Bank is open from ${sbiBank.openTime} to ${sbiBank.closeTime}`);
  console.log(`Bank's name is ${axisBank.bankName} and it closes at ${axisBank.closeTime}`);
  console.log(`Bank's name is ${yesBank.bankName}, its branch code is ${yesBank.branchCode} and it opens at ${yesBank.openTime}`);
  





