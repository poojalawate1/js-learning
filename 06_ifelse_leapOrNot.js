var cheack_leap_year = function(year) {
    if(typeof year !== "number" || isNaN(year))
    {
       console.log(`Year is not valid : ${year}`);  
    }
     else if(year%4 == 0) 
        {
           console.log(`Year is leap : ${year}`);
        }
        else
        {
            console.log(`Year is Not leap : ${year}`);
        }
    }

cheack_leap_year(2020);
cheack_leap_year(1999);
cheack_leap_year(1600);
cheack_leap_year(2022);
cheack_leap_year(1945);
cheack_leap_year(null);
cheack_leap_year("Twenty Twenty");
cheack_leap_year(undefined);
cheack_leap_year(NaN);
cheack_leap_year(1750);
