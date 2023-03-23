console.log(`===================== 1.Log the first and last element on console ==========================`);
var arraySeasonalFruits = ["Bannana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arraySeasonalFruits);
console.log(`First element "${arraySeasonalFruits[0]}" and Last element "${arraySeasonalFruits[arraySeasonalFruits.length-1]}"`);

console.log(`=============================== 2. Add Element In First =============================================`);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
var arraySeasonalFruits = ["Bannana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeasonalFruits.unshift("Papaya");
console.log("Add elenemt in first Papaya :" ,arraySeasonalFruits);

console.log(`====================================== 3. Remove Element =====================================================`);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
arraySeasonalFruits.splice(4,1);
console.log("Remove Manago :",  arraySeasonalFruits);

console.log(`================================================= 4. Add Element In Last =================================================================`);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
arraySeasonalFruits.push("Pineapple");
console.log(`Add element in last pineapply`, arraySeasonalFruits);

console.log(`================================================ 5. Insert element Dragon Fruit before Water Malon ================================================`);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
arraySeasonalFruits.splice(4, 0, "Dragon Fruit" );
console.log(`Insert element "Dragon Fruit" before "Water Malon"`,arraySeasonalFruits );

console.log(`================================ 6. Replace an element 'orange' eith 'tiwi' ==============================`);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
arraySeasonalFruits.splice(2, 1, "kiwi");
console.log(`Replace an element 'orange' eith 'tiwi'`,arraySeasonalFruits );

console.log(`======================= 7. Starting index 1 to 4 ====================`);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
// arraySeasonalFruits.slice(1,5);
console.log(`Starting index 1 to 4` , arraySeasonalFruits.slice(1,4)) ;

console.log(`==================== 8.Last three element ====================== `);
console.log(`Array Seasonal Fruits` ,arraySeasonalFruits);
console.log(`Last three element`, arraySeasonalFruits[arraySeasonalFruits.length-3]);



