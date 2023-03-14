const bankSbi ={
    bankName : 'SBI',
    bankHolderName : 'Pooja lawate',
    ifscCode : 'SBI0000747',
    accontNumber : 758632148963
};

const bankLocation = {
    street : 'Khardi',
    city : 'Pandharpur',
    pinCode : 413317
};

const bank = Object.assign({},bankSbi);
const bankLoc = Object.assign({},bankLocation);

const newBank = {... bankSbi} ;
const newBankLocation = {...bankLocation};

console.log(`cloned BankSbi1 :`, bank);
console.log(`cloned BankLocation1 :`, bankLoc);
console.log(`cloned BankSbi2 :`, newBank);
console.log(`cloned BankLocaion2 :`,newBankLocation );

const rateOfInterest ={
    homeLoanInterest : 10,
    personLoanInterest :5,
    dueInterest :8
}

const sbiDetails = {...bankSbi, ...bankLocation,...rateOfInterest};
console.table(sbiDetails);

for (const key in sbiDetails) {
        console.log(`${key}: ${sbiDetails[key]}`);
        
    }
