
function stringHandsOn(){

     console.log("---------------1.NAME-------------");
     var stringName = "     Hey you are doing good, keep it up      ";
     console.log("String Name is:", stringName);


     console.log("----------------2.LENGTH-------------");
     var length = stringName.length;
     console.log("String length is:", length);


     console.log("---------------3.TRIM--------------");
     var extraSpace = stringName.trim();
     console.log("Remove the leading extra spaces :", extraSpace  );
     var leng = extraSpace.length;
     console.log("Length is after trim:", leng);


     console.log("---------------4.EXTRA SPACES COUNT--------------");
     var count = extraSpace.split(" ").length-1;
     console.log("Extra space count:", count); 
    
     
     console.log("---------------5.FIRST AND LAST CHARACTER--------------");
     var Char = extraSpace.charAt(0);
     var Char1 = extraSpace.charAt(leng-1);
     console.log("First character & Last Character:",Char, '&' ,Char1);


     console.log("--------------6.TOTAL WORD--------------");
     var word =  extraSpace.split(" ");
     console.log("Total words available in String:", word);

     console.log("---------------7.INDEXOf WORD--------------");
     var indexof = extraSpace.indexOf("good");
     console.log("Good indexof is:", indexof)


     console.log("---------------8.SUBSTRING STARTING--------------");
     var substrings = extraSpace.slice(22);
     console.log("Substring starting from:", substrings);


     console.log("---------------9.END WITH UP--------------");
     var end =  extraSpace.endsWith("up");
     console.log("End with up :", end);


     console.log("---------------10.START WITH HEY--------------");
     var end =  extraSpace.startsWith("Hey");
     console.log("String with Hey :", end);
}
stringHandsOn();


