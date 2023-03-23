const sbiBank ={
    bankName : "State Bank of India",
    location : 'Pandharpur',
    accountNo : 569874302365,
    ifsc : 'SBI0000747',
    interestRate : 4.9,
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
        } 
    
};
sbiBank.showDetails();
console.log('------------------------------------------------------------------------------------------------------------------------------------');

const axisBank ={
    bankName : 'AXIS Bank',
    location : 'Solapur',
    accountNo : 589237851962,
    ifsc : 'AXIS0000256',
    interestRate : 4.7,
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
        }
        
}

axisBank.showDetails();
console.log('------------------------------------------------------------------------------------------------------------------------------------');


const hdfcBabk ={
    bankName : 'HDFC',
    location : 'Mumbai',
    accountNo : 89567234662,
    ifsc : 'HDFC0008695',
    interestRate : 5,
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
        }       
}

hdfcBabk.showDetails();
console.log('------------------------------------------------------------------------------------------------------------------------------------');

const yesBank ={
    bankName : 'YES',
    location : 'Pune',
    accountNo : 742615893785,
    ifsc : 'YES500056',
    interestRate :4.2,
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
        } 
}
yesBank.showDetails();





