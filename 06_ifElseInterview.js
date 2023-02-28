function interview(gradeScore ,hscScore ,sscSrore , candidateName) {
    if (gradeScore>=70 || hscScore>=80 ||sscSrore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS` );
      
        
    } else {
        console.log(`Unfortunately ${candidateName} you are Not eligible for interview`);
        
    }
}

interview(80 , 86 , 90 , "Pooja");
interview(70 , 65 , 55 , "Vidya");
interview(60 , 79 , 88 , "Punam");
