function favorateHero(){
    console.log('My favorate Hero is : Hrithik Roshan');
}
favorateHero();
 
function favorateMovie(){
    console.log('My favorate movie is : Ananya');
}
favorateMovie();

console.log('------------------------------');

function personalDetails(firstName, lastName, collegeName){
    console.log('First Name : Pooja', 'Last Name : Lawate', 'College Name : FTC');

}
personalDetails();

console.log('---------------- Swap -----------------');
function swapValuesDude( name1, name2){
    console.log('Before Swap values is : ' , name1, name2);

    var temp = name1;
    name1 = name2;
    name2 = temp;

    console.log('After Swap values is : ', name1 ,name2);


}
swapValuesDude('Virat', 'Anushka');
swapValuesDude(1000,2000);

console.log('--------------------------------');

function addThreValues(value1, value2,value3){
    var temp = value1 + value2 + value3 ;
    console.log('Addition is : ', temp);
}
addThreValues(10.23, 600, 40);
addThreValues("Hello", "God", "Morning");
