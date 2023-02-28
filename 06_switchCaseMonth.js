function monthOfYear(month){
  
    switch (month) {
           
            case 1:
            console.log(`The month is ${month} : January`);
            break;
            case 2:
            console.log(`The month is ${month} : February`);
            break;
            case 3:
            console.log(`The month is ${month} : March`);
            break;
            case 4:
            console.log(`The month is ${month} : April`);
            break;
            case 5:
            console.log(`The month is ${month} : May`);
            break;
            case 6:
            console.log(`The month is ${month} : June`);
            break;
            case 7:
            console.log(`The month is ${month} : July`);
            break;
            case 8:
            console.log(`The month is ${month} : August`);
            break;
            case 9:
            console.log(`The month is ${month} : September`);
            break;
            case 10:
            console.log(`The month is ${month} : October`);
            break;
            case 11:
            console.log(`The month is ${month} : November`);
            break;
            case 12:
            console.log(`The month is ${month} : December`);
            break;

    
        default:
             console.log(`The month is ${month} : not valid`);
        
            break;
    }
}

monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);