

var momGave = 1000 ;
var applePerKG = 300;
var orangePerKG = 400;
var totalCost = applePerKG + orangePerKG;


console.log( momGave - totalCost);



/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal


[View problem source 📤](https://drive.google.com/file/d/1bfxye7A1p-BBJCQCXaiUetl_qyS2Vc1E/view) */


var sideOfTriangle1 = 9;
var sideOfTriangle2 = 8;
var sideOfTriangle3 = 9;


if( sideOfTriangle1 == sideOfTriangle2 || sideOfTriangle1 == sideOfTriangle3 ||  sideOfTriangle2 == sideOfTriangle3){
    console.log("The triangle is Isosceles");
}

else{
    console.log("The triangle is not Isosceles");
}




/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */



function findLeapYear(years){
    const leapYear = [];
   for( let i = 0; i < years.length; i++){
       const index = i;
       const year = years[index];
       if(( year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ){
            leapYear.push(year);
       }
   }
   
   return leapYear;

}


const randomYears = [2023,2024,2025,2028,2030];
const leapYear_Year = findLeapYear(randomYears);

console.log("Array of leap year",leapYear_Year );