class Bank{
   constructor(bank_name,location,accont_no,ifsc,interest_rate){

   this.bank_name =bank_name;
   this.location=location;
   this.accont_no=accont_no;
   this.ifsc=ifsc;
   this.interest_rate=interest_rate;
   }
}
const axisBank = new Bank("Axis Bank", "Bajirao Road", "4597863258", "AXIS4567893", 6);
const sbiBank = new Bank("SBI","Pandharpur","569867423","SBI0000747",10);
const icicBank = new Bank("ICIC", "Mumbai", "62514897564", "YES0004598", 14.75 );
const kotakBank = new Bank("Kotak Bank", "Pune", "8956321476", "KONT569231", 9.75 );
const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 6.5 );
const panjabBank = new Bank("Panjab Bank", "Bengalor", "85622179896", "PANJAb02659", 8.5 );

const setBank = new Set();
setBank.add(axisBank);
setBank.add(sbiBank);
setBank.add(icicBank);
setBank.add(kotakBank);
setBank.add(hdfcBank);
setBank.add(panjabBank);
for (const bank of setBank ) {
    console.log(`Bank Name is: ${bank.bank_name} and Location: ${bank.location}`);
    
}


