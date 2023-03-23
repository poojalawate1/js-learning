class Vehicle {
    constructor(vehicleName, vehicleColor,vehiclePrice,vehicleEngine ,vehicleBrand ){
    this.vehicleName =vehicleName;
    this.vehicleColor=vehicleColor;
    this.vehiclePrice=vehiclePrice;
    this.vehicleEngine=vehicleEngine;
    this.vehicleBrand=vehicleBrand;
    }
}
 const vehical1 = new Vehicle("Uricorn", "Black", 400000, "Diesel", "Hyundai"); 
 const vehical2 = new Vehicle("Shift", "Blue", 690000, "Electric ", "Daimler" );
 const vehical3 = new Vehicle("Maruti Suzuki", "Red", 685000, "Diesel", "Ford Motor" );
 const vehical4 = new Vehicle("BMW", "Black", 5500000, "Petrol", "BMWX5" );
 const vehical5 = new Vehicle("Audi", "white", 9800000, "Electric ", "Audi e-tron GT" );


 const arryOfVehicles = [vehical1,vehical2,vehical3,vehical4,vehical5];

for (const key in arryOfVehicles) {
    if (Object.hasOwnProperty.call(arryOfVehicles, key)) {
        const element = arryOfVehicles[key];
        
    }
}

console.log(`--------------------------------------------------------------------------------------------------------------`);

class College{
    constructor(collegeName, collegeDeparment, collegeUnivercity,   collegePlace, collegePlacement)
    {
    this.collegeName = collegeName;
    this.collegeDeparment = collegeDeparment;
    this.collegeUnivercity = collegeUnivercity;
    this.collegePlace = collegePlace;
    this.collegePlacement = collegePlacement;

}
}
let college1 = new College("FTC", "CSE", "DBATU", "Sangola" , "TCS");
let college2 = new College("SVGCL", "CIVIL", "PUNE", " Pune" , "Wipro");
let college3 = new College("Sihagad college", "E&TC", "Solapur", "Pandharpure" , "KPIT");
let college4 = new College("SVERI", "Mechanical", "Mumbai", " Pandharpur" , "IBM");


function traverseObject(arg){
    for (const key in arg) {
            console.log(`${key} : ${arg[key]}`);    
        }

    }

    traverseObject(college1);
    console.log(`--------------------------------------------------------------------------------------------------------------`);
    traverseObject(college2);
    console.log(`--------------------------------------------------------------------------------------------------------------`);
    traverseObject(college3);
    console.log(`--------------------------------------------------------------------------------------------------------------`);
    traverseObject(college4);
    console.log(`--------------------------------------------------------------------------------------------------------------`);


    
