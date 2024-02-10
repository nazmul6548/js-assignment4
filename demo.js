

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




/*  Can you find out who will get the delicious cake?
    (Part II)
This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

**Input: The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got)**

**Output: Print the name of the topper.**

1. Sample Input-1: 84 99 77
- Sample Output-1: Dela

2. Sample Input-2: 69 97 99
- Sample Output-2: Chinku */



function findingTopper(x, y, z){
    if((typeof x === "number") && (typeof y === "number") && (typeof y === "number") ){
        if ( x > y && x > z) {
            const cakeWinner = "Jim";
            return cakeWinner;
        }

        else if( y > x && y > z){
            const cakeWinner = "Dela";
            return cakeWinner;
        }

        else{
            const cakeWinner = "Chinku";
            return cakeWinner;
        }

    }

    else{
        const errorMassage = "Please inter number value (marks)";
        return errorMassage;
    }

};


const jimsMarks = 69;
const delasMarks = 97;
const chinkusMarks = 99;

const theCakeWillGet = findingTopper(jimsMarks, delasMarks, chinkusMarks);
console.log(theCakeWillGet);


/*

## Practice Problem 45

**Write an arrow function where it will do the following:**

1. It will take an array where the array elements will be the
name of your friends

2. Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.



*/


const findEven = nameList => {
    
    const evenLengthName = [];
    for(let i = 0; i < nameList.length; i++){

        const friendName = nameList[i];
        if(friendName.length % 2 == 0){
            evenLengthName.push(friendName);
        }
    }
   
    return evenLengthName;
}


const friendsName = ["Shourav", "Nirob", "Alal", "Jala", "Ashim", "Shipta", "Pritom", "Arko", "Alu"];

const evenLengthFriendsNameList = findEven(friendsName);
console.log(evenLengthFriendsNameList);