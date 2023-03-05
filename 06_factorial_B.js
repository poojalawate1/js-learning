function factorialWordCount(words)
{
    if(words === undefined || isNaN(words) && typeof words == "number" || words === null)
    {
        return `Invalid input `;
    }
    else
    {
  
      let word = words.split(" ") ;
      const totalWord = word.length;
      console.log(`Given string is valid: ${words} : ${totalWord}`);
    
      let fact = 1;
      for(i = totalWord ; i>= 1 ; i--)

      {
        fact = fact * i;
      }

     console.log(`Factorial of ${words} : ${fact}`); ;

    }
  }

factorialWordCount("Revision is the mother of Success");
factorialWordCount("We never fail, we always learn");
factorialWordCount(null);
factorialWordCount("");
factorialWordCount("Pooja Chandrakant Lawate");

